import { motion, useReducedMotion } from 'framer-motion'
import { contactPage } from '../datosContacto'

export const ImagenesContacto = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {contactPage.images.map((image, index) => (
        <motion.div
          key={image.src}
          className="overflow-hidden rounded-2xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : index * 0.1,
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-48 w-full object-cover sm:h-56"
          />
        </motion.div>
      ))}
    </div>
  )
}
