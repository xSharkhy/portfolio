import { useState, useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { getScrollAnimationProps, scrollReveal, quickTransition } from '@/lib/animations'

interface CardProps {
  children: ReactNode
  className?: string
  animate?: boolean
  hover3D?: boolean
  hoverBorderColor?: string
  onClick?: () => void
  as?: 'article' | 'div' | 'section'
}

export default function Card({
  children,
  className = '',
  animate = true,
  hover3D = true,
  hoverBorderColor = 'var(--color-accent-purple)',
  onClick,
  as = 'div'
}: CardProps) {
  const prefersReducedMotion = useReducedMotion()
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const animationProps = animate
    ? getScrollAnimationProps(scrollReveal, prefersReducedMotion)
    : {}

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!hover3D || prefersReducedMotion || !cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    // Max rotation of 5 degrees
    const maxRotation = 5
    const rotateYValue = (mouseX / (rect.width / 2)) * maxRotation
    const rotateXValue = -(mouseY / (rect.height / 2)) * maxRotation

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
  }

  const Component = motion[as]

  return (
    <Component
      ref={cardRef}
      {...animationProps}
      animate={
        prefersReducedMotion
          ? {}
          : {
              rotateX: hover3D ? rotateX : 0,
              rotateY: hover3D ? rotateY : 0,
              y: isHovered ? -4 : 0
            }
      }
      transition={quickTransition}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`
        border border-[--color-border] rounded-lg p-4 sm:p-5 md:p-6
        bg-[--color-bg-surface] transition-colors
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        borderColor: isHovered ? hoverBorderColor : undefined,
        boxShadow: isHovered
          ? `0 4px 20px -4px rgba(187, 154, 247, 0.15)`
          : undefined
      }}
    >
      {children}
    </Component>
  )
}

// ============================================================================
// CARD SUB-COMPONENTS
// ============================================================================

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: ReactNode
  className?: string
  as?: 'h2' | 'h3' | 'h4'
}

export function CardTitle({ children, className = '', as = 'h3' }: CardTitleProps) {
  const Tag = as
  return (
    <Tag className={`text-[--color-text-bright] font-medium flex items-center gap-2 ${className}`}>
      <span className="text-[--color-accent-purple]" aria-hidden="true">&gt;</span>
      {children}
    </Tag>
  )
}

interface CardLabelProps {
  children: ReactNode
  className?: string
}

export function CardLabel({ children, className = '' }: CardLabelProps) {
  return (
    <span className={`text-xs text-[--color-text-muted] ${className}`}>
      {children}
    </span>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`text-[--color-text] ${className}`}>
      {children}
    </div>
  )
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`mt-4 pt-4 border-t border-[--color-border] ${className}`}>
      {children}
    </div>
  )
}

interface CardTagsProps {
  tags: string[]
  className?: string
}

export function CardTags({ tags, className = '' }: CardTagsProps) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label="Technologies used">
      {tags.map((tag) => (
        <li
          key={tag}
          className="px-2 py-0.5 text-xs bg-[--color-bg] border border-[--color-border] rounded text-[--color-text-muted]"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

interface CardPunchlineProps {
  children: ReactNode
  className?: string
}

export function CardPunchline({ children, className = '' }: CardPunchlineProps) {
  return (
    <p className={`text-[--color-accent-primary] font-medium mt-4 ${className}`}>
      {children}
    </p>
  )
}
