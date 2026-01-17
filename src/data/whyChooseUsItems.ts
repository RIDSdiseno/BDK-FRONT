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