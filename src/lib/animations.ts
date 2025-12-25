/**
 * Animation Variants and Utilities
 *
 * Centralized animation configurations for Motion/Framer Motion.
 * All animations respect reduced motion preferences.
 *
 * Design principles:
 * - Animations should be NOTICEABLE, not subtle
 * - Variety: not everything fades up from below
 * - Late trigger: elements appear when well into viewport
 * - Some sections use sticky scroll for "static screen" effect
 */

import type { Variants, Transition } from 'motion/react'

// ============================================================================
// TRANSITIONS
// ============================================================================

export const defaultTransition: Transition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1] // Custom spring-like ease
}

export const quickTransition: Transition = {
  duration: 0.4,
  ease: 'easeOut'
}

export const slowTransition: Transition = {
  duration: 1,
  ease: [0.16, 1, 0.3, 1]
}

export const dramaticTransition: Transition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1]
}

// ============================================================================
// FADE VARIANTS (more dramatic)
// ============================================================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition
  }
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition
  }
}

export const fadeInUpDramatic: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: dramaticTransition
  }
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition
  }
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition
  }
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition
  }
}

// ============================================================================
// SCALE VARIANTS (more dramatic)
// ============================================================================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition
  }
}

export const scaleInUp: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: dramaticTransition
  }
}

export const scaleInDramatic: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

// ============================================================================
// BLUR VARIANTS (cinematic feel)
// ============================================================================

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: defaultTransition
  }
}

export const blurInUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: defaultTransition
  }
}

// ============================================================================
// CLIP/REVEAL VARIANTS
// ============================================================================

export const clipRevealUp: Variants = {
  hidden: {
    clipPath: 'inset(100% 0% 0% 0%)',
    opacity: 0
  },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export const clipRevealLeft: Variants = {
  hidden: {
    clipPath: 'inset(0% 100% 0% 0%)',
    opacity: 0
  },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
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
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15
    }
  }
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
}

// ============================================================================
// SCROLL-TRIGGERED VARIANTS (more dramatic, varied directions)
// ============================================================================

export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: dramaticTransition
  }
}

export const scrollRevealLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: dramaticTransition
  }
}

export const scrollRevealRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: dramaticTransition
  }
}

export const scrollRevealScale: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: dramaticTransition
  }
}

export const scrollRevealBlur: Variants = {
  hidden: { opacity: 0, filter: 'blur(20px)', y: 30 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: dramaticTransition
  }
}

// ============================================================================
// HOVER EFFECTS
// ============================================================================

export const hoverScale = {
  scale: 1.03,
  transition: quickTransition
}

export const hoverLift = {
  y: -6,
  transition: quickTransition
}

export const hoverGlow = {
  boxShadow: '0 0 30px rgba(187, 154, 247, 0.2)',
  transition: quickTransition
}

// ============================================================================
// CARD 3D TILT
// ============================================================================

export const card3DHover = {
  rotateX: 3,
  rotateY: 3,
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
    transition: slowTransition
  }
}

export const lineGrowHorizontal: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: slowTransition
  }
}

// ============================================================================
// TYPEWRITER CONFIG
// ============================================================================

export const typewriterConfig = {
  charDelay: 50,
  cursorBlinkSpeed: 530,
  pauseAfterComplete: 200
}

// ============================================================================
// VIEWPORT CONFIG - MORE STRICT (elements appear later)
// ============================================================================

// Default: element must be 40% in viewport before animating
export const defaultViewport = {
  once: true,
  amount: 0.4
}

// Strict: element must be 60% in viewport
export const strictViewport = {
  once: true,
  amount: 0.6
}

// Center: element must be roughly centered
export const centerViewport = {
  once: true,
  amount: 0.5
}

// Early: for elements that should appear sooner (headers)
export const earlyViewport = {
  once: true,
  amount: 0.2
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
 * Now with stricter viewport defaults
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

/**
 * Get alternating animation direction based on index
 */
export function getAlternatingVariant(index: number): Variants {
  const variants = [
    scrollReveal,      // from below
    scrollRevealLeft,  // from left
    scrollRevealRight, // from right
    scrollRevealScale, // scale up
    scrollRevealBlur   // blur in
  ]
  return variants[index % variants.length]
}
