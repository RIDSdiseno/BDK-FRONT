import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { clientsSection } from '../../../data/clientsLogos'
import { Container } from '../../../components/shared/Container'
import { SectionTitle } from '../../../components/shared/SectionTitle'
import { cn } from '../../../lib/utils'

const getItemsPerPage = (width: number) => {
  if (width < 640) {
    return 2
  }
  if (width < 1024) {
    return 3
  }
  return 4
}

export const ClientsCarousel = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4)
  const [activePage, setActivePage] = useState(0)

  useEffect(() => {
    const update = () => {
      setItemsPerPage(getItemsPerPage(window.innerWidth))
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    setActivePage(0)
  }, [itemsPerPage])

  const pages = useMemo(() => {
    const chunks: Array<typeof clientsSection.logos> = []
    for (let i = 0; i < clientsSection.logos.length; i += itemsPerPage) {
      chunks.push(clientsSection.logos.slice(i, i + itemsPerPage))
    }
    return chunks
  }, [itemsPerPage])

  const goTo = (index: number) => {
    const nextIndex = (index + pages.length) % pages.length
    setActivePage(nextIndex)
  }

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          title={clientsSection.title}
          subtitle={clientsSection.subtitle}
          align="center"
          kicker={clientsSection.kicker}
        />

        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activePage * 100}%)` }}
          >
            {pages.map((page, pageIndex) => (
              <div
                key={`clients-page-${pageIndex}`}
                className="min-w-full px-2"
              >
                <div
                  className={cn(
                    'grid gap-6',
                    itemsPerPage === 2 && 'grid-cols-2',
                    itemsPerPage === 3 && 'grid-cols-3',
                    itemsPerPage === 4 && 'grid-cols-2 sm:grid-cols-4',
                  )}
                >
                  {page.map((logo, index) => (
                    <div
                      key={logo.name}
                      className="flex items-center justify-center rounded-2xl border border-slate-200 bg-bdk-light px-4 py-6 animate-fade-up motion-reduce:animate-none"
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="h-10 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-bdk-yellow/40 bg-bdk-navy text-bdk-yellow shadow-sm transition hover:scale-105 hover:bg-bdk-yellow hover:text-bdk-navy"
            onClick={() => goTo(activePage - 1)}
            aria-label={clientsSection.labels.previous}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-bdk-yellow/40 bg-bdk-navy text-bdk-yellow shadow-sm transition hover:scale-105 hover:bg-bdk-yellow hover:text-bdk-navy"
            onClick={() => goTo(activePage + 1)}
            aria-label={clientsSection.labels.next}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2">
          {pages.map((_, index) => (
            <button
              key={`clients-dot-${index}`}
              type="button"
              onClick={() => goTo(index)}
              className={cn(
                'h-2.5 w-2.5 rounded-full border border-slate-400',
                index === activePage ? 'bg-bdk-yellow' : 'bg-transparent',
              )}
              aria-label={`${clientsSection.labels.goTo} ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
