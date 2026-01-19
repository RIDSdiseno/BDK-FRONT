import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { Project } from '../../data/projects'
import { projectLabels } from '../../data/projects'
import { buttonClasses } from '../../components/shared/Button'

export type ProjectDetailModalProps = {
  project: Project
  onClose: () => void
}

export const ProjectDetailModal = ({ project, onClose }: ProjectDetailModalProps) => {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-${project.id}-title`}
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={projectLabels.closeAria}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-bdk-orange hover:text-bdk-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bdk-orange"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-bdk-orange">
              {project.client}
            </p>
            <h2
              id={`project-${project.id}-title`}
              className="mt-2 text-2xl font-heading text-bdk-navy"
            >
              {project.name}
            </h2>
            <p className="mt-3 text-sm text-slate-600">{project.description}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {project.images.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-40 w-full object-cover"
                />
              </div>
            ))}
          </div>

          {project.video ? (
            <div className="space-y-3">
              <h3 className="text-lg font-heading text-bdk-navy">
                {projectLabels.videoTitle}
              </h3>
              <video
                className="w-full rounded-xl"
                controls
                poster={project.video.poster}
              >
                <source src={project.video.src} />
                {projectLabels.videoFallback}
              </video>
            </div>
          ) : null}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className={buttonClasses({ variant: 'secondary', size: 'sm' })}
            >
              {projectLabels.close}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
