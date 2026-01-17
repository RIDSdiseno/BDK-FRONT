import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navCta, navLabels, navLinks } from '../../data/navLinks'
import { siteConfig } from '../../data/site'
import { cn } from '../../lib/utils'
import { buttonClasses } from './Button'
import { Container } from './Container'

const linkBase =
  'text-sm font-semibold uppercase tracking-[0.15em] text-slate-600 transition hover:text-bdk-yellow'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="border-b border-slate-200">
        <Container className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3" onClick={handleClose}>
            <img
              src={siteConfig.logo.image}
              alt={siteConfig.logo.alt}
              className="h-12 w-auto"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-bdk-navy">
                {siteConfig.name}
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-bdk-plomo">
                {siteConfig.tagline}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isHash = link.href.includes('#')
              return isHash ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={linkBase}
                  onClick={handleClose}
                >
                  {link.label}
                </Link>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(linkBase, isActive && 'text-bdk-yellow')
                  }
                  onClick={handleClose}
                >
                  {link.label}
                </NavLink>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to={navCta.href}
              className={buttonClasses({ variant: 'primary', size: 'sm' })}
            >
              {navCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            className="rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
            onClick={handleToggle}
            aria-label={isOpen ? navLabels.closeMenu : navLabels.openMenu}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
      </div>

      {isOpen ? (
        <div className="border-b border-slate-200 bg-white md:hidden">
          <Container className="space-y-5 py-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isHash = link.href.includes('#')
                return isHash ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={linkBase}
                    onClick={handleClose}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <NavLink
                    key={link.label}
                    to={link.href}
                    className={({ isActive }) =>
                      cn(linkBase, isActive && 'text-bdk-yellow')
                    }
                    onClick={handleClose}
                  >
                    {link.label}
                  </NavLink>
                )
              })}
            </nav>
            <Link
              to={navCta.href}
              className={buttonClasses({ variant: 'primary', size: 'md' })}
              onClick={handleClose}
            >
              {navCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
