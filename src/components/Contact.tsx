import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { getContactCopy } from '@/data/copy'
import type { Lang } from '@/data/i18n'
import TypeWriter from '@/components/ui/TypeWriter'
import {
  staggerContainer,
  scrollReveal,
  fadeInUp,
  getScrollAnimationProps
} from '@/lib/animations'

interface ContactProps {
  lang: Lang
}

export default function Contact({ lang }: ContactProps) {
  const prefersReducedMotion = useReducedMotion()
  const copy = getContactCopy(lang)
  const [commandComplete, setCommandComplete] = useState(prefersReducedMotion ?? false)

  const containerProps = getScrollAnimationProps(staggerContainer, prefersReducedMotion, {
    once: true,
    margin: '-100px'
  })

  return (
    <section
      className="py-24 sm:py-32"
      aria-labelledby="contact-heading"
      id="contact"
    >
      {/* Headline */}
      <motion.h2
        id="contact-heading"
        {...getScrollAnimationProps(scrollReveal, prefersReducedMotion)}
        className="text-sm text-[--color-text-dark] mb-10 sm:mb-12"
      >
        {copy.headline}
      </motion.h2>

      <div className="max-w-2xl">
        {/* Command with TypeWriter */}
        <motion.div
          {...getScrollAnimationProps(fadeInUp, prefersReducedMotion)}
          className="text-xl sm:text-2xl text-[--color-accent-primary] font-mono mb-8"
        >
          {prefersReducedMotion ? (
            <span>{copy.command}</span>
          ) : (
            <TypeWriter
              text={copy.command}
              charDelay={50}
              onComplete={() => setCommandComplete(true)}
              cursorClassName="text-[--color-text]"
            />
          )}
        </motion.div>

        {/* Narrative */}
        <motion.div
          {...containerProps}
          className={`space-y-4 mb-12 transition-opacity duration-500 ${
            commandComplete ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {copy.narrative.map((line, index) => (
            <motion.p
              key={index}
              variants={prefersReducedMotion ? {} : fadeInUp}
              className="text-[--color-text] text-lg leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* Contact Options */}
        <motion.div
          {...getScrollAnimationProps(staggerContainer, prefersReducedMotion)}
          className={`grid sm:grid-cols-3 gap-4 mb-12 transition-opacity duration-500 ${
            commandComplete ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ContactCard
            type="email"
            value={copy.options.email.value}
            label={copy.options.email.label}
            description={copy.options.email.description}
            href={`mailto:${copy.options.email.value}`}
            prefersReducedMotion={prefersReducedMotion}
            accentColor="var(--color-accent-cyan)"
          />
          <ContactCard
            type="linkedin"
            value={copy.options.linkedin.value}
            label={copy.options.linkedin.label}
            description={copy.options.linkedin.description}
            href={copy.options.linkedin.value}
            external
            prefersReducedMotion={prefersReducedMotion}
            accentColor="var(--color-accent-purple)"
          />
          <ContactCard
            type="github"
            value={copy.options.github.value}
            label={copy.options.github.label}
            description={copy.options.github.description}
            href={copy.options.github.value}
            external
            prefersReducedMotion={prefersReducedMotion}
            accentColor="var(--color-accent-green)"
          />
        </motion.div>

        {/* Footer */}
        <motion.div
          {...getScrollAnimationProps(fadeInUp, prefersReducedMotion, {
            once: true,
            margin: '-50px'
          })}
          className={`space-y-1 text-sm text-[--color-text-muted] transition-opacity duration-500 ${
            commandComplete ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {copy.footer.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          <p className="mt-4 font-mono text-[--color-text-dark]">
            {copy.exitCode}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// CONTACT CARD
// ============================================================================

interface ContactCardProps {
  type: 'email' | 'linkedin' | 'github'
  value: string
  label: string
  description: string
  href: string
  external?: boolean
  prefersReducedMotion: boolean | null
  accentColor: string
}

function ContactCard({
  type,
  value,
  label,
  description,
  href,
  external = false,
  prefersReducedMotion,
  accentColor
}: ContactCardProps) {
  const Icon = getIcon(type)

  return (
    <motion.a
      variants={prefersReducedMotion ? {} : fadeInUp}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group block p-4 sm:p-5 border border-[--color-border] rounded-lg bg-[--color-bg-surface] hover:border-[--color-accent-purple] transition-all duration-200"
      style={{
        '--hover-color': accentColor
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accentColor
        e.currentTarget.style.boxShadow = `0 4px 20px -4px ${accentColor}25`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = ''
        e.currentTarget.style.boxShadow = ''
      }}
      aria-label={`${label}${external ? ' (opens in new tab)' : ''}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-5 h-5 text-[--color-text-muted] group-hover:text-[--color-accent-primary] transition-colors" />
        <span className="font-medium text-[--color-text-bright] group-hover:text-[--color-accent-primary] transition-colors">
          {label}
        </span>
        {external && (
          <span className="text-xs text-[--color-text-muted]" aria-hidden="true">↗</span>
        )}
      </div>
      <p className="text-xs text-[--color-text-muted] leading-relaxed">
        {description}
      </p>
    </motion.a>
  )
}

// ============================================================================
// ICONS
// ============================================================================

function getIcon(type: 'email' | 'linkedin' | 'github') {
  const icons = {
    email: EmailIcon,
    linkedin: LinkedInIcon,
    github: GitHubIcon
  }
  return icons[type]
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}
