import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import type { HireMeCopy } from '@/data/copy'
import type { Lang } from '@/data/i18n'
import {
  scrollRevealRight,
  clipRevealUp,
  fadeInUp,
  scaleInUp,
  staggerContainerSlow,
  getScrollAnimationProps,
  strictViewport,
  centerViewport
} from '@/lib/animations'

interface HireFormProps {
  copy: HireMeCopy['form']
  lang: Lang
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const statusMessages: Record<Lang, { success: string; error: string }> = {
  es: {
    success: 'Recibido. Te escribo pronto.',
    error: 'Algo falló. Prueba de nuevo o escríbeme directamente.'
  },
  en: {
    success: 'Got it. I\'ll write to you soon.',
    error: 'Something went wrong. Try again or email me directly.'
  },
  ca: {
    success: 'Rebut. T\'escric prompte.',
    error: 'Alguna cosa ha fallat. Prova de nou o escriu-me directament.'
  },
  gl: {
    success: 'Recibido. Escríboche pronto.',
    error: 'Algo fallou. Proba de novo ou escríbeme directamente.'
  }
}

export default function HireForm({ copy, lang }: HireFormProps) {
  const prefersReducedMotion = useReducedMotion()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setStatus('submitting')

    try {
      // TODO: Replace with actual webhook endpoint
      const response = await fetch('/api/hire-interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          message,
          lang,
          timestamp: new Date().toISOString()
        })
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const isGmail = email.toLowerCase().includes('@gmail')

  return (
    <section className="py-24 sm:py-32" id="contact-form">
      {/* Headline */}
      <motion.h2
        {...getScrollAnimationProps(scrollRevealRight, prefersReducedMotion, strictViewport)}
        className="text-sm text-[--color-text-dark] mb-8 sm:mb-10"
      >
        // contact
      </motion.h2>

      <motion.p
        {...getScrollAnimationProps(clipRevealUp, prefersReducedMotion, centerViewport)}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[--color-text-bright] mb-12 sm:mb-16"
      >
        {copy.headline}
      </motion.p>

      {/* Intro */}
      <motion.div
        {...getScrollAnimationProps(staggerContainerSlow, prefersReducedMotion, centerViewport)}
        className="space-y-2 mb-12 max-w-2xl"
      >
        {copy.intro.map((line, index) => (
          <motion.p
            key={index}
            variants={prefersReducedMotion ? {} : fadeInUp}
            className="text-lg text-[--color-text]"
          >
            {line}
          </motion.p>
        ))}
      </motion.div>

      {/* Form */}
      <motion.form
        {...getScrollAnimationProps(scaleInUp, prefersReducedMotion, centerViewport)}
        onSubmit={handleSubmit}
        className="max-w-md"
      >
        {/* Email input */}
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copy.placeholder}
            required
            disabled={status === 'submitting' || status === 'success'}
            className="w-full px-4 py-3 bg-[--color-bg-surface] border border-[--color-border] rounded-lg text-[--color-text] placeholder:text-[--color-text-dark] focus:outline-none focus:border-[--color-accent-primary] transition-colors disabled:opacity-50"
          />
        </div>

        {/* Message input - shows when Gmail detected */}
        {isGmail && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-4"
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={lang === 'es' ? 'Cuéntame sobre tu proyecto...' :
                          lang === 'en' ? 'Tell me about your project...' :
                          lang === 'ca' ? 'Conta\'m sobre el teu projecte...' :
                          'Cóntame sobre o teu proxecto...'}
              rows={3}
              className="w-full px-4 py-3 bg-[--color-bg-surface] border border-[--color-border] rounded-lg text-[--color-text] placeholder:text-[--color-text-dark] focus:outline-none focus:border-[--color-accent-primary] transition-colors resize-none"
            />
          </motion.div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === 'submitting' || status === 'success' || !email}
          className="w-full px-6 py-3 bg-[--color-accent-primary] text-[--color-bg] font-medium rounded-lg hover:bg-[--color-accent-primary]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? '...' : copy.button}
        </button>

        {/* Note */}
        <p className="mt-4 text-xs text-[--color-text-dark]">
          {copy.note}
        </p>

        {/* Status message */}
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-[--color-accent-green] font-medium"
          >
            {statusMessages[lang].success}
          </motion.p>
        )}

        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-red-400"
          >
            {statusMessages[lang].error}
          </motion.p>
        )}
      </motion.form>
    </section>
  )
}
