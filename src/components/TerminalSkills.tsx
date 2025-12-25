import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { getSkillsCopy, getHeadlines } from '@/data/copy'
import type { Lang } from '@/data/i18n'
import Terminal, { TerminalPrompt } from '@/components/ui/Terminal'
import TypeWriter from '@/components/ui/TypeWriter'
import {
  staggerContainerSlow,
  scrollRevealLeft,
  scrollRevealBlur,
  fadeInUp,
  getScrollAnimationProps,
  strictViewport,
  centerViewport
} from '@/lib/animations'

interface TerminalSkillsProps {
  lang: Lang
}

export default function TerminalSkills({ lang }: TerminalSkillsProps) {
  const prefersReducedMotion = useReducedMotion()
  const copy = getSkillsCopy(lang)
  const headlines = getHeadlines(lang)
  const [commandComplete, setCommandComplete] = useState(prefersReducedMotion ?? false)

  return (
    <section className="py-20 sm:py-28" aria-labelledby="skills-heading" id="skills">
      {/* Headline - from left */}
      <motion.h2
        id="skills-heading"
        {...getScrollAnimationProps(scrollRevealLeft, prefersReducedMotion, strictViewport)}
        className="text-sm text-[--color-text-dark] mb-8 sm:mb-10"
      >
        {headlines.skills}
      </motion.h2>

      {/* Intro text - blur in */}
      <motion.p
        {...getScrollAnimationProps(scrollRevealBlur, prefersReducedMotion, centerViewport)}
        className="text-[--color-text] text-lg mb-8 max-w-2xl"
      >
        {copy.intro}
      </motion.p>

      {/* Terminal */}
      <Terminal title="~/.skills" animate={true}>
        {/* Command */}
        <div className="text-[--color-accent-primary] mb-4">
          {prefersReducedMotion ? (
            '$ cat ~/.approach'
          ) : (
            <TypeWriter
              text="$ cat ~/.approach"
              charDelay={50}
              onComplete={() => setCommandComplete(true)}
              cursorClassName="text-[--color-text]"
              showCursor={false}
            />
          )}
        </div>

        {/* Skills categories */}
        <motion.dl
          variants={prefersReducedMotion ? {} : staggerContainerSlow}
          initial="hidden"
          animate={commandComplete ? 'visible' : 'hidden'}
          className="space-y-4"
        >
          {copy.categories.map((category, index) => (
            <SkillCategory
              key={category.key}
              label={category.label}
              items={category.items}
              comment={category.comment}
              index={index}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.dl>

        {/* Prompt */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={commandComplete ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6"
        >
          <TerminalPrompt blinking={!prefersReducedMotion} />
        </motion.div>
      </Terminal>

      {/* Outro text - fade up */}
      <motion.p
        {...getScrollAnimationProps(fadeInUp, prefersReducedMotion, strictViewport)}
        className="text-[--color-text-muted] text-sm mt-6 italic"
      >
        {copy.outro}
      </motion.p>
    </section>
  )
}

// ============================================================================
// SKILL CATEGORY
// ============================================================================

interface SkillCategoryProps {
  label: string
  items: string[]
  comment: string
  index: number
  prefersReducedMotion: boolean | null
}

function SkillCategory({
  label,
  items,
  comment,
  index,
  prefersReducedMotion
}: SkillCategoryProps) {
  const variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.1
      }
    }
  }

  return (
    <motion.div
      variants={prefersReducedMotion ? {} : variants}
      className="space-y-1"
    >
      {/* Label and items */}
      <div className="flex flex-wrap sm:flex-nowrap gap-x-2">
        <dt className="text-[--color-accent-purple] shrink-0">
          &gt; {label}:
        </dt>
        <dd className="text-[--color-text]">
          {items.join(', ')}
        </dd>
      </div>

      {/* Comment */}
      <motion.p
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: (index * 0.1) + 0.15 }}
        className="text-[--color-text-muted] pl-4 text-xs sm:text-sm"
      >
        # {comment}
      </motion.p>
    </motion.div>
  )
}
