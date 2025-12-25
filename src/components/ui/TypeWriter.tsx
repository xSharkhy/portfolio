import { useState, useEffect, useCallback, useRef } from 'react'
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

  // Use ref for callback to prevent re-triggering animation
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  // Track if animation has already completed to prevent loops
  const hasCompletedRef = useRef(false)

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
    // Prevent re-running if already completed
    if (hasCompletedRef.current) return

    // Skip animation if reduced motion is preferred
    if (prefersReducedMotion) {
      setDisplayedText(text)
      setIsComplete(true)
      hasCompletedRef.current = true
      onCompleteRef.current?.()
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
        hasCompletedRef.current = true
        // Small delay before triggering onComplete for visual pause
        setTimeout(() => {
          onCompleteRef.current?.()
        }, typewriterConfig.pauseAfterComplete)
      }
    }, charDelay)

    return () => clearInterval(timer)
  }, [text, charDelay, prefersReducedMotion, hasStarted])

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
