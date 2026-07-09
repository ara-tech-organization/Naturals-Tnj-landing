import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import About from './components/About'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Offer from './components/Offer'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactCTA from './components/ContactCTA'
import LocationMap from './components/LocationMap'
import Footer from './components/Footer'
import StickyMobileBar from './components/StickyMobileBar'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <HowItWorks />
        <Offer />
        <Testimonials />
        <FAQ />
        <ContactCTA />
        <LocationMap />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  )
}

export default App
