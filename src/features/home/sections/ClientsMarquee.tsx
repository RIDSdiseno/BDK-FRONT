import type { CSSProperties } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { clientsSection } from '../../../data/clients'
import { Container } from '../../../components/shared/Container'
import { SectionTitle } from '../../../components/shared/SectionTitle'
import { cn } from '../../../lib/cn'

export const ClientsMarquee = () => {
  const shouldReduceMotion = useReducedMotion()
  const logos = [...clientsSection.logos, ...clientsSection.logos]
  const trackSectionStyle = {
    '--marquee-duration': `${clientsSection.speed}s`,
  } as CSSProperties

  return (
    <section id="clientes" className="bg-white py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          title={clientsSection.title}
          subtitle={clientsSection.subtitle}
          align="center"
          kicker={clientsSection.kicker}
        />
      </Container>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
      >
        <div className="filmstrip mask-fade">
          <div className="group overflow-hidden">
            <div
              className="flex w-max items-center gap-8 px-6 py-8 animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]"
              style={trackSectionStyle}
            >
              {logos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className={cn(
                    'flex h-20 w-40 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur',
                    index >= clientsSection.logos.length && 'opacity-60',
                  )}
                  aria-hidden={index >= clientsSection.logos.length}
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
        </div>
      </motion.div>
    </section>
  )
}
