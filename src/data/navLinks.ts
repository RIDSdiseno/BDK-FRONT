export type NavLink = {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Principal', href: '/' },
  { label: 'Proyectos', href: '/proyectos' },
]

export const navCta = {
  label: 'Contactanos',
  href: '/contacto',
}

export const navLabels = {
  openMenu: 'Abrir menu',
  closeMenu: 'Cerrar menu',
}
