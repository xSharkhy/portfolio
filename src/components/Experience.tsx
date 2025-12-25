import { motion, useReducedMotion } from 'motion/react'
import { getExperienceCopy, getHeadlines } from '@/data/copy'
import type { Lang } from '@/data/i18n'
import Card, { CardHeader, CardTitle, CardLabel, CardTags, CardPunchline } from '@/components/ui/Card'
import {
  scrollRevealLeft,
  scrollRevealRight,
  scrollRevealBlur,
  getScrollAnimationProps,
  strictViewport,
  centerViewport
} from '@/lib/animations'

interface ExperienceProps {
  lang: Lang
}

export default function Experience({ lang }: ExperienceProps) {
  const prefersReducedMotion = useReducedMotion()
  const experiences = getExperienceCopy(lang)
  const headlines = getHeadlines(lang)

  const featuredExp = experiences.find(exp => exp.featured)
  const secondaryExps = experiences.filter(exp => !exp.featured)

  return (
    <section
      className="py-24 sm:py-32"
      aria-labelledby="experience-heading"
      id="experience"
    >
      {/* Headline - from left */}
      <motion.h2
        id="experience-heading"
        {...getScrollAnimationProps(scrollRevealLeft, prefersReducedMotion, strictViewport)}
        className="text-sm text-[--color-text-dark] mb-12 sm:mb-16"
      >
        {headlines.experience}
      </motion.h2>

      <div className="space-y-8">
        {/* Featured Card - scale up with blur */}
        {featuredExp && (
          <motion.div
            {...getScrollAnimationProps(scrollRevealBlur, prefersReducedMotion, centerViewport)}
          >
            <ExperienceCardFeatured
              experience={featuredExp}
              prefersReducedMotion={prefersReducedMotion}
            />
          </motion.div>
        )}

        {/* Secondary Cards Grid - alternate directions */}
        {secondaryExps.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {secondaryExps.map((exp, index) => (
              <motion.div
                key={exp.id}
                {...getScrollAnimationProps(
                  index % 2 === 0 ? scrollRevealLeft : scrollRevealRight,
                  prefersReducedMotion,
                  strictViewport
                )}
              >
                <ExperienceCard
                  experience={exp}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </motion.div>
            ))}
          </div>
        )}

      </div>
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
      className="p-6 sm:p-8 md:p-10"
      hover3D={!prefersReducedMotion}
      hoverBorderColor="var(--color-accent-cyan)"
      animate={false} // Parent handles animation
    >
      <CardHeader className="mb-6">
        <CardLabel>{experience.company} · {experience.period}</CardLabel>
        <CardTitle as="h3" className="text-xl sm:text-2xl md:text-3xl mt-2">
          {experience.headline.replace('> ', '')}
        </CardTitle>
      </CardHeader>

      {/* Narrative */}
      <div className="space-y-3 text-[--color-text] text-base sm:text-lg leading-relaxed">
        {experience.narrative.map((line, index) => (
          <p key={index} className={index < 4 ? 'text-[--color-text-muted]' : ''}>
            {line}
          </p>
        ))}
      </div>

      {/* Punchline */}
      <CardPunchline className="text-lg sm:text-xl mt-8">
        {experience.punchline}
      </CardPunchline>

      {/* Technologies */}
      <CardTags tags={experience.technologies} className="mt-8" />
    </Card>
  )
}

// ============================================================================
// SECONDARY CARD
// ============================================================================

interface ExperienceCardProps {
  experience: ReturnType<typeof getExperienceCopy>[0]
  prefersReducedMotion: boolean | null
}

function ExperienceCard({ experience, prefersReducedMotion }: ExperienceCardProps) {
  return (
    <Card
      as="article"
      hover3D={!prefersReducedMotion}
      animate={false} // Parent handles animation
    >
      <CardHeader>
        <CardLabel>{experience.company} · {experience.period}</CardLabel>
        <CardTitle as="h3" className="mt-2">
          {experience.headline.replace('> ', '')}
        </CardTitle>
      </CardHeader>

      {/* Narrative (shorter for secondary cards) */}
      <div className="space-y-2 text-sm text-[--color-text-muted] leading-relaxed mt-4">
        {experience.narrative.slice(0, 6).map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>

      {/* Punchline */}
      <CardPunchline className="text-sm mt-4">
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
