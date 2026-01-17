import { Container } from '../components/shared/Container'
import { SectionTitle } from '../components/shared/SectionTitle'
import { contactPage } from '../data/contact'
import { ContactForm } from '../features/contacto/ContactForm'
import { ContactInfo } from '../features/contacto/ContactInfo'
import { ContactImages } from '../features/contacto/ContactImages'

const ContactoPage = () => {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-bdk-light py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,183,5,0.18),_transparent_55%)]" />
        <Container className="relative space-y-4">
          <SectionTitle
            title={contactPage.title}
            subtitle={contactPage.subtitle}
            kicker={contactPage.kicker}
          />
          <p className="max-w-2xl text-sm text-slate-600 md:text-base">
            {contactPage.description}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-up motion-reduce:animate-none">
              <h3 className="text-xl font-heading text-bdk-navy">
                {contactPage.form.title}
              </h3>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
            <ContactInfo />
          </div>
          <div className="space-y-6">
            <ContactImages />
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ContactoPage
