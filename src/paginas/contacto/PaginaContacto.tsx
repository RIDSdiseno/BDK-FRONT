import { Contenedor } from '../../componentes/ui/Contenedor'
import { TituloSeccion } from '../../componentes/ui/TituloSeccion'
import { contactPage } from '../../dominios/contacto/datosContacto'
import { FormularioContacto } from '../../dominios/contacto/componentes/FormularioContacto'
import { InfoContacto } from '../../dominios/contacto/componentes/InfoContacto'
import { ImagenesContacto } from '../../dominios/contacto/componentes/ImagenesContacto'

export const PaginaContacto = () => {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-bdk-navy py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_#0B1B3A,_#14284F,_#0B1B3A)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(243,123,29,0.25),_transparent_55%)]" />
        <div className="absolute inset-0 opacity-40 blueprint-grid animate-grid-pan motion-reduce:animate-none" />
        <div className="absolute -left-16 top-8 h-48 w-48 rounded-full bg-bdk-orange/20 blur-3xl animate-float-slow motion-reduce:animate-none" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-float-slow motion-reduce:animate-none" />
        <Contenedor className="relative space-y-4">
          <TituloSeccion
            title={contactPage.title}
            subtitle={contactPage.subtitle}
            kicker={contactPage.kicker}
            tone="dark"
          />
          <p className="max-w-2xl text-sm text-slate-200 md:text-base">
            {contactPage.description}
          </p>
        </Contenedor>
      </section>

      <section className="py-16 sm:py-20">
        <Contenedor className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-heading text-bdk-navy">
                {contactPage.form.title}
              </h3>
              <div className="mt-6">
                <FormularioContacto />
              </div>
            </div>
            <InfoContacto />
          </div>
          <div className="space-y-6">
            <ImagenesContacto />
          </div>
        </Contenedor>
      </section>
    </div>
  )
}

export default PaginaContacto
