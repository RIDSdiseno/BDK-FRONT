import { motion, useReducedMotion } from 'framer-motion'
import { whyChooseUsSection } from '../../../data/home'
import { Container } from '../../../components/shared/Container'
import { SectionTitle } from '../../../components/shared/SectionTitle'

export const WhyChooseUs = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="por-que-elegirnos"
      className="bg-bdk-light py-16 sm:py-20"
    >
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <SectionTitle
            title={whyChooseUsSection.title}
            subtitle={whyChooseUsSection.subtitle}
            kicker={whyChooseUsSection.kicker}
          />
          <div className="space-y-5">
            {whyChooseUsSection.items.map((item, index) => (
              <motion.div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,27,58,0.12)]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-lg font-heading text-bdk-orange">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-bdk-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <div className="absolute -left-8 top-10 hidden h-24 w-24 rounded-full bg-bdk-orange/20 blur-2xl lg:block" />
          <img
            src={whyChooseUsSection.image.src}
            alt={whyChooseUsSection.image.alt}
            className="h-full w-full rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>
      </Container>
    </section>
  )
}
