import { Contenedor } from '../../componentes/ui/Contenedor'
import { TituloSeccion } from '../../componentes/ui/TituloSeccion'
import { projectsPage } from '../../dominios/proyectos/datosProyectos'
import { GrillaProyectos } from '../../dominios/proyectos/componentes/GrillaProyectos'

export const PaginaProyectos = () => {
  return (
    <div className="bg-bdk-light">
      <section className="relative overflow-hidden bg-bdk-navy py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(243,123,29,0.2),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(11,27,58,0.95),_rgba(11,27,58,0.7),_rgba(243,123,29,0.18))]" />
        <Contenedor className="relative space-y-4">
          <TituloSeccion
            title={projectsPage.title}
            subtitle={projectsPage.subtitle}
            kicker={projectsPage.kicker}
            tone="dark"
          />
          <p className="max-w-2xl text-sm text-slate-200 md:text-base">
            {projectsPage.intro}
          </p>
        </Contenedor>
      </section>

      <section className="py-16 sm:py-20">
        <Contenedor>
          <GrillaProyectos />
        </Contenedor>
      </section>
    </div>
  )
}

export default PaginaProyectos
