export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  id: string
  name: string
  client: string
  summary: string
  description: string
  images: ProjectImage[]
  video?: {
    src: string
    poster?: string
  }
}

export const projectsPage = {
  kicker: 'Portafolio',
  title: 'Proyectos',
  subtitle: 'Obras destacadas y soluciones en ejecucion',
  intro:
    'Presentamos una seleccion de proyectos ejecutados y en desarrollo. Esta informacion se puede actualizar facilmente desde los datos locales.',
}

export const projectLabels = {
  viewDetails: 'Ver proyecto',
  close: 'Cerrar',
  closeAria: 'Cerrar detalles',
  videoTitle: 'Video',
  videoFallback: 'Tu navegador no soporta el elemento de video.',
}

export const projects: Project[] = [
  {
    id: 'uc-christus',
    name: 'UC Christus',
    client: 'Salud privada',
    summary:
      'Proyecto hospitalario con altos estandares de construccion y coordinacion tecnica.',
    description:
      'Desarrollo de infraestructura clinica con foco en calidad, cumplimiento normativo y continuidad operativa.',
    images: [
      {
        src: '/constru1.PNG',
        alt: 'Construcción 1 - UC Christus',
      },
      {
        src: '/foto2.jpg',
        alt: 'Proyecto UC Christus - imagen 2',
      },
      {
        src: '/foto3.PNG',
        alt: 'Proyecto UC Christus - imagen 3',
      },
    ],
  },
  {
    id: 'chp',
    name: 'CHP Industrial',
    client: 'Energia y procesos',
    summary:
      'Infraestructura industrial con foco en seguridad y eficiencia operativa.',
    description:
      'Implementacion de sistemas industriales con planes de seguridad reforzados y control de calidad por etapas.',
    images: [
      {
        src: '/constru2.PNG',
        alt: 'Construcción 2 - CHP Industrial',
      },
      {
        src: '/FOTO%20DEMSOTRATIVA.PNG',
        alt: 'Proyecto CHP - imagen 2',
      },
      {
        src: '/Foto1.jpeg',
        alt: 'Proyecto CHP - imagen 3',
      },
    ],
    video: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Time_lapse_construction_of_tram_route_96_in_Melbourne_%28drone_video_of_construction%29.webm',
      poster: '/FONDOO.PNG',
    },
  },
  {
    id: 'centro-logistico',
    name: 'Centro Logistico Norte',
    client: 'Retail y distribucion',
    summary:
      'Centro de distribucion con altos estandares de eficiencia y seguridad.',
    description:
      'Construccion de bodegas, patios de maniobra y oficinas tecnicas para operacion 24/7.',
    images: [
      {
        src: '/constru3.PNG',
        alt: 'Construcción 3 - Centro Logistico Norte',
      },
      {
        src: '/foto2.jpg',
        alt: 'Centro Logistico Norte - imagen 2',
      },
      {
        src: '/foto3.PNG',
        alt: 'Centro Logistico Norte - imagen 3',
      },
    ],
  },
  {
    id: 'puente-rio',
    name: 'Puente Rio Claro',
    client: 'Infraestructura publica',
    summary:
      'Obra vial de alta complejidad con gestion ambiental y control de riesgos.',
    description:
      'Ejecucion de estructura principal, accesos y mitigaciones para conectividad regional.',
    images: [
      {
        src: '/constru4.PNG',
        alt: 'Construcción 4 - Puente Rio Claro',
      },
      {
        src: '/FONDOO.PNG',
        alt: 'Puente Rio Claro - imagen 2',
      },
      {
        src: '/foto2.jpg',
        alt: 'Puente Rio Claro - imagen 3',
      },
    ],
  },
  {
    id: 'planta-tratamiento',
    name: 'Planta de Tratamiento Sur',
    client: 'Servicios sanitarios',
    summary:
      'Mejoras en infraestructura sanitaria con enfoque en continuidad operativa.',
    description:
      'Renovacion de lineas de proceso, salas de control y sistemas auxiliares.',
    images: [
      {
        src: '/constru5.PNG',
        alt: 'Construcción 5 - Planta de Tratamiento Sur',
      },
      {
        src: '/Foto1.jpeg',
        alt: 'Planta de Tratamiento Sur - imagen 2',
      },
      {
        src: '/header2.jpg',
        alt: 'Planta de Tratamiento Sur - imagen 3',
      },
    ],
  },
  {
    id: 'campus-tecnologico',
    name: 'Campus Tecnologico BDK',
    client: 'Innovacion y tecnologia',
    summary:
      'Edificio corporativo con espacios colaborativos y soluciones sostenibles.',
    description:
      'Desarrollo de campus con eficiencia energetica, climatizacion inteligente y confort interior.',
    images: [
      {
        src: '/constru6.PNG',
        alt: 'Construcción 6 - Campus Tecnologico BDK',
      },
      {
        src: '/header3.png',
        alt: 'Campus Tecnologico BDK - imagen 2',
      },
      {
        src: '/foto2.jpg',
        alt: 'Campus Tecnologico BDK - imagen 3',
      },
    ],
  },
]
