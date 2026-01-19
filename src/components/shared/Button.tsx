import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

export const buttonClasses = ({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bdk-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-60 transform hover:-translate-y-0.5'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-bdk-orange text-white shadow-[0_14px_32px_rgba(243,123,29,0.35)] hover:brightness-105 hover:shadow-[0_18px_40px_rgba(243,123,29,0.5)]',
    secondary:
      'bg-bdk-navy text-white shadow-[0_16px_32px_rgba(11,27,58,0.28)] hover:bg-slate-900 hover:shadow-[0_18px_38px_rgba(11,27,58,0.4)]',
    outline:
      'border border-slate-300 text-slate-700 hover:border-bdk-orange hover:text-bdk-orange hover:shadow-[0_14px_30px_rgba(243,123,29,0.25)]',
  }

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm md:text-base',
    lg: 'px-7 py-3.5 text-base md:text-lg',
  }

  return cn(base, variants[variant], sizes[size], className)
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonClasses({ variant, size, className })}
      {...props}
    />
  )
}
