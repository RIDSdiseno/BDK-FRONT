import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navCta, navLabels, navLinks } from '../../data/navLinks'
import { siteConfig } from '../../data/site'
import { cn } from '../../lib/cn'
import { buttonClasses } from './Button'
import { Container } from './Container'

const linkBase =
  'relative text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 transition-colors duration-300 hover:text-bdk-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bdk-orange focus-visible:ring-offset-4 focus-visible:ring-offset-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-bdk-orange after:transition-transform after:duration-300 hover:after:scale-x-100 aria-[current=page]:text-bdk-navy aria-[current=page]:after:scale-x-100'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
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
            <p className="text-xs uppercase tracking-[0.3em] text-bdk-gray">
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
                className={linkBase}
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
            className={buttonClasses({
              variant: 'primary',
              size: 'sm',
              className:
                'bg-yellow-400 text-bdk-navy hover:bg-yellow-300 shadow-[0_14px_32px_rgba(242,183,5,0.35)] hover:shadow-[0_18px_40px_rgba(242,183,5,0.45)]',
            })}
          >
            {navCta.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-bdk-orange hover:text-bdk-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bdk-orange focus-visible:ring-offset-2 md:hidden"
          onClick={handleToggle}
          aria-label={isOpen ? navLabels.closeMenu : navLabels.openMenu}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <Container className="space-y-5 py-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isHash = link.href.includes('#')
                  return isHash ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={cn(linkBase, 'text-xs')}
                      onClick={handleClose}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <NavLink
                      key={link.label}
                      to={link.href}
                      className={cn(linkBase, 'text-xs')}
                      onClick={handleClose}
                    >
                      {link.label}
                    </NavLink>
                  )
                })}
              </nav>
              <Link
                to={navCta.href}
                className={buttonClasses({
                  variant: 'primary',
                  size: 'md',
                  className:
                    'bg-yellow-400 text-bdk-navy hover:bg-yellow-300 shadow-[0_14px_32px_rgba(242,183,5,0.35)] hover:shadow-[0_18px_40px_rgba(242,183,5,0.45)]',
                })}
                onClick={handleClose}
              >
                {navCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
