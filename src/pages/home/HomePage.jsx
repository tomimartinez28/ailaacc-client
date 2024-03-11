import { Navbar } from '../../components/Navbar'
import { HomeSection } from './HomeSection'
import { ServicesSection } from './ServicesSection'
import { AboutSection } from './AboutSection'
import { ContactSection } from './ContactSection'
import { Footer } from '../../components/Footer'

export function HomePage () {
  return (
    <>
      <HomeSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />

    </>
  )
}
