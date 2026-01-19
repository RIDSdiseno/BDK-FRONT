export type FooterItem = {
  label: string
  href?: string
}

export type FooterColumn = {
  title: string
  items: FooterItem[]
}

export type SocialLink = {
  label: string
  href: string
  icon: 'Facebook' | 'Linkedin' | 'Instagram'
}

export const footerContent = {
  description:
    'BDK Ingenieria y Construccion desarrolla proyectos integrales en infraestructura, obras civiles e industria con foco en calidad y seguridad.',
  columns: [
    {
      title: 'Menu',
      items: [
        { label: 'Principal', href: '/' },
        { label: 'Proyectos', href: '/proyectos' },
        { label: 'Contacto', href: '/contacto' },
      ],
    },
    {
      title: 'Contactos',
      items: [
        { label: 'Av. Principal 1234, Santiago', href: '#' },
        { label: '+56 2 2345 6789', href: 'tel:+56223456789' },
        { label: 'contacto@bdk.cl', href: 'mailto:contacto@bdk.cl' },
      ],
    },
    {
      title: 'Sobre',
      items: [
        { label: 'Mision y Vision', href: '/#quienes-somos' },
        { label: 'Nuestro equipo', href: '/#quienes-somos' },
        { label: 'Trabaja con nosotros', href: '#' },
      ],
    },
  ] satisfies FooterColumn[],
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'Linkedin' },
    { label: 'Facebook', href: 'https://www.facebook.com', icon: 'Facebook' },
    { label: 'Instagram', href: 'https://www.instagram.com', icon: 'Instagram' },
  ] satisfies SocialLink[],
  legal:
    '(c) 2026 BDK Ingenieria y Construccion. Todos los derechos reservados.',
}
