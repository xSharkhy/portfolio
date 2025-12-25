import { motion, useReducedMotion } from 'motion/react'
import { getProjectsCopy, getHeadlines } from '@/data/copy'
import type { Lang } from '@/data/i18n'
import Card, { CardHeader, CardTitle, CardTags, CardPunchline } from '@/components/ui/Card'
import {
  staggerContainerSlow,
  scrollRevealLeft,
  getScrollAnimationProps
} from '@/lib/animations'

interface ProjectsProps {
  lang: Lang
}

export default function Projects({ lang }: ProjectsProps) {
  const prefersReducedMotion = useReducedMotion()
  const projects = getProjectsCopy(lang)
  const headlines = getHeadlines(lang)

  const containerProps = getScrollAnimationProps(staggerContainerSlow, prefersReducedMotion)

  return (
    <section
      className="py-20 sm:py-28"
      aria-labelledby="projects-heading"
      id="projects"
    >
      {/* Headline */}
      <motion.h2
        id="projects-heading"
        {...getScrollAnimationProps(scrollRevealLeft, prefersReducedMotion)}
        className="text-sm text-[--color-text-dark] mb-10 sm:mb-12"
      >
        {headlines.projects}
      </motion.h2>

      {/* Projects list - vertical narrative layout */}
      <motion.div
        {...containerProps}
        className="space-y-8"
        role="list"
        aria-label="Projects"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </motion.div>
    </section>
  )
}

// ============================================================================
// PROJECT CARD
// ============================================================================

interface ProjectCardProps {
  project: ReturnType<typeof getProjectsCopy>[0]
  prefersReducedMotion: boolean | null
}

function ProjectCard({ project, prefersReducedMotion }: ProjectCardProps) {
  return (
    <Card
      as="article"
      hover3D={!prefersReducedMotion}
      className="p-6 sm:p-8"
    >
      <CardHeader className="mb-4">
        <CardTitle as="h3" className="text-lg sm:text-xl">
          {project.name}
        </CardTitle>
        <p className="text-[--color-accent-purple] text-sm sm:text-base mt-1">
          {project.tagline}
        </p>
      </CardHeader>

      {/* Narrative */}
      <div className="space-y-3 text-[--color-text] text-sm sm:text-base leading-relaxed mb-6">
        {project.narrative.map((line, idx) => {
          // Style quoted lines differently
          const isQuote = line.startsWith('"')
          const isBullet = line.startsWith('-')

          return (
            <p
              key={idx}
              className={`
                ${isQuote ? 'text-[--color-text-muted] italic' : ''}
                ${isBullet ? 'pl-4 text-[--color-text-muted]' : ''}
              `}
            >
              {line}
            </p>
          )
        })}
      </div>

      {/* Punchline */}
      <CardPunchline className="text-sm sm:text-base">
        {project.punchline}
      </CardPunchline>

      {/* Technologies */}
      <CardTags tags={project.technologies} className="mt-6" />

      {/* Links */}
      <div className="flex items-center gap-4 mt-6 pt-4 border-t border-[--color-border]">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[--color-text-muted] hover:text-[--color-accent-primary] transition-colors group"
            aria-label={`View ${project.name} source code on GitHub (opens in new tab)`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
            <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">↗</span>
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[--color-text-muted] hover:text-[--color-accent-primary] transition-colors group"
            aria-label={`Visit ${project.name} live demo (opens in new tab)`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>Demo</span>
            <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </Card>
  )
}
