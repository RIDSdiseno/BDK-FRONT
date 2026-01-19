import { HeroCarousel } from '../features/home/sections/HeroCarousel'
import { AboutSection } from '../features/home/sections/AboutSection'
import { WhyChooseUs } from '../features/home/sections/WhyChooseUs'
import { ClientsMarquee } from '../features/home/sections/ClientsMarquee'

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <WhyChooseUs />
      <ClientsMarquee />
    </div>
  )
}

export default HomePage
