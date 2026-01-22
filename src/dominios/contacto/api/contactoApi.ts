import { api } from '../../../lib/api'

type EnvioContacto = {
  name: string
  email: string
  subject: string
  phone?: string
  message: string
  company?: string
}

/**
 * Envia un mensaje de contacto al backend.
 */
export const enviarContacto = async (payload: EnvioContacto) => {
  const asunto = payload.subject.trim()
  const telefono = payload.phone?.trim()
  const company = payload.company?.trim()
  const { data } = await api.post('/contacto', {
    nombre: payload.name.trim(),
    email: payload.email.trim(),
    mensaje: payload.message.trim(),
    asunto,
    telefono: telefono && telefono.length > 0 ? telefono : undefined,
    company: company && company.length > 0 ? company : undefined,
  })
  return data
}
