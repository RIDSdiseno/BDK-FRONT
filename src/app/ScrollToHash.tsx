import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToHash = () => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = hash.replace('#', '')
    const element = document.getElementById(id)

    if (!element) {
      return
    }

    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash, pathname])

  return null
}