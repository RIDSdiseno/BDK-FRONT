import { cn } from '../../lib/utils/cn'

type TituloSeccionProps = {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  kicker?: string
  className?: string
  tone?: 'light' | 'dark'
}

export const TituloSeccion = ({
  title,
  subtitle,
  align = 'left',
  kicker,
  className,
  tone = 'light',
}: TituloSeccionProps) => {
  const titleClass =
    tone === 'dark' ? 'text-white' : 'text-bdk-navy'
  const subtitleClass =
    tone === 'dark' ? 'text-slate-200' : 'text-slate-600'
  const kickerClass =
    tone === 'dark' ? 'text-bdk-orange' : 'text-bdk-orange'
  const lineClass =
    tone === 'dark' ? 'bg-bdk-orange/70' : 'bg-bdk-orange'

  return (
    <div
      className={cn(
        'space-y-3',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {kicker ? (
        <p
          className={cn(
            'flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]',
            align === 'center' ? 'justify-center' : 'justify-start',
            kickerClass,
          )}
        >
          <span className={cn('h-px w-10', lineClass)} aria-hidden="true" />
          {kicker}
        </p>
      ) : null}
      <h2 className={cn('text-3xl font-heading md:text-4xl', titleClass)}>
        {title}
      </h2>
      {subtitle ? (
        <p className={cn('text-base md:text-lg', subtitleClass)}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
