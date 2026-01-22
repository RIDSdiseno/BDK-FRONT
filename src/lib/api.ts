import axios from 'axios'

const normalizeBaseUrl = (value: string) => value.replace(/\/+$/, '')
const normalizePrefix = (value: string) => {
  if (!value) {
    return ''
  }
  const withSlash = value.startsWith('/') ? value : `/${value}`
  return withSlash.replace(/\/+$/, '')
}

const rawBaseUrl = (import.meta.env.VITE_API_URL ?? '').trim()
const rawPrefix = (import.meta.env.VITE_API_PREFIX ?? '').trim()

const baseUrl = normalizeBaseUrl(rawBaseUrl)
const prefix = normalizePrefix(rawPrefix)

export const API_BASE_URL = `${baseUrl}${prefix}`

if (import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.info(`[api] baseURL: ${API_BASE_URL || '(missing VITE_API_URL)'}`)
}

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (import.meta.env.DEV) {
      const status = error?.response?.status
      const method = error?.config?.method?.toUpperCase()
      const url = error?.config?.url
      // eslint-disable-next-line no-console
      console.error(
        `[api] ${status ?? 'ERR'} ${method ?? ''} ${url ?? ''}`.trim(),
        error,
      )
    }
    return Promise.reject(error)
  },
)
