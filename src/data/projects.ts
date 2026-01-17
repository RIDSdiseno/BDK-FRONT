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
    'Presentamos una seleccion de proyectos ejecutados y en desarrollo. Reemplaza estos textos con los contenidos finales cuando esten disponibles.',
}

export const projectLabels = {
  viewDetails: 'Ver detalles',
  close: 'Cerrar',
  closeAria: 'Cerrar detalles',
  videoTitle: 'Video',
  videoFallback: 'Tu navegador no soporta el elemento de video.',
}

export const projects: Project[] = [
  {
    id: 'uc-christus',
    name: 'UC Christus',
    client: 'Cliente por definir',
    summary:
      'Proyecto hospitalario con altos estandares de construccion y coordinacion tecnica.',
    description:
      'Placeholder para descripcion detallada del proyecto UC Christus. Agregar alcance, plazos, metraje y especialidades involucradas.',
    images: [
      {
        src: '/Foto1.PNG',
        alt: 'Proyecto UC Christus - imagen 1',
      },
      {
        src: '/foto2.PNG',
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
    name: 'CHP',
    client: 'Cliente por definir',
    summary:
      'Infraestructura industrial con foco en seguridad y eficiencia operativa.',
    description:
      'Placeholder para descripcion detallada del proyecto CHP. Agregar hitos, tecnologias aplicadas y resultados.',
    images: [
      {
        src: '/FONDOO.PNG',
        alt: 'Proyecto CHP - imagen 1',
      },
      {
        src: '/FOTO%20DEMSOTRATIVA.PNG',
        alt: 'Proyecto CHP - imagen 2',
      },
      {
        src: '/Foto1.PNG',
        alt: 'Proyecto CHP - imagen 3',
      },
    ],
    video: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Time_lapse_construction_of_tram_route_96_in_Melbourne_%28drone_video_of_construction%29.webm',
      poster: '/FONDOO.PNG',
    },
  },
]
