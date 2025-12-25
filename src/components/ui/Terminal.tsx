import { motion, useReducedMotion } from 'motion/react'
import { getScrollAnimationProps, fadeIn } from '@/lib/animations'
import type { ReactNode } from 'react'

interface TerminalProps {
  title?: string
  children: ReactNode
  className?: string
  animate?: boolean
}

export default function Terminal({
  title = '~/.terminal',
  children,
  className = '',
  animate = true
}: TerminalProps) {
  const prefersReducedMotion = useReducedMotion()
  const animationProps = animate
    ? getScrollAnimationProps(fadeIn, prefersReducedMotion)
    : {}

  return (
    <motion.figure
      {...animationProps}
      className={`border border-[--color-border] rounded-lg overflow-hidden bg-[--color-bg-surface] ${className}`}
      role="img"
      aria-label={`Terminal window: ${title}`}
    >
      {/* Terminal header */}
      <div
        className="flex items-center gap-2 px-3 sm:px-4 py-2 border-b border-[--color-border] bg-[--color-bg]"
        aria-hidden="true"
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-[--color-text-muted] ml-2">{title}</span>
      </div>

      {/* Terminal content */}
      <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm">{children}</div>
    </motion.figure>
  )
}

// ============================================================================
// TERMINAL SUB-COMPONENTS
// ============================================================================

interface TerminalCommandProps {
  command: string
  className?: string
}

export function TerminalCommand({ command, className = '' }: TerminalCommandProps) {
  return (
    <div className={`text-[--color-accent-primary] ${className}`} aria-hidden="true">
      {command}
    </div>
  )
}

interface TerminalLineProps {
  children: ReactNode
  className?: string
  indent?: boolean
}

export function TerminalLine({ children, className = '', indent = false }: TerminalLineProps) {
  return (
    <div className={`${indent ? 'pl-4' : ''} ${className}`}>
      {children}
    </div>
  )
}

interface TerminalLabelProps {
  label: string
  className?: string
}

export function TerminalLabel({ label, className = '' }: TerminalLabelProps) {
  return (
    <span className={`text-[--color-accent-purple] ${className}`}>
      {label}:
    </span>
  )
}

interface TerminalCommentProps {
  children: ReactNode
  className?: string
}

export function TerminalComment({ children, className = '' }: TerminalCommentProps) {
  return (
    <span className={`text-[--color-text-muted] ${className}`}>
      # {children}
    </span>
  )
}

interface TerminalPromptProps {
  blinking?: boolean
  className?: string
}

export function TerminalPrompt({ blinking = true, className = '' }: TerminalPromptProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className={`flex items-center ${className}`} aria-hidden="true">
      <span className="text-[--color-accent-primary]">$</span>
      <span
        className={`ml-2 w-2 h-4 bg-[--color-text] ${
          blinking && !prefersReducedMotion ? 'animate-pulse' : ''
        }`}
      />
    </div>
  )
}
