export type HeroSlide = {
  id: string
  image: string
  title?: string
  text?: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    image: '/HEADER1.jpg',
    title: 'Ingenieria aplicada a obras de alto impacto',
    text: 'Planificacion, ejecucion y control con foco en seguridad y calidad.',
  },
  {
    id: 'slide-2',
    image: '/header2.jpg',
    title: 'Equipos expertos, resultados confiables',
    text: 'Gestionamos proyectos complejos con metodologias eficientes.',
  },
  {
    id: 'slide-3',
    image: '/header3.png',
    title: 'Compromiso con cada cliente',
    text: 'Soluciones a medida para sectores publicos y privados.',
  },
]

export const heroCard = {
  kicker: 'BDK Ingenieria y Construccion',
  title: 'Construimos infraestructura que impulsa tu negocio',
  description:
    'Desarrollamos proyectos de ingenieria y construccion con un enfoque integral, desde el diseno hasta la entrega final.',
  ctaLabel: 'Ver proyectos',
  ctaHref: '/proyectos',
}

export const heroCarouselLabels = {
  previous: 'Anterior slide',
  next: 'Siguiente slide',
  goTo: 'Ir al slide',
  defaultAlt: 'Slide principal',
}
