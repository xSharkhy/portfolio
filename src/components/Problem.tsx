import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { getProblemCopy } from '@/data/copy'
import type { Lang } from '@/data/i18n'
import {
  staggerContainerSlow,
  scrollRevealLeft,
  getScrollAnimationProps,
  defaultViewport
} from '@/lib/animations'

interface ProblemProps {
  lang: Lang
}

export default function Problem({ lang }: ProblemProps) {
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const copy = getProblemCopy(lang)

  // Scroll-linked progress line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%'])
  const lineOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0.3, 0.5])

  const containerProps = getScrollAnimationProps(staggerContainerSlow, prefersReducedMotion, {
    once: true,
    margin: '-50px'
  })

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 relative"
      aria-labelledby="problem-heading"
    >
      {/* Progress line */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute left-0 top-24 sm:top-32 w-0.5 bg-gradient-to-b from-[--color-accent-violet] to-[--color-accent-purple] rounded-full"
          style={{
            height: lineHeight,
            opacity: lineOpacity
          }}
          aria-hidden="true"
        />
      )}

      <div className="pl-6 sm:pl-8">
        {/* Headline */}
        <motion.h2
          id="problem-heading"
          {...getScrollAnimationProps(scrollRevealLeft, prefersReducedMotion)}
          className="text-sm text-[--color-text-dark] mb-10 sm:mb-12"
        >
          {copy.headline}
        </motion.h2>

        {/* Content blocks */}
        <motion.div
          {...containerProps}
          className="max-w-2xl space-y-6 sm:space-y-8"
        >
          {copy.blocks.map((block, index) => (
            <ProblemBlock
              key={index}
              text={block.text}
              highlight={block.highlight}
              index={index}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

interface ProblemBlockProps {
  text: string
  highlight?: boolean
  index: number
  prefersReducedMotion: boolean | null
}

function ProblemBlock({ text, highlight, index, prefersReducedMotion }: ProblemBlockProps) {
  // Add extra delay for dramatic effect on later blocks
  const extraDelay = index >= 5 ? 0.2 : 0

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: extraDelay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  // Highlight keywords like "POR QUE", "CUANDO NO", etc.
  const highlightedText = highlightKeywords(text)

  return (
    <motion.p
      variants={prefersReducedMotion ? {} : variants}
      className={`
        text-lg sm:text-xl leading-relaxed
        ${highlight
          ? 'text-[--color-accent-primary] font-medium text-xl sm:text-2xl'
          : 'text-[--color-text]'
        }
      `}
    >
      {highlightedText}
    </motion.p>
  )
}

/**
 * Highlights specific keywords in the text
 */
function highlightKeywords(text: string): React.ReactNode {
  // Keywords to highlight (in multiple languages)
  const keywords = [
    'POR QUE', 'POR QUÉ', 'WHY',
    'CUANDO NO', 'WHEN', 'QUAN NO', 'CANDO NON',
    'PER QUE', 'PER QUÈ'
  ]

  let result: React.ReactNode[] = []
  let remainingText = text
  let keyFound = false

  for (const keyword of keywords) {
    if (remainingText.includes(keyword)) {
      const parts = remainingText.split(keyword)
      result = [
        parts[0],
        <span key={keyword} className="text-[--color-accent-primary] font-medium">
          {keyword}
        </span>,
        parts.slice(1).join(keyword)
      ]
      keyFound = true
      break
    }
  }

  return keyFound ? result : text
}
