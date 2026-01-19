import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProyectosPage from '../pages/ProyectosPage'
import ContactoPage from '../pages/ContactoPage'
import { notFoundContent } from '../data/notFound'

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 py-16 text-center">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-bdk-gray">
          {notFoundContent.kicker}
        </p>
        <h1 className="text-3xl font-heading text-slate-900">
          {notFoundContent.title}
        </h1>
        <p className="text-sm text-slate-600">{notFoundContent.description}</p>
      </div>
    </div>
  )
}

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/proyectos" element={<ProyectosPage />} />
      <Route path="/contacto" element={<ContactoPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
