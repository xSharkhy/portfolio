import { motion, useReducedMotion } from 'motion/react'
import type { Project } from '@/data/cv'

interface ProjectsProps {
  projects: Project[]
  lang: 'es' | 'en' | 'ca' | 'gl'
  title?: string
}

export default function Projects({ projects, lang, title = '// projects' }: ProjectsProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-16 sm:py-20" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-sm text-[--color-text-dark] mb-8 sm:mb-10">{title}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list" aria-label="Project list">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={prefersReducedMotion ? {} : { duration: 0.4, delay: index * 0.1 }}
            className="group border border-[--color-border] rounded-lg p-4 sm:p-5 bg-[--color-bg-surface] hover:border-[--color-accent-purple] transition-colors"
            role="listitem"
          >
            {/* Project name */}
            <h3 className="text-[--color-text-bright] font-medium mb-2 flex items-center gap-2">
              <span className="text-[--color-accent-purple]" aria-hidden="true">&gt;</span>
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-[--color-text-muted] mb-4 line-clamp-3">
              {project.description[lang]}
            </p>

            {/* Tech tags */}
            <ul className="flex flex-wrap gap-1.5 mb-4" aria-label="Technologies used">
              {project.technologies.map(tech => (
                <li
                  key={tech}
                  className="px-2 py-0.5 text-xs bg-[--color-bg] border border-[--color-border] rounded text-[--color-text-muted]"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex items-center gap-2 text-xs">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--color-text-muted] hover:text-[--color-accent-primary] transition-colors flex items-center gap-1.5 px-2 py-2 -mx-2 rounded min-h-11"
                  aria-label={`View ${project.name} source code on GitHub (opens in new tab)`}
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--color-text-muted] hover:text-[--color-accent-primary] transition-colors flex items-center gap-1.5 px-2 py-2 -mx-2 rounded min-h-11"
                  aria-label={`Visit ${project.name} live demo (opens in new tab)`}
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Demo</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
