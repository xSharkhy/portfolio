import { motion, useReducedMotion } from 'motion/react'
import type { SkillCategory } from '@/data/cv'

interface TerminalSkillsProps {
  categories: SkillCategory[]
  lang: 'es' | 'en' | 'ca' | 'gl'
  title?: string
}

export default function TerminalSkills({ categories, lang, title = '// skills' }: TerminalSkillsProps) {
  const prefersReducedMotion = useReducedMotion()
  const maxLabelLength = Math.max(...categories.map(c => c.label[lang].length))

  return (
    <section className="py-16 sm:py-20" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="text-sm text-[--color-text-dark] mb-8 sm:mb-10">{title}</h2>

      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={prefersReducedMotion ? {} : { duration: 0.5 }}
        className="font-mono text-xs sm:text-sm"
      >
        {/* Terminal window */}
        <figure
          className="border border-[--color-border] rounded-lg overflow-hidden bg-[--color-bg-surface]"
          role="img"
          aria-label="Terminal window displaying technical skills"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 border-b border-[--color-border] bg-[--color-bg]" aria-hidden="true">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></span>
            </div>
            <span className="text-xs text-[--color-text-muted] ml-2">~/.skills</span>
          </div>

          {/* Terminal content */}
          <div className="p-3 sm:p-4">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
              viewport={{ once: true }}
              transition={prefersReducedMotion ? {} : { delay: 0.2 }}
              className="text-[--color-accent-primary] mb-3"
              aria-hidden="true"
            >
              $ cat ~/.skills
            </motion.div>

            {/* Skills list - actual content for screen readers */}
            <dl className="space-y-1">
              {categories.map((category, index) => (
                <motion.div
                  key={category.key}
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={prefersReducedMotion ? {} : { delay: 0.3 + index * 0.1 }}
                  className="flex flex-wrap sm:flex-nowrap"
                >
                  <dt className="text-[--color-accent-purple] w-full sm:w-[100px] md:w-[140px] shrink-0">
                    {category.label[lang]}:
                  </dt>
                  <dd className="text-[--color-text] break-words">
                    {category.items.join(', ')}
                  </dd>
                </motion.div>
              ))}
            </dl>

            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
              viewport={{ once: true }}
              transition={prefersReducedMotion ? {} : { delay: 0.8 }}
              className="mt-4 flex items-center"
              aria-hidden="true"
            >
              <span className="text-[--color-accent-primary]">$</span>
              <span className={`ml-2 w-2 h-4 bg-[--color-text] ${prefersReducedMotion ? '' : 'animate-pulse'}`}></span>
            </motion.div>
          </div>
        </figure>
      </motion.div>
    </section>
  )
}
