import { motion, useReducedMotion } from 'motion/react'
import type { HireMeCopy } from '@/data/copy'
import {
  scrollRevealLeft,
  scaleInUp,
  clipRevealUp,
  fadeInUp,
  staggerContainerSlow,
  getScrollAnimationProps,
  strictViewport,
  centerViewport
} from '@/lib/animations'

interface ValuePropProps {
  copy: HireMeCopy['value']
}

export default function ValueProp({ copy }: ValuePropProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-24 sm:py-32">
      {/* Headline */}
      <motion.h2
        {...getScrollAnimationProps(scrollRevealLeft, prefersReducedMotion, strictViewport)}
        className="text-sm text-[--color-text-dark] mb-8 sm:mb-10"
      >
        // value
      </motion.h2>

      <motion.p
        {...getScrollAnimationProps(scaleInUp, prefersReducedMotion, centerViewport)}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[--color-text-bright] mb-12 sm:mb-16"
      >
        {copy.headline}
      </motion.p>

      {/* Intro */}
      <motion.div
        {...getScrollAnimationProps(staggerContainerSlow, prefersReducedMotion, centerViewport)}
        className="space-y-2 mb-12 max-w-2xl"
      >
        {copy.intro.map((line, index) => (
          <motion.p
            key={index}
            variants={prefersReducedMotion ? {} : fadeInUp}
            className="text-lg text-[--color-text-muted]"
          >
            {line}
          </motion.p>
        ))}
      </motion.div>

      {/* Value points */}
      <motion.ul
        {...getScrollAnimationProps(clipRevealUp, prefersReducedMotion, centerViewport)}
        className="space-y-3 mb-14 max-w-2xl"
      >
        {copy.points.map((point, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-[--color-text]"
          >
            <span className="text-[--color-accent-cyan] shrink-0 font-mono">→</span>
            <span className="text-lg">{point}</span>
          </li>
        ))}
      </motion.ul>

      {/* Closing */}
      <motion.div
        {...getScrollAnimationProps(scaleInUp, prefersReducedMotion, centerViewport)}
        className="space-y-1 max-w-2xl"
      >
        {copy.closing.map((line, index) => (
          <p
            key={index}
            className={`text-lg ${
              index === copy.closing.length - 1
                ? 'text-[--color-accent-primary] font-medium'
                : 'text-[--color-text]'
            }`}
          >
            {line}
          </p>
        ))}
      </motion.div>
    </section>
  )
}
