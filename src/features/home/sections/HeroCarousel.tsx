import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroCard, heroCarouselLabels, heroSlides } from '../../../data/slides'
import { buttonClasses } from '../../../components/shared/Button'
import { Container } from '../../../components/shared/Container'
import { cn } from '../../../lib/utils'

export const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (heroSlides.length < 2) {
      return undefined
    }

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length)
    }, 8000)

    return () => window.clearInterval(interval)
  }, [heroSlides.length])

  const goTo = (index: number) => {
    const nextIndex = (index + heroSlides.length) % heroSlides.length
    setActiveIndex(nextIndex)
  }

  return (
    <section className="relative overflow-hidden bg-bdk-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,183,5,0.22),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(11,27,58,0.95),_rgba(11,27,58,0.7),_rgba(242,183,5,0.2))] bg-[length:200%_200%] animate-gradient-shift motion-reduce:animate-none" />
      <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-bdk-yellow/25 blur-3xl animate-float motion-reduce:animate-none" />
      <div className="absolute bottom-16 right-12 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-float motion-reduce:animate-none" />
      <div className="relative">
        <div className="relative h-[420px] overflow-hidden sm:h-[480px] md:h-[560px]">
          <div
            className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {heroSlides.map((slide, index) => (
              <div key={slide.id} className="relative min-w-full">
                <img
                  src={slide.image}
                  alt={slide.title ?? heroCarouselLabels.defaultAlt}
                  className={cn(
                    'h-full w-full object-cover transition-transform duration-[1400] ease-out',
                    index === activeIndex
                      ? 'animate-kenburns motion-reduce:animate-none'
                      : 'scale-110',
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-bdk-navy/80 via-bdk-navy/40 to-transparent" />
                <Container className="relative z-10 flex h-full items-end pb-20">
                  <div
                    className={cn(
                      'max-w-xl space-y-3 text-left text-white',
                      index === activeIndex
                        ? 'animate-slide-in motion-reduce:animate-none'
                        : 'opacity-0',
                    )}
                    aria-hidden={index !== activeIndex}
                  >
                    {slide.title ? (
                      <h1 className="text-2xl font-heading sm:text-3xl md:text-4xl">
                        {slide.title}
                      </h1>
                    ) : null}
                    {slide.text ? (
                      <p className="text-sm text-white/90 md:text-base">
                        {slide.text}
                      </p>
                    ) : null}
                  </div>
                </Container>
              </div>
            ))}
          </div>

          <div className="absolute inset-y-0 left-4 flex items-center">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-bdk-yellow/40 bg-bdk-navy/40 text-bdk-yellow backdrop-blur transition hover:scale-105 hover:border-bdk-yellow hover:bg-bdk-yellow hover:text-bdk-navy"
              onClick={() => goTo(activeIndex - 1)}
              aria-label={heroCarouselLabels.previous}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-bdk-yellow/40 bg-bdk-navy/40 text-bdk-yellow backdrop-blur transition hover:scale-105 hover:border-bdk-yellow hover:bg-bdk-yellow hover:text-bdk-navy"
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
                  'h-2.5 w-2.5 rounded-full border border-bdk-yellow/60 transition',
                  index === activeIndex
                    ? 'bg-bdk-yellow shadow-[0_0_10px_rgba(242,183,5,0.8)]'
                    : 'bg-white/10 hover:bg-bdk-yellow/70',
                )}
                aria-label={`${heroCarouselLabels.goTo} ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <Container className="relative z-10 -mt-16 pb-16">
          <div className="max-w-xl rounded-2xl border border-bdk-yellow/30 bg-white/95 p-8 text-slate-900 shadow-2xl shadow-bdk-navy/30 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,27,58,0.35)] animate-fade-up motion-reduce:animate-none md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bdk-yellow">
              {heroCard.kicker}
            </p>
            <h2 className="mt-3 text-2xl font-heading text-bdk-navy md:text-3xl">
              {heroCard.title}
            </h2>
            <p className="mt-4 text-sm text-slate-600 md:text-base">
              {heroCard.description}
            </p>
            <div className="mt-6">
              <Link
                to={heroCard.ctaHref}
                className={buttonClasses({
                  variant: 'primary',
                  size: 'md',
                  className: 'animate-glow motion-reduce:animate-none',
                })}
              >
                {heroCard.ctaLabel}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
