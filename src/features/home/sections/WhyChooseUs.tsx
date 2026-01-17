import { whyChooseUsSection } from '../../../data/whyChooseUsItems'
import { Container } from '../../../components/shared/Container'
import { SectionTitle } from '../../../components/shared/SectionTitle'

export const WhyChooseUs = () => {
  return (
    <section className="bg-bdk-light py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <SectionTitle
            title={whyChooseUsSection.title}
            subtitle={whyChooseUsSection.subtitle}
            kicker={whyChooseUsSection.kicker}
          />
          <div className="space-y-5">
            {whyChooseUsSection.items.map((item, index) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm animate-fade-up motion-reduce:animate-none"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-lg font-heading text-bdk-yellow">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-bdk-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative animate-fade-up motion-reduce:animate-none">
          <div className="absolute -left-8 top-10 hidden h-24 w-24 rounded-full bg-bdk-yellow/20 blur-2xl lg:block" />
          <img
            src={whyChooseUsSection.image.src}
            alt={whyChooseUsSection.image.alt}
            className="h-full w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </Container>
    </section>
  )
}
