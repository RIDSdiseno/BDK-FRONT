import axios from 'axios'

/**
 * Cliente HTTP centralizado para consumir APIs del backend.
 */
export const clienteHttp = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3001/api',
  timeout: 10000,
})

clienteHttp.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
)
