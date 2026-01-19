import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroCard, heroCarouselLabels, heroSlides } from '../datosInicio'
import { clasesBoton } from '../../../componentes/ui/Boton'
import { Contenedor } from '../../../componentes/ui/Contenedor'
import { cn } from '../../../lib/utils/cn'

export const CarruselHero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (heroSlides.length < 2 || shouldReduceMotion || isPaused) {
      return undefined
    }

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length)
    }, 8000)

    return () => window.clearInterval(interval)
  }, [isPaused, shouldReduceMotion])

  const goTo = (index: number) => {
    const nextIndex = (index + heroSlides.length) % heroSlides.length
    setActiveIndex(nextIndex)
  }

  const activeSlide = heroSlides[activeIndex]

  return (
    <section
      className="relative overflow-hidden bg-bdk-navy text-white"
      aria-roledescription="carousel"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(243,123,29,0.25),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(11,27,58,0.98),_rgba(11,27,58,0.75),_rgba(243,123,29,0.18))]" />
      <div className="relative">
        <div
          className="relative h-[420px] overflow-hidden sm:h-[480px] md:h-[560px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            >
              <motion.img
                src={activeSlide.image}
                alt={activeSlide.title ?? heroCarouselLabels.defaultAlt}
                className="h-full w-full object-cover"
                animate={
                  shouldReduceMotion
                    ? { scale: 1 }
                    : { scale: 1.05, y: -8 }
                }
                transition={{ duration: 6, ease: 'easeOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-bdk-navy/80 via-bdk-navy/40 to-transparent" />
              <Contenedor className="relative z-10 flex h-full items-end pb-20">
                <motion.div
                  className="max-w-xl space-y-3 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
                >
                  <h1 className="text-2xl font-heading sm:text-3xl md:text-4xl">
                    {activeSlide.title}
                  </h1>
                  <p className="text-sm text-white/90 md:text-base">
                    {activeSlide.text}
                  </p>
                </motion.div>
              </Contenedor>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-y-0 left-4 flex items-center">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-bdk-orange/70 hover:text-bdk-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bdk-orange"
              onClick={() => goTo(activeIndex - 1)}
              aria-label={heroCarouselLabels.previous}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-bdk-orange/70 hover:text-bdk-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bdk-orange"
              onClick={() => goTo(activeIndex + 1)}
              aria-label={heroCarouselLabels.next}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goTo(index)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full border border-white/40 transition',
                  index === activeIndex
                    ? 'bg-bdk-orange shadow-[0_0_12px_rgba(243,123,29,0.8)]'
                    : 'bg-white/20 hover:bg-bdk-orange/70',
                )}
                aria-label={`${heroCarouselLabels.goTo} ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </div>

        <Contenedor className="relative z-10 -mt-16 pb-16">
          <motion.div
            className="max-w-xl rounded-2xl border border-bdk-orange/25 bg-white/95 p-8 text-slate-900 shadow-2xl shadow-bdk-navy/30 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,27,58,0.35)] md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bdk-orange">
              {heroCard.kicker}
            </p>
            <h2 className="mt-3 text-2xl font-heading text-bdk-navy md:text-3xl">
              {heroCard.title}
            </h2>
            <p className="mt-2 text-sm font-semibold text-slate-700">
              {heroCard.subtitle}
            </p>
            <p className="mt-4 text-sm text-slate-600 md:text-base">
              {heroCard.description}
            </p>
            <div className="mt-6">
              <Link
                to={heroCard.ctaHref}
                className={clasesBoton({
                  variant: 'primary',
                  size: 'md',
                  className: 'animate-pulse-glow motion-reduce:animate-none',
                })}
              >
                {heroCard.ctaLabel}
              </Link>
            </div>
          </motion.div>
        </Contenedor>
      </div>
    </section>
  )
}
