import { clienteHttp } from '../../../lib/http/clienteHttp'
import type { Project } from '../datosProyectos'

/**
 * Obtiene el listado de proyectos desde el backend.
 */
export const obtenerProyectos = async () => {
  const { data } = await clienteHttp.get<Project[]>('/proyectos')
  return data
}
