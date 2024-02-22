import './App.css'
import { Navbar } from './components/Navbar'
import { ServicesSection } from './components/ServicesSection'
import { HomeSection } from './components/HomeSection'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

function App () {
  return (
    <>
      <Navbar />
      <HomeSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />

    </>
  )
}

export default App
