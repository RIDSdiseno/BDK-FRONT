import { motion, useReducedMotion } from 'framer-motion'
import { DraftingCompass, Hammer, Ruler } from 'lucide-react'
import { aboutSection } from '../datosInicio'
import { Contenedor } from '../../../componentes/ui/Contenedor'
import { TituloSeccion } from '../../../componentes/ui/TituloSeccion'
import { cn } from '../../../lib/utils/cn'

const iconBadges = [
  { Icon: DraftingCompass, className: 'left-4 top-10' },
  { Icon: Ruler, className: 'right-8 top-24' },
  { Icon: Hammer, className: 'right-6 bottom-16' },
]

export const SeccionSobreNosotros = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id={aboutSection.id}
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-50 blueprint-grid" />
        <div className="absolute -left-16 top-12 h-48 w-48 rounded-full border border-bdk-orange/30" />
        <div className="absolute bottom-12 right-10 h-32 w-32 rounded-full border border-bdk-orange/20" />
      </div>

      <Contenedor className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <TituloSeccion
            title={aboutSection.title}
            subtitle={aboutSection.subtitle}
            kicker={aboutSection.kicker}
          />
          <motion.p
            className="text-sm text-slate-600 md:text-base"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          >
            {aboutSection.intro}
          </motion.p>
          <div className="space-y-6">
            {aboutSection.blocks.map((block, index) => (
              <motion.div
                key={block.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,27,58,0.12)]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
              >
                <h3 className="text-lg font-heading text-bdk-navy">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{block.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative grid gap-4 md:grid-cols-2">
          <div className="pointer-events-none absolute inset-0 rounded-3xl border border-bdk-orange/15 bg-bdk-light/70" />

          {iconBadges.map(({ Icon, className }, index) => (
            <motion.div
              key={className}
              className={cn(
                'pointer-events-none absolute z-10 hidden items-center justify-center rounded-full border border-bdk-orange/30 bg-white/90 p-3 text-bdk-orange shadow-lg lg:flex',
                className,
              )}
              animate={
                shouldReduceMotion ? { opacity: 1 } : { y: [0, -8, 0] }
              }
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Icon className="h-4 w-4" />
            </motion.div>
          ))}

          <motion.div
            className="relative z-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          >
            <div className="flex items-center justify-between">
              <img
                src={aboutSection.logo.src}
                alt={aboutSection.logo.alt}
                className="h-12"
              />
              <span className="rounded-full bg-bdk-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-bdk-orange">
                {aboutSection.badge}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{aboutSection.subtitle}</p>
            <div className="mt-5">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                <span>{aboutSection.progress.label}</span>
                <span>{aboutSection.progress.value}%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
                <motion.div
                  className="h-full rounded-full bg-bdk-orange"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${aboutSection.progress.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.9 }}
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                {aboutSection.progress.note}
              </p>
            </div>
          </motion.div>

          {aboutSection.images.map((image, index) => (
            <motion.div
              key={image.src}
              className={cn(
                'relative z-10 overflow-hidden rounded-2xl',
                index === 0 ? 'md:col-span-2' : 'md:col-span-1',
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : (index + 1) * 0.1,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-56 w-full object-cover sm:h-64"
              />
            </motion.div>
          ))}
        </div>
      </Contenedor>
    </section>
  )
}
