import { CarruselHero } from '../../dominios/inicio/componentes/CarruselHero'
import { SeccionSobreNosotros } from '../../dominios/inicio/componentes/SeccionSobreNosotros'
import { SeccionPorQueElegirnos } from '../../dominios/inicio/componentes/SeccionPorQueElegirnos'
import { CintaClientes } from '../../dominios/inicio/componentes/CintaClientes'

export const PaginaInicio = () => {
  return (
    <div>
      <CarruselHero />
      <SeccionSobreNosotros />
      <SeccionPorQueElegirnos />
      <CintaClientes />
    </div>
  )
}

export default PaginaInicio
