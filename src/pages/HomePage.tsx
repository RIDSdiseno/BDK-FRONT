import { HeroCarousel } from '../features/home/sections/HeroCarousel'
import { AboutSection } from '../features/home/sections/AboutSection'
import { WhyChooseUs } from '../features/home/sections/WhyChooseUs'
import { ClientsCarousel } from '../features/home/sections/ClientsCarousel'

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <WhyChooseUs />
      <ClientsCarousel />
    </div>
  )
}

export default HomePage