import { motion, useReducedMotion } from 'framer-motion'
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
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-bdk-orange/60 hover:shadow-[0_20px_40px_rgba(11,27,58,0.18)]"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.08,
      }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={previewImage.src}
          alt={previewImage.alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bdk-navy/70 via-bdk-navy/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-bdk-orange">
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
            className:
              'mt-auto self-start opacity-0 translate-y-2 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0',
          })}
          aria-label={`${projectLabels.viewDetails} de ${project.name}`}
        >
          {projectLabels.viewDetails}
        </button>
      </div>
    </motion.article>
  )
}
