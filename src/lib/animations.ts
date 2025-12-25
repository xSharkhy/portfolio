/**
 * Animation Variants and Utilities
 *
 * Centralized animation configurations for Motion/Framer Motion.
 * All animations respect reduced motion preferences.
 */

import type { Variants, Transition } from 'motion/react'

// ============================================================================
// TRANSITIONS
// ============================================================================

export const defaultTransition: Transition = {
  duration: 0.5,
  ease: [0.25, 0.46, 0.45, 0.94] // Custom ease-out
}

export const quickTransition: Transition = {
  duration: 0.3,
  ease: 'easeOut'
}

export const slowTransition: Transition = {
  duration: 0.8,
  ease: [0.25, 0.46, 0.45, 0.94]
}

// ============================================================================
// FADE VARIANTS
// ============================================================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition
  }
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition
  }
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition
  }
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition
  }
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition
  }
}

// ============================================================================
// SCALE VARIANTS
// ============================================================================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition
  }
}

export const scaleInUp: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: defaultTransition
  }
}

// ============================================================================
// STAGGER CONTAINERS
// ============================================================================

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
}

// ============================================================================
// SCROLL-TRIGGERED VARIANTS
// ============================================================================

export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const scrollRevealLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const scrollRevealScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// ============================================================================
// HOVER EFFECTS
// ============================================================================

export const hoverScale = {
  scale: 1.02,
  transition: quickTransition
}

export const hoverLift = {
  y: -4,
  transition: quickTransition
}

export const hoverGlow = {
  boxShadow: '0 0 20px rgba(187, 154, 247, 0.15)',
  transition: quickTransition
}

// ============================================================================
// CARD 3D TILT
// ============================================================================

export const card3DHover = {
  rotateX: 2,
  rotateY: 2,
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: 'easeOut'
  }
}

// ============================================================================
// LINE/PROGRESS ANIMATIONS
// ============================================================================

export const lineGrow: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const lineGrowHorizontal: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// ============================================================================
// TYPEWRITER CONFIG
// ============================================================================

export const typewriterConfig = {
  charDelay: 60, // ms per character
  cursorBlinkSpeed: 530, // ms
  pauseAfterComplete: 300 // ms before triggering next animation
}

// ============================================================================
// VIEWPORT CONFIG
// ============================================================================

export const defaultViewport = {
  once: true,
  margin: '-100px'
}

export const earlyViewport = {
  once: true,
  margin: '-50px'
}

export const lateViewport = {
  once: true,
  margin: '-150px'
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Creates a custom delay for staggered animations
 */
export function withDelay(variants: Variants, delay: number): Variants {
  return {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as { transition?: Transition })?.transition,
        delay
      }
    }
  }
}

/**
 * Creates animation props respecting reduced motion
 */
export function getAnimationProps(
  variants: Variants,
  prefersReducedMotion: boolean | null
) {
  if (prefersReducedMotion) {
    return {
      initial: {},
      animate: {},
      variants: undefined
    }
  }

  return {
    initial: 'hidden',
    animate: 'visible',
    variants
  }
}

/**
 * Creates whileInView props respecting reduced motion
 */
export function getScrollAnimationProps(
  variants: Variants,
  prefersReducedMotion: boolean | null,
  viewport = defaultViewport
) {
  if (prefersReducedMotion) {
    return {
      initial: {},
      whileInView: {},
      variants: undefined,
      viewport: undefined
    }
  }

  return {
    initial: 'hidden',
    whileInView: 'visible',
    variants,
    viewport
  }
}
