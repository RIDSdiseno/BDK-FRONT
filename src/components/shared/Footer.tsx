import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { footerContent } from '../../data/footer'
import { siteConfig } from '../../data/site'
import { cn } from '../../lib/cn'
import { Container } from './Container'

const iconMap = {
  Facebook,
  Linkedin,
  Instagram,
}

const renderFooterLink = (label: string, href?: string) => {
  const classes = 'text-sm text-slate-200 transition hover:text-bdk-orange'

  if (!href || href === '#') {
    return <span className={classes}>{label}</span>
  }

  const isExternal =
    href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')

  return isExternal ? (
    <a className={classes} href={href}>
      {label}
    </a>
  ) : (
    <Link className={classes} to={href}>
      {label}
    </Link>
  )
}

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0A1226] via-bdk-navy to-[#0E2347] text-white">
      <Container className="grid gap-10 py-16 lg:grid-cols-[1.2fr_2fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img
              src={siteConfig.logo.image}
              alt={siteConfig.logo.alt}
              className="h-12 w-auto rounded bg-white p-1"
            />
            <div>
              <p className="text-base font-semibold">{siteConfig.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-200">
                {siteConfig.tagline}
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-200">
            {footerContent.description}
          </p>
          <div className="flex items-center gap-3">
            {footerContent.socialLinks.map((link) => {
              const Icon = iconMap[link.icon]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-bdk-orange/40 text-slate-200 transition hover:-translate-y-0.5 hover:border-bdk-orange hover:text-bdk-orange"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {footerContent.columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                {column.title}
              </h3>
              <div className="space-y-2">
                {column.items.map((item) => (
                  <div key={`${column.title}-${item.label}`}>
                    {renderFooterLink(item.label, item.href)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div className="border-t border-bdk-orange/20">
        <Container className={cn('py-6 text-xs text-slate-300')}>
          {footerContent.legal}
        </Container>
      </div>
    </footer>
  )
}
