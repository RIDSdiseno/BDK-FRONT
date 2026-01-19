import { Contenedor } from '../../componentes/ui/Contenedor'
import { notFoundContent } from '../../dominios/sitio/datosNoEncontrado'

export const PaginaNoEncontrada = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 py-16 text-center">
      <Contenedor className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-bdk-gray">
          {notFoundContent.kicker}
        </p>
        <h1 className="text-3xl font-heading text-slate-900">
          {notFoundContent.title}
        </h1>
        <p className="text-sm text-slate-600">{notFoundContent.description}</p>
      </Contenedor>
    </div>
  )
}

export default PaginaNoEncontrada
