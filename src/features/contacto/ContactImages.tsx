import { contactPage } from '../../data/contact'

export const ContactImages = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {contactPage.images.map((image, index) => (
        <div
          key={image.src}
          className="overflow-hidden rounded-2xl animate-fade-up motion-reduce:animate-none"
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-48 w-full object-cover sm:h-56"
          />
        </div>
      ))}
    </div>
  )
}
