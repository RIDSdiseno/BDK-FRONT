import { api } from '../../../lib/api'
import type { Project } from '../datosProyectos'

/**
 * Obtiene el listado de proyectos desde el backend.
 */
export const obtenerProyectos = async () => {
  const { data } = await api.get<Project[]>('/proyectos')
  return data
}
