export type NavLink = {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Quienes Somos', href: '/#quienes-somos' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Contacto', href: '/contacto' },
]

export const navCta = {
  label: 'Contactanos',
  href: '/contacto',
}

export const navLabels = {
  openMenu: 'Abrir menu',
  closeMenu: 'Cerrar menu',
}
