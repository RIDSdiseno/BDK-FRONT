export type HeroSlide = {
  id: string
  image: string
  title: string
  text: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-infraestructura',
    image: '/HEADER1.jpg',
    title: 'Ingenieria aplicada a obras de alto impacto',
    text: 'Planificacion, ejecucion y control con foco en seguridad y calidad.',
  },
  {
    id: 'slide-equipos',
    image: '/header2.jpg',
    title: 'Equipos expertos, resultados confiables',
    text: 'Gestionamos proyectos complejos con metodologias eficientes.',
  },
  {
    id: 'slide-compromiso',
    image: '/header3.png',
    title: 'Compromiso con cada cliente',
    text: 'Soluciones a medida para sectores publicos y privados.',
  },
]

export const heroCard = {
  kicker: 'BDK Ingenieria y Construccion',
  title: 'Construimos infraestructura que impulsa tu operacion',
  subtitle: 'Ingenieria, construccion y mantenimiento en un solo equipo.',
  description:
    'Desarrollamos proyectos de principio a fin, con metodologias tecnicas, control de calidad y seguridad activa.',
  ctaLabel: 'Ver proyectos',
  ctaHref: '/proyectos',
}

export const heroCarouselLabels = {
  previous: 'Anterior slide',
  next: 'Siguiente slide',
  goTo: 'Ir al slide',
  defaultAlt: 'Slide principal',
}

export type AboutBlock = {
  title: string
  text: string
}

export const aboutSection = {
  id: 'quienes-somos',
  kicker: 'Sobre nosotros',
  title: 'Mision, Vision y Quienes Somos',
  subtitle: 'Compromiso, experiencia y ejecucion eficiente en cada obra.',
  intro:
    'BDK integra equipos de ingenieria, construccion y mantenimiento para entregar soluciones completas, con control permanente de avances.',
  blocks: [
    {
      title: 'Mision',
      text: 'Entregar soluciones de ingenieria y construccion con altos estandares de calidad, seguridad y cumplimiento.',
    },
    {
      title: 'Vision',
      text: 'Ser un referente nacional en ejecucion de proyectos, destacando por confiabilidad y excelencia tecnica.',
    },
    {
      title: 'Quienes Somos',
      text: 'Un equipo multidisciplinario con experiencia en obras civiles, industriales e infraestructura publica.',
    },
  ] satisfies AboutBlock[],
  logo: {
    src: '/BDK-LOGO.PNG',
    alt: 'Logo BDK Ingenieria y Construccion',
  },
  images: [
    {
      src: '/Foto1.jpeg',
      alt: 'Equipo en obra',
    },
    {
      src: '/foto2.jpg',
      alt: 'Estructura en construccion',
    },
    {
      src: '/foto3.PNG',
      alt: 'Proyecto en ejecucion',
    },
  ],
  progress: {
    label: 'Avance de obra',
    value: 82,
    note: 'Control de hitos y seguridad activa en terreno.',
  },
  badge: 'Blueprint',
}

export type WhyChooseUsItem = {
  id: string
  title: string
  text: string
}

export const whyChooseUsSection = {
  kicker: 'Diferenciales',
  title: 'Por que elegirnos',
  subtitle: 'Metodologia, seguridad y resultados medibles.',
  items: [
    {
      id: '01',
      title: 'Planificacion detallada',
      text: 'Cronogramas claros y control de hitos para cumplir plazos.',
    },
    {
      id: '02',
      title: 'Equipo especializado',
      text: 'Profesionales certificados con experiencia en proyectos complejos.',
    },
    {
      id: '03',
      title: 'Gestion de calidad',
      text: 'Estandares rigurosos y seguimiento continuo en obra.',
    },
    {
      id: '04',
      title: 'Seguridad operativa',
      text: 'Protocolos activos para proteger personas y activos.',
    },
    {
      id: '05',
      title: 'Compromiso con el cliente',
      text: 'Comunicacion directa y soluciones alineadas a objetivos.',
    },
  ] satisfies WhyChooseUsItem[],
  image: {
    src: '/FOTO%20DEMSOTRATIVA.PNG',
    alt: 'Equipo de ingenieria en obra',
  },
}
