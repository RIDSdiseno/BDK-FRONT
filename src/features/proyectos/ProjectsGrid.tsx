import { useState } from 'react'
import { projects, type Project } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectDetailModal } from './ProjectDetailModal'

export const ProjectsGrid = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setActiveProject}
            index={index}
          />
        ))}
      </div>

      {activeProject ? (
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      ) : null}
    </div>
  )
}
