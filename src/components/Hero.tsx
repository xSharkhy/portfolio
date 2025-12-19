import { motion, useReducedMotion } from 'motion/react'
import { useState, useEffect } from 'react'

interface HeroProps {
  name: string
  label: string
  location: string
  email: string
  linkedIn: string
  github: string
  scrollText?: string
}

export default function Hero({ name, label, location, email, linkedIn, github, scrollText = 'scroll' }: HeroProps) {
  const prefersReducedMotion = useReducedMotion()
  const [displayedText, setDisplayedText] = useState('')
  const fullText = `> whoami`
  const [showContent, setShowContent] = useState(prefersReducedMotion ?? false)

  useEffect(() => {
    // Skip typing animation if user prefers reduced motion
    if (prefersReducedMotion) {
      setDisplayedText(fullText)
      setShowContent(true)
      return
    }

    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowContent(true), 300)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [prefersReducedMotion])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    })
  }

  // Animation variants - instant if reduced motion
  const fadeInUp = prefersReducedMotion
    ? { initial: {}, animate: {}, transition: {} }
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: 'easeOut' as const }
      }

  return (
    <section
      className="min-h-[calc(100vh-5rem)] flex flex-col justify-center relative"
      aria-labelledby="hero-heading"
    >
      {/* Terminal prompt */}
      <div className="mb-4 sm:mb-6" aria-hidden="true">
        <span className="text-lg sm:text-xl text-[--color-accent-violet]">
          {displayedText}
          <span className="cursor-blink text-[--color-accent-primary]">_</span>
        </span>
      </div>

      {showContent && (
        <>
          {/* Name */}
          <motion.h1
            id="hero-heading"
            {...fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-[--color-text-bright]"
          >
            {name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: prefersReducedMotion ? 0 : 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl text-[--color-accent-purple] mb-6 sm:mb-8 font-medium"
          >
            {label}
          </motion.h2>

          {/* Location */}
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: prefersReducedMotion ? 0 : 0.2 }}
            className="text-base sm:text-lg text-[--color-text-muted] mb-8 sm:mb-12"
          >
            <span className="text-[--color-text-dark]" aria-hidden="true">// </span>
            {location}
          </motion.p>

          {/* Links */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: prefersReducedMotion ? 0 : 0.3 }}
            className="flex flex-wrap gap-3 sm:gap-4"
            role="list"
            aria-label="Contact links"
          >
            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 bg-[--color-bg-surface] border border-[--color-border] rounded-lg text-[--color-text] hover:border-[--color-accent-primary] hover:text-[--color-accent-primary] transition-colors min-h-11"
              aria-label={`Send email to ${email}`}
              role="listitem"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm truncate">{email}</span>
            </a>

            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 bg-[--color-bg-surface] border border-[--color-border] rounded-lg text-[--color-text] hover:border-[--color-accent-primary] hover:text-[--color-accent-primary] transition-colors min-h-11"
              aria-label="View LinkedIn profile (opens in new tab)"
              role="listitem"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm">LinkedIn</span>
              <span className="text-xs" aria-hidden="true">↗</span>
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 bg-[--color-bg-surface] border border-[--color-border] rounded-lg text-[--color-text] hover:border-[--color-accent-primary] hover:text-[--color-accent-primary] transition-colors min-h-11"
              aria-label="View GitHub profile (opens in new tab)"
              role="listitem"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm">GitHub</span>
              <span className="text-xs" aria-hidden="true">↗</span>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={prefersReducedMotion ? {} : { opacity: 1 }}
            transition={prefersReducedMotion ? {} : { duration: 0.6, delay: 0.8 }}
            onClick={scrollToContent}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[--color-text-muted] hover:text-[--color-accent-primary] transition-colors cursor-pointer min-h-11 min-w-11 justify-center"
            aria-label="Scroll to main content"
            type="button"
          >
            <span className="text-xs">{scrollText}</span>
            <svg
              className="w-5 h-5 scroll-indicator"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.button>
        </>
      )}
    </section>
  )
}
