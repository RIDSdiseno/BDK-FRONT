import { motion, useReducedMotion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { contactPage } from '../datosContacto'

const iconMap = {
  direccion: MapPin,
  telefono: Phone,
  email: Mail,
}

export const InfoContacto = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
    >
      <h3 className="text-lg font-heading text-bdk-navy">
        {contactPage.infoTitle}
      </h3>
      <div className="space-y-4">
        {contactPage.info.map((item) => {
          const Icon = iconMap[item.id as keyof typeof iconMap] ?? MapPin
          return (
            <div key={item.id} className="flex items-start gap-3">
              <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-bdk-orange/10 text-bdk-orange">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-slate-700 hover:text-bdk-orange"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-slate-700">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
