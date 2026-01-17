import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

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
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bdk-yellow focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-gradient-to-r from-bdk-yellow via-yellow-400 to-bdk-yellow text-bdk-navy shadow-[0_12px_30px_rgba(242,183,5,0.35)] hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-500 hover:shadow-[0_18px_40px_rgba(242,183,5,0.45)]',
    secondary:
      'bg-bdk-navy text-white shadow-lg shadow-slate-900/20 hover:bg-slate-900',
    outline:
      'border border-slate-300 text-slate-900 hover:border-bdk-yellow hover:text-bdk-yellow',
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
