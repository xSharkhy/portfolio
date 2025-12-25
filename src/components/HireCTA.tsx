import { motion, useReducedMotion } from 'motion/react'
import type { Lang } from '@/data/i18n'
import {
  scrollRevealBlur,
  scaleInUp,
  getScrollAnimationProps,
  centerViewport
} from '@/lib/animations'

interface HireCTAProps {
  lang: Lang
}

const copy: Record<Lang, { headline: string; subtext: string; cta: string }> = {
  es: {
    headline: '¿Y si esto es lo que necesitas?',
    subtext: 'Si has llegado hasta aquí, quizás valga la pena que hablemos.',
    cta: 'Conóceme mejor'
  },
  en: {
    headline: 'What if this is what you need?',
    subtext: 'If you\'ve made it this far, maybe we should talk.',
    cta: 'Get to know me'
  },
  ca: {
    headline: 'I si això és el que necessites?',
    subtext: 'Si has arribat fins ací, potser val la pena que parlem.',
    cta: 'Coneix-me millor'
  },
  gl: {
    headline: 'E se isto é o que necesitas?',
    subtext: 'Se chegaches ata aquí, quizais pague a pena que falemos.',
    cta: 'Coñéceme mellor'
  }
}

export default function HireCTA({ lang }: HireCTAProps) {
  const prefersReducedMotion = useReducedMotion()
  const text = copy[lang]

  return (
    <section className="py-16 sm:py-20 border-t border-[--color-border]">
      <motion.div
        {...getScrollAnimationProps(scrollRevealBlur, prefersReducedMotion, centerViewport)}
        className="text-center max-w-xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[--color-text-bright] mb-4">
          {text.headline}
        </h2>
        <p className="text-[--color-text-muted] mb-8">
          {text.subtext}
        </p>
        <motion.a
          {...getScrollAnimationProps(scaleInUp, prefersReducedMotion, centerViewport)}
          href={`/${lang}/contratame`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[--color-accent-primary] text-[--color-bg] font-medium rounded-lg hover:bg-[--color-accent-primary]/90 transition-colors text-lg"
        >
          {text.cta}
          <span aria-hidden="true">→</span>
        </motion.a>
      </motion.div>
    </section>
  )
}
