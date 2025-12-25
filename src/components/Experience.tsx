import { motion, useReducedMotion } from 'motion/react'
import { getExperienceCopy, getHeadlines } from '@/data/copy'
import type { Lang } from '@/data/i18n'
import { t } from '@/data/i18n'
import Card, { CardHeader, CardTitle, CardLabel, CardTags, CardPunchline } from '@/components/ui/Card'
import {
  staggerContainer,
  scrollRevealLeft,
  scrollReveal,
  getScrollAnimationProps,
  defaultViewport
} from '@/lib/animations'

interface ExperienceProps {
  lang: Lang
}

export default function Experience({ lang }: ExperienceProps) {
  const prefersReducedMotion = useReducedMotion()
  const experiences = getExperienceCopy(lang)
  const headlines = getHeadlines(lang)

  // Separate featured (main) card from secondary cards
  const featuredExp = experiences.find(exp => exp.featured)
  const secondaryExps = experiences.filter(exp => !exp.featured)

  const containerProps = getScrollAnimationProps(staggerContainer, prefersReducedMotion)

  return (
    <section
      className="py-20 sm:py-28"
      aria-labelledby="experience-heading"
      id="experience"
    >
      {/* Headline */}
      <motion.h2
        id="experience-heading"
        {...getScrollAnimationProps(scrollRevealLeft, prefersReducedMotion)}
        className="text-sm text-[--color-text-dark] mb-10 sm:mb-12"
      >
        {headlines.experience}
      </motion.h2>

      <motion.div {...containerProps} className="space-y-6">
        {/* Featured Card */}
        {featuredExp && (
          <ExperienceCardFeatured
            experience={featuredExp}
            prefersReducedMotion={prefersReducedMotion}
          />
        )}

        {/* Secondary Cards Grid */}
        {secondaryExps.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {secondaryExps.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={index}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        )}

        {/* CTA to full CV */}
        <motion.div
          {...getScrollAnimationProps(scrollReveal, prefersReducedMotion, {
            once: true,
            margin: '-50px'
          })}
          className="pt-4"
        >
          <a
            href={`/${lang}/cv`}
            className="inline-flex items-center gap-2 text-sm text-[--color-text-muted] hover:text-[--color-accent-primary] transition-colors group"
          >
            <span>{t(lang, 'cta.viewCV')}</span>
            <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
              →
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

// ============================================================================
// FEATURED CARD (Large)
// ============================================================================

interface ExperienceCardFeaturedProps {
  experience: ReturnType<typeof getExperienceCopy>[0]
  prefersReducedMotion: boolean | null
}

function ExperienceCardFeatured({ experience, prefersReducedMotion }: ExperienceCardFeaturedProps) {
  return (
    <Card
      as="article"
      className="p-6 sm:p-8"
      hover3D={!prefersReducedMotion}
      hoverBorderColor="var(--color-accent-cyan)"
    >
      <CardHeader className="mb-6">
        <CardLabel>{experience.company} · {experience.period}</CardLabel>
        <CardTitle as="h3" className="text-xl sm:text-2xl mt-2">
          {experience.headline.replace('> ', '')}
        </CardTitle>
      </CardHeader>

      {/* Narrative */}
      <div className="space-y-3 text-[--color-text] leading-relaxed">
        {experience.narrative.map((line, index) => (
          <p key={index} className={`${index < 4 ? 'text-[--color-text-muted]' : ''}`}>
            {line}
          </p>
        ))}
      </div>

      {/* Punchline */}
      <CardPunchline className="text-lg mt-6">
        {experience.punchline}
      </CardPunchline>

      {/* Technologies */}
      <CardTags tags={experience.technologies} className="mt-6" />
    </Card>
  )
}

// ============================================================================
// SECONDARY CARD
// ============================================================================

interface ExperienceCardProps {
  experience: ReturnType<typeof getExperienceCopy>[0]
  index: number
  prefersReducedMotion: boolean | null
}

function ExperienceCard({ experience, index, prefersReducedMotion }: ExperienceCardProps) {
  return (
    <Card
      as="article"
      hover3D={!prefersReducedMotion}
    >
      <CardHeader>
        <CardLabel>{experience.company} · {experience.period}</CardLabel>
        <CardTitle as="h3" className="mt-2">
          {experience.headline.replace('> ', '')}
        </CardTitle>
      </CardHeader>

      {/* Narrative (shorter for secondary cards) */}
      <div className="space-y-2 text-sm text-[--color-text-muted] leading-relaxed">
        {experience.narrative.slice(0, 6).map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>

      {/* Punchline */}
      <CardPunchline className="text-sm">
        {experience.punchline}
      </CardPunchline>

      {/* Technologies */}
      <CardTags tags={experience.technologies} className="mt-4" />

      {/* Optional CTA */}
      {experience.cta && (
        <a
          href={experience.cta.url}
          className="inline-flex items-center gap-1 mt-4 text-xs text-[--color-text-muted] hover:text-[--color-accent-primary] transition-colors"
        >
          <span>{experience.cta.text}</span>
          <span aria-hidden="true">→</span>
        </a>
      )}
    </Card>
  )
}
