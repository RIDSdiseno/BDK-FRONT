export type AboutBlock = {
  title: string
  text: string
}

export const aboutSection = {
  id: 'quienes-somos',
  kicker: 'Sobre nosotros',
  title: 'Mision, Vision y Quienes Somos',
  subtitle: 'Compromiso, experiencia y ejecucion eficiente en cada obra.',
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
      src: '/Foto1.PNG',
      alt: 'Equipo en obra',
    },
    {
      src: '/foto2.PNG',
      alt: 'Estructura en construccion',
    },
    {
      src: '/foto3.PNG',
      alt: 'Proyecto en ejecucion',
    },
  ],
}