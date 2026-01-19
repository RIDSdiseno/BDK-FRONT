import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { projects, type Project } from '../datosProyectos'
import { TarjetaProyecto } from './TarjetaProyecto'
import { ModalDetalleProyecto } from './ModalDetalleProyecto'

export const GrillaProyectos = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <TarjetaProyecto
            key={project.id}
            project={project}
            onSelect={setActiveProject}
            index={index}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeProject ? (
          <ModalDetalleProyecto
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        ) : null}
      </AnimatePresence>
    </div>
  )
}
