import { motion, useReducedMotion } from 'motion/react'
import type { HireMeCopy } from '@/data/copy'
import {
  scrollRevealBlur,
  fadeInUp,
  staggerContainerSlow,
  getScrollAnimationProps,
  centerViewport
} from '@/lib/animations'

interface HireHookProps {
  copy: HireMeCopy['hook']
}

export default function HireHook({ copy }: HireHookProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-16 sm:py-24">
      {/* Headline */}
      <motion.h1
        {...getScrollAnimationProps(scrollRevealBlur, prefersReducedMotion, centerViewport)}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[--color-text-bright] mb-8 sm:mb-12 whitespace-pre-line leading-tight"
      >
        {copy.headline}
      </motion.h1>

      {/* Subheadline */}
      <motion.div
        {...getScrollAnimationProps(staggerContainerSlow, prefersReducedMotion, centerViewport)}
        className="space-y-2 max-w-2xl"
      >
        {copy.subheadline.map((line, index) => (
          <motion.p
            key={index}
            variants={prefersReducedMotion ? {} : fadeInUp}
            className={`text-lg sm:text-xl ${
              index === copy.subheadline.length - 1
                ? 'text-[--color-accent-primary] font-medium mt-4'
                : 'text-[--color-text-muted]'
            }`}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </section>
  )
}
