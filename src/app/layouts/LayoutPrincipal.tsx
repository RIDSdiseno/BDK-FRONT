import { Outlet } from 'react-router-dom'
import { BarraNavegacion } from '../../componentes/comunes/BarraNavegacion'
import { PiePagina } from '../../componentes/comunes/PiePagina'

export const LayoutPrincipal = () => {
  return (
    <div className="flex min-h-screen flex-col bg-bdk-light text-slate-900">
      <BarraNavegacion />
      <main className="flex-1">
        <Outlet />
      </main>
      <PiePagina />
    </div>
  )
}

export default LayoutPrincipal
