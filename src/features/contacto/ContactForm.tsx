import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { contactPage } from '../../data/contact'
import { buttonClasses } from '../../components/shared/Button'

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const initialData: FormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<FormErrors>({})

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

    if (!data.phone.trim()) {
      nextErrors.phone = contactPage.form.errors.phone
    }

    if (!data.message.trim()) {
      nextErrors.message = contactPage.form.errors.message
    }

    return nextErrors
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    console.log(formData)
    setFormData(initialData)
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-slate-700">
          <span>{contactPage.form.fields.name.label}</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={contactPage.form.fields.name.placeholder}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-bdk-yellow focus:outline-none"
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
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-bdk-yellow focus:outline-none"
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
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-bdk-yellow focus:outline-none"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          required
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
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-bdk-yellow focus:outline-none"
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
        className={buttonClasses({ variant: 'primary', size: 'md' })}
      >
        {contactPage.form.submitLabel}
      </button>
    </form>
  )
}
