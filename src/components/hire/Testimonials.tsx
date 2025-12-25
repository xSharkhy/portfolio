import { motion, useReducedMotion } from 'motion/react'
import type { HireMeCopy } from '@/data/copy'
import {
  scrollRevealRight,
  clipRevealLeft,
  staggerContainerSlow,
  getScrollAnimationProps,
  getAlternatingVariant,
  strictViewport,
  centerViewport
} from '@/lib/animations'

interface TestimonialsProps {
  copy: HireMeCopy['testimonials']
}

export default function Testimonials({ copy }: TestimonialsProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-24 sm:py-32">
      {/* Headline */}
      <motion.h2
        {...getScrollAnimationProps(scrollRevealRight, prefersReducedMotion, strictViewport)}
        className="text-sm text-[--color-text-dark] mb-8 sm:mb-10"
      >
        // testimonials
      </motion.h2>

      <motion.p
        {...getScrollAnimationProps(clipRevealLeft, prefersReducedMotion, centerViewport)}
        className="text-2xl sm:text-3xl font-bold text-[--color-text-bright] mb-12 sm:mb-16 whitespace-pre-line max-w-xl"
      >
        {copy.headline}
      </motion.p>

      {/* Testimonial cards */}
      <motion.div
        {...getScrollAnimationProps(staggerContainerSlow, prefersReducedMotion, centerViewport)}
        className="grid sm:grid-cols-2 gap-6 max-w-3xl"
      >
        {copy.items.map((item, index) => (
          <motion.div
            key={index}
            variants={prefersReducedMotion ? {} : getAlternatingVariant(index)}
            whileHover={prefersReducedMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
            className="bg-[--color-bg-surface] border border-[--color-border] rounded-lg p-6 hover:border-[--color-accent-purple] hover:shadow-lg hover:shadow-[--color-accent-purple]/10 transition-all cursor-default"
          >
            <p className="text-lg text-[--color-accent-purple] font-medium mb-3">
              {item.quote}
            </p>
            <p className="text-[--color-text] text-sm leading-relaxed">
              <span className="text-[--color-text-dark]">→ </span>
              {item.translation}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
