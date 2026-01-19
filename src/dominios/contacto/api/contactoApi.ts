import { clienteHttp } from '../../../lib/http/clienteHttp'

type EnvioContacto = {
  name: string
  email: string
  phone?: string
  message: string
}

/**
 * Envia un mensaje de contacto al backend.
 */
export const enviarContacto = async (payload: EnvioContacto) => {
  const { data } = await clienteHttp.post('/contacto', payload)
  return data
}
