import { motion, useReducedMotion } from 'motion/react'
import type { HireMeCopy } from '@/data/copy'
import {
  scrollRevealLeft,
  scrollRevealRight,
  fadeInUp,
  scaleInUp,
  clipRevealUp,
  staggerContainerSlow,
  getScrollAnimationProps,
  getAlternatingVariant,
  strictViewport,
  centerViewport
} from '@/lib/animations'

interface ProofCaseProps {
  copy: HireMeCopy['proof']
}

export default function ProofCase({ copy }: ProofCaseProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-24 sm:py-32">
      {/* Headline */}
      <motion.h2
        {...getScrollAnimationProps(scrollRevealLeft, prefersReducedMotion, strictViewport)}
        className="text-sm text-[--color-text-dark] mb-8 sm:mb-10"
      >
        // proof
      </motion.h2>

      <motion.p
        {...getScrollAnimationProps(clipRevealUp, prefersReducedMotion, centerViewport)}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[--color-text-bright] mb-4"
      >
        {copy.headline}
      </motion.p>

      {/* Subheadline - Project name */}
      <motion.p
        {...getScrollAnimationProps(scrollRevealRight, prefersReducedMotion, centerViewport)}
        className="text-lg sm:text-xl text-[--color-accent-purple] mb-12 sm:mb-16"
      >
        {copy.subheadline}
      </motion.p>

      {/* Intro narrative */}
      <motion.div
        {...getScrollAnimationProps(staggerContainerSlow, prefersReducedMotion, centerViewport)}
        className="space-y-2 mb-10 max-w-2xl"
      >
        {copy.intro.map((line, index) => (
          <motion.p
            key={index}
            variants={prefersReducedMotion ? {} : fadeInUp}
            className="text-[--color-text] text-lg"
          >
            {line}
          </motion.p>
        ))}
      </motion.div>

      {/* Timeline - THE PUNCH */}
      <motion.div
        {...getScrollAnimationProps(scaleInUp, prefersReducedMotion, centerViewport)}
        className="bg-[--color-bg-surface] border border-[--color-border] rounded-lg p-6 sm:p-8 mb-12 max-w-2xl hover:border-[--color-accent-cyan] transition-colors"
      >
        <p className="text-xl sm:text-2xl text-[--color-accent-cyan] font-mono whitespace-pre-line leading-relaxed">
          {copy.timeline}
        </p>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        {...getScrollAnimationProps(staggerContainerSlow, prefersReducedMotion, centerViewport)}
        className="grid sm:grid-cols-3 gap-4 mb-12 max-w-3xl"
      >
        <StackBlock label="Frontend" items={copy.stack.frontend} color="cyan" index={0} prefersReducedMotion={prefersReducedMotion} />
        <StackBlock label="Backend" items={copy.stack.backend} color="purple" index={1} prefersReducedMotion={prefersReducedMotion} />
        <StackBlock label="Infra" items={copy.stack.infra} color="green" index={2} prefersReducedMotion={prefersReducedMotion} />
      </motion.div>

      {/* Features */}
      <motion.ul
        {...getScrollAnimationProps(scrollRevealLeft, prefersReducedMotion, centerViewport)}
        className="space-y-2 mb-12 max-w-2xl"
      >
        {copy.features.map((feature, index) => (
          <li
            key={index}
            className="text-[--color-text-muted] flex items-start gap-2"
          >
            <span className="text-[--color-accent-green] shrink-0">→</span>
            <span>{feature}</span>
          </li>
        ))}
      </motion.ul>

      {/* Closing */}
      <motion.div
        {...getScrollAnimationProps(clipRevealUp, prefersReducedMotion, centerViewport)}
        className="space-y-1 mb-12 max-w-2xl"
      >
        {copy.closing.map((line, index) => (
          <p
            key={index}
            className={`text-lg ${
              index === 0
                ? 'text-[--color-text-bright] font-medium'
                : index === copy.closing.length - 1
                ? 'text-[--color-accent-primary] font-bold text-xl'
                : 'text-[--color-text]'
            }`}
          >
            {line}
          </p>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div
        {...getScrollAnimationProps(scaleInUp, prefersReducedMotion, centerViewport)}
        className="flex flex-wrap gap-4"
      >
        <a
          href="https://impostor.ismobla.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[--color-accent-primary] text-[--color-bg] font-medium rounded-lg hover:bg-[--color-accent-primary]/90 transition-colors"
        >
          {copy.cta.play}
          <span aria-hidden="true">→</span>
        </a>
        <a
          href="https://github.com/xSharkhy/impostor-game"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[--color-bg-surface] border border-[--color-border] rounded-lg text-[--color-text] hover:border-[--color-accent-primary] hover:text-[--color-accent-primary] transition-colors"
        >
          {copy.cta.code}
          <span aria-hidden="true">↗</span>
        </a>
      </motion.div>
    </section>
  )
}

// Stack block component
function StackBlock({
  label,
  items,
  color,
  index,
  prefersReducedMotion
}: {
  label: string
  items: string[]
  color: 'cyan' | 'purple' | 'green'
  index: number
  prefersReducedMotion: boolean | null
}) {
  const colorMap = {
    cyan: 'hover:border-[--color-accent-cyan]',
    purple: 'hover:border-[--color-accent-purple]',
    green: 'hover:border-[--color-accent-green]'
  }

  return (
    <motion.div
      variants={prefersReducedMotion ? {} : getAlternatingVariant(index)}
      className={`bg-[--color-bg-surface] border border-[--color-border] rounded-lg p-4 transition-colors ${colorMap[color]}`}
    >
      <p className="text-xs text-[--color-text-dark] uppercase tracking-wider mb-2">
        {label}
      </p>
      <p className="text-sm text-[--color-text] font-mono">
        {items.join(' · ')}
      </p>
    </motion.div>
  )
}
