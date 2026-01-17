import { aboutSection } from '../../../data/about'
import { Container } from '../../../components/shared/Container'
import { SectionTitle } from '../../../components/shared/SectionTitle'
import { cn } from '../../../lib/utils'

export const AboutSection = () => {
  return (
    <section id={aboutSection.id} className="bg-white py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <SectionTitle
            title={aboutSection.title}
            subtitle={aboutSection.subtitle}
            kicker={aboutSection.kicker}
          />
          <div className="space-y-6">
            {aboutSection.blocks.map((block, index) => (
              <div
                key={block.title}
                className="rounded-2xl border border-slate-200 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,27,58,0.12)] animate-fade-up motion-reduce:animate-none"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <h3 className="text-lg font-heading text-bdk-navy">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{block.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 animate-slide-in motion-reduce:animate-none">
          <div className="rounded-2xl border border-slate-200 bg-bdk-light p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,27,58,0.12)] animate-fade-up motion-reduce:animate-none md:col-span-2">
            <img src={aboutSection.logo.src} alt={aboutSection.logo.alt} className="h-12" />
            <p className="mt-3 text-sm text-bdk-plomo">
              {aboutSection.subtitle}
            </p>
          </div>
          {aboutSection.images.map((image, index) => (
            <div
              key={image.src}
              className={cn(
                'overflow-hidden rounded-2xl transition duration-500 hover:scale-[1.02] animate-fade-up motion-reduce:animate-none',
                index === 0 ? 'md:col-span-2' : 'md:col-span-1',
              )}
              style={{ animationDelay: `${(index + 2) * 140}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-56 w-full object-cover sm:h-64"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
