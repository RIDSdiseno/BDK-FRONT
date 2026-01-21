export type ContactInfoItem = {
  id: string
  label: string
  value: string
  href?: string
}

export const contactPage = {
  kicker: 'Contacto',
  title: 'Contacto',
  subtitle: 'Conversemos sobre tu proximo proyecto',
  description:
    'Completa el formulario y un especialista se pondra en contacto contigo. Puedes reemplazar estos datos cuando el equipo defina los textos finales.',
  form: {
    title: 'Envianos un mensaje',
    submitLabel: 'Enviar mensaje',
    submittingLabel: 'Enviando...',
    successMessage: 'Mensaje enviado. Te contactaremos a la brevedad.',
    fields: {
      name: { label: 'Nombre', placeholder: 'Nombre y apellido' },
      email: { label: 'Correo', placeholder: 'tu@empresa.com' },
      subject: { label: 'Asunto', placeholder: 'Motivo de tu mensaje' },
      phone: { label: 'Telefono (opcional)', placeholder: '+56 9 0000 0000' },
      message: { label: 'Mensaje', placeholder: 'Escribe tu consulta' },
    },
    errors: {
      name: 'Ingresa tu nombre.',
      emailRequired: 'Ingresa tu correo.',
      emailInvalid: 'Ingresa un correo valido.',
      subject: 'Indica el asunto (minimo 3 caracteres).',
      phoneInvalid: 'Ingresa un telefono valido.',
      message: 'Cuentanos en que podemos ayudar.',
    },
  },
  infoTitle: 'Datos de contacto',
  info: [
    {
      id: 'direccion',
      label: 'Direccion',
      value: 'Av. Principal 1234, Santiago, Chile',
    },
    {
      id: 'telefono',
      label: 'Telefono',
      value: '+56 2 2345 6789',
      href: 'tel:+56223456789',
    },
    {
      id: 'email',
      label: 'Correo',
      value: 'contacto@bdk.cl',
      href: 'mailto:contacto@bdk.cl',
    },
  ] satisfies ContactInfoItem[],
  images: [
    {
      src: '/foto2.jpg',
      alt: 'Equipo de contacto en obra',
    },
    {
      src: '/FONDOO.PNG',
      alt: 'Planos y supervision',
    },
  ],
}
