import type { Project } from '../../data/projects'
import { projectLabels } from '../../data/projects'
import { buttonClasses } from '../../components/shared/Button'

export type ProjectCardProps = {
  project: Project
  onSelect: (project: Project) => void
  index: number
}

export const ProjectCard = ({ project, onSelect, index }: ProjectCardProps) => {
  const previewImage = project.images[0]

  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-bdk-yellow/60 hover:shadow-[0_20px_40px_rgba(11,27,58,0.18)] animate-fade-up motion-reduce:animate-none"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="h-48 w-full overflow-hidden">
        <img
          src={previewImage.src}
          alt={previewImage.alt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-bdk-yellow">
            {project.client}
          </p>
          <h3 className="mt-2 text-lg font-heading text-bdk-navy">
            {project.name}
          </h3>
        </div>
        <p className="text-sm text-slate-600">{project.summary}</p>
        <button
          type="button"
          onClick={() => onSelect(project)}
          className={buttonClasses({
            variant: 'outline',
            size: 'sm',
            className: 'mt-auto self-start',
          })}
          aria-label={`${projectLabels.viewDetails} de ${project.name}`}
        >
          {projectLabels.viewDetails}
        </button>
      </div>
    </article>
  )
}
