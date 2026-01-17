export type ClientLogo = {
  name: string
  src: string
}

export const clientsSection = {
  kicker: 'Clientes',
  title: 'Clientes que confian en nosotros',
  subtitle: 'Relaciones de largo plazo en distintos sectores productivos.',
  labels: {
    previous: 'Anterior logos',
    next: 'Siguiente logos',
    goTo: 'Ir a logos',
  },
  logos: [
    { name: 'Cliente 01', src: '/carrusel1.PNG' },
    { name: 'Cliente 02', src: '/carrusel2.PNG' },
    { name: 'Cliente 03', src: '/carrusel3.PNG' },
    { name: 'Cliente 04', src: '/carrusel4.PNG' },
    { name: 'Cliente 05', src: '/carrusel5.PNG' },
    { name: 'Cliente 06', src: '/carrusel6.PNG' },
    { name: 'Cliente 07', src: '/carrusel7.PNG' },
  ] satisfies ClientLogo[],
}