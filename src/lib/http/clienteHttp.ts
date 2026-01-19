import axios from 'axios'

export const clienteHttp = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '',
  timeout: 10000,
})

clienteHttp.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
)
