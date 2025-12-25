import { useState, useEffect, useCallback } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { typewriterConfig } from '@/lib/animations'

interface TypeWriterProps {
  text: string
  className?: string
  cursorClassName?: string
  charDelay?: number
  startDelay?: number
  onComplete?: () => void
  showCursor?: boolean
  cursorChar?: string
}

export default function TypeWriter({
  text,
  className = '',
  cursorClassName = '',
  charDelay = typewriterConfig.charDelay,
  startDelay = 0,
  onComplete,
  showCursor = true,
  cursorChar = '_'
}: TypeWriterProps) {
  const prefersReducedMotion = useReducedMotion()
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  const startTyping = useCallback(() => {
    setHasStarted(true)
  }, [])

  useEffect(() => {
    // Handle start delay
    if (startDelay > 0 && !hasStarted) {
      const startTimer = setTimeout(startTyping, startDelay)
      return () => clearTimeout(startTimer)
    } else if (startDelay === 0) {
      setHasStarted(true)
    }
  }, [startDelay, hasStarted, startTyping])

  useEffect(() => {
    // Skip animation if reduced motion is preferred
    if (prefersReducedMotion) {
      setDisplayedText(text)
      setIsComplete(true)
      onComplete?.()
      return
    }

    // Don't start until ready
    if (!hasStarted) return

    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setIsComplete(true)
        // Small delay before triggering onComplete for visual pause
        setTimeout(() => {
          onComplete?.()
        }, typewriterConfig.pauseAfterComplete)
      }
    }, charDelay)

    return () => clearInterval(timer)
  }, [text, charDelay, prefersReducedMotion, hasStarted, onComplete])

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <motion.span
          className={`inline-block ${cursorClassName}`}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  opacity: isComplete ? [1, 0] : 1
                }
          }
          transition={
            prefersReducedMotion
              ? {}
              : {
                  duration: typewriterConfig.cursorBlinkSpeed / 1000,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }
          }
          aria-hidden="true"
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  )
}
