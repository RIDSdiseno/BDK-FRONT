import { Route, Routes } from 'react-router-dom'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import PaginaInicio from '../../paginas/inicio/PaginaInicio'
import PaginaProyectos from '../../paginas/proyectos/PaginaProyectos'
import PaginaContacto from '../../paginas/contacto/PaginaContacto'
import PaginaNoEncontrada from '../../paginas/no-encontrado/PaginaNoEncontrada'

export const RouterPrincipal = () => {
  return (
    <Routes>
      <Route element={<LayoutPrincipal />}>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/proyectos" element={<PaginaProyectos />} />
        <Route path="/contacto" element={<PaginaContacto />} />
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Route>
    </Routes>
  )
}

export default RouterPrincipal
