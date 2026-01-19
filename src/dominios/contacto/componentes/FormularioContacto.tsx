import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { contactPage } from '../datosContacto'
import { clasesBoton } from '../../../componentes/ui/Boton'

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

type FormStatus = 'idle' | 'sending' | 'sent'

const initialData: FormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const phonePattern = /^[0-9+()\s-]{7,}$/

export const FormularioContacto = () => {
  const [formData, setFormData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [showToast, setShowToast] = useState(false)
  const submitTimeoutRef = useRef<number | null>(null)
  const toastTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        window.clearTimeout(submitTimeoutRef.current)
      }
      if (toastTimeoutRef.current) {
        window.clearTimeout(toastTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!showToast) {
      return
    }

    toastTimeoutRef.current = window.setTimeout(() => {
      setShowToast(false)
    }, 3200)
  }, [showToast])

  const validate = (data: FormData) => {
    const nextErrors: FormErrors = {}

    if (!data.name.trim()) {
      nextErrors.name = contactPage.form.errors.name
    }

    if (!data.email.trim()) {
      nextErrors.email = contactPage.form.errors.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = contactPage.form.errors.emailInvalid
    }

    if (data.phone.trim() && !phonePattern.test(data.phone)) {
      nextErrors.phone = contactPage.form.errors.phoneInvalid
    }

    if (!data.message.trim()) {
      nextErrors.message = contactPage.form.errors.message
    }

    return nextErrors
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(formData)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setStatus('sending')
    submitTimeoutRef.current = window.setTimeout(() => {
      setStatus('sent')
      setShowToast(true)
      setFormData(initialData)
      setErrors({})
      submitTimeoutRef.current = null
    }, 1100)
  }

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit}
      noValidate
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-slate-700">
          <span>{contactPage.form.fields.name.label}</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={contactPage.form.fields.name.placeholder}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-bdk-orange focus:outline-none focus:ring-2 focus:ring-bdk-orange/40"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            required
          />
          {errors.name ? (
            <span id="name-error" className="text-xs text-red-600">
              {errors.name}
            </span>
          ) : null}
        </label>

        <label className="space-y-2 text-sm font-semibold text-slate-700">
          <span>{contactPage.form.fields.email.label}</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={contactPage.form.fields.email.placeholder}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-bdk-orange focus:outline-none focus:ring-2 focus:ring-bdk-orange/40"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
          />
          {errors.email ? (
            <span id="email-error" className="text-xs text-red-600">
              {errors.email}
            </span>
          ) : null}
        </label>
      </div>

      <label className="space-y-2 text-sm font-semibold text-slate-700">
        <span>{contactPage.form.fields.phone.label}</span>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={contactPage.form.fields.phone.placeholder}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-bdk-orange focus:outline-none focus:ring-2 focus:ring-bdk-orange/40"
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone ? (
          <span id="phone-error" className="text-xs text-red-600">
            {errors.phone}
          </span>
        ) : null}
      </label>

      <label className="space-y-2 text-sm font-semibold text-slate-700">
        <span>{contactPage.form.fields.message.label}</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={contactPage.form.fields.message.placeholder}
          rows={5}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-bdk-orange focus:outline-none focus:ring-2 focus:ring-bdk-orange/40"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          required
        />
        {errors.message ? (
          <span id="message-error" className="text-xs text-red-600">
            {errors.message}
          </span>
        ) : null}
      </label>

      <button
        type="submit"
        className={clasesBoton({
          variant: 'primary',
          size: 'md',
          className:
            'bg-yellow-400 text-slate-900 hover:bg-yellow-300 shadow-[0_14px_32px_rgba(242,183,5,0.35)] hover:shadow-[0_18px_40px_rgba(242,183,5,0.45)]',
        })}
        disabled={status === 'sending'}
      >
        {status === 'sending'
          ? contactPage.form.submittingLabel
          : contactPage.form.submitLabel}
      </button>

      <AnimatePresence>
        {showToast ? (
          <motion.div
            role="status"
            aria-live="polite"
            className="rounded-xl border border-bdk-orange/30 bg-bdk-orange/10 px-4 py-3 text-sm text-bdk-navy"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
          >
            {contactPage.form.successMessage}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
  )
}
