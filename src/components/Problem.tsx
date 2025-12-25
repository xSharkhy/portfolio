import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { getProblemCopy } from '@/data/copy'
import type { Lang } from '@/data/i18n'

interface ProblemProps {
  lang: Lang
}

/**
 * Problem Section with Sticky Scroll Effect
 *
 * The section has extra height. As you scroll through it,
 * the content container stays fixed ("sticky") and text
 * appears progressively based on scroll progress.
 * This creates the "static screen" effect where content
 * materializes while the page feels stationary.
 */
export default function Problem({ lang }: ProblemProps) {
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const copy = getProblemCopy(lang)

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })

  // Progress line height (left side decoration)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  // If reduced motion, show everything immediately
  if (prefersReducedMotion) {
    return (
      <section className="py-24 sm:py-32" aria-labelledby="problem-heading">
        <div className="pl-6 sm:pl-8">
          <h2 id="problem-heading" className="text-sm text-[--color-text-dark] mb-10">
            {copy.headline}
          </h2>
          <div className="max-w-2xl space-y-6">
            {copy.blocks.map((block, index) => (
              <p
                key={index}
                className={`text-lg sm:text-xl leading-relaxed ${
                  block.highlight
                    ? 'text-[--color-accent-primary] font-medium text-xl sm:text-2xl'
                    : 'text-[--color-text]'
                }`}
              >
                {block.text}
              </p>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh]" // Extra height for scroll distance
      aria-labelledby="problem-heading"
    >
      {/* Sticky container - stays fixed while scrolling through section */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Progress line (left side) */}
        <motion.div
          className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-[--color-accent-violet] to-[--color-accent-purple] origin-top"
          style={{ height: lineHeight }}
          aria-hidden="true"
        />

        <div className="pl-6 sm:pl-8 pr-4 w-full">
          {/* Headline - appears first */}
          <StickyText progress={scrollYProgress} showAt={[0, 0.1]} hideAt={[0.9, 1]}>
            <h2
              id="problem-heading"
              className="text-sm text-[--color-text-dark] mb-10 sm:mb-12"
            >
              {copy.headline}
            </h2>
          </StickyText>

          {/* Content blocks - appear sequentially */}
          <div className="max-w-2xl space-y-6 sm:space-y-8">
            {copy.blocks.map((block, index) => {
              // Calculate when each block should appear
              // Blocks appear from 10% to 85% of scroll progress
              const totalBlocks = copy.blocks.length
              const startProgress = 0.1 + (index / totalBlocks) * 0.6
              const peakProgress = startProgress + 0.1

              return (
                <StickyText
                  key={index}
                  progress={scrollYProgress}
                  showAt={[startProgress, peakProgress]}
                  hideAt={[0.9, 1]}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                >
                  <p
                    className={`text-lg sm:text-xl leading-relaxed ${
                      block.highlight
                        ? 'text-[--color-accent-primary] font-medium text-xl sm:text-2xl'
                        : 'text-[--color-text]'
                    }`}
                  >
                    {highlightKeywords(block.text)}
                  </p>
                </StickyText>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// STICKY TEXT COMPONENT
// ============================================================================

interface StickyTextProps {
  children: React.ReactNode
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  showAt: [number, number] // [start, peak] - when to fade in
  hideAt: [number, number] // [start, end] - when to fade out
  direction?: 'up' | 'left' | 'right' | 'scale'
}

function StickyText({
  children,
  progress,
  showAt,
  hideAt,
  direction = 'up'
}: StickyTextProps) {
  // Opacity: fade in, stay visible, fade out
  const opacity = useTransform(
    progress,
    [showAt[0], showAt[1], hideAt[0], hideAt[1]],
    [0, 1, 1, 0]
  )

  // Movement based on direction
  const y = useTransform(
    progress,
    [showAt[0], showAt[1], hideAt[0], hideAt[1]],
    direction === 'up' ? [60, 0, 0, -30] : [0, 0, 0, 0]
  )

  const x = useTransform(
    progress,
    [showAt[0], showAt[1], hideAt[0], hideAt[1]],
    direction === 'left'
      ? [-80, 0, 0, 0]
      : direction === 'right'
      ? [80, 0, 0, 0]
      : [0, 0, 0, 0]
  )

  const scale = useTransform(
    progress,
    [showAt[0], showAt[1], hideAt[0], hideAt[1]],
    direction === 'scale' ? [0.8, 1, 1, 0.95] : [1, 1, 1, 1]
  )

  const blur = useTransform(
    progress,
    [showAt[0], showAt[1]],
    ['blur(8px)', 'blur(0px)']
  )

  return (
    <motion.div style={{ opacity, y, x, scale, filter: blur }}>
      {children}
    </motion.div>
  )
}

// ============================================================================
// HELPERS
// ============================================================================

/**
 * Highlights specific keywords in the text
 */
function highlightKeywords(text: string): React.ReactNode {
  const keywords = [
    'POR QUE', 'POR QUÉ', 'WHY',
    'CUANDO NO', 'WHEN', 'QUAN NO', 'CANDO NON',
    'PER QUE', 'PER QUÈ'
  ]

  for (const keyword of keywords) {
    if (text.includes(keyword)) {
      const parts = text.split(keyword)
      return (
        <>
          {parts[0]}
          <span className="text-[--color-accent-primary] font-medium">
            {keyword}
          </span>
          {parts.slice(1).join(keyword)}
        </>
      )
    }
  }

  return text
}
