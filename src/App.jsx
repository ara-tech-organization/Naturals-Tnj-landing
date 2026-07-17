import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import About from './components/About'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactCTA from './components/ContactCTA'
import LocationMap from './components/LocationMap'
import Footer from './components/Footer'
import StickyMobileBar from './components/StickyMobileBar'
import ThankYou from './components/ThankYou'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsConditions from './components/TermsConditions'
import { currentRoute } from './utils/navigate'

function App() {
  const [path, setPath] = useState(currentRoute())

  useEffect(() => {
    const onPopState = () => setPath(currentRoute())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  if (path === '/thank-you') {
    return <ThankYou />
  }

  if (path === '/privacy-policy') {
    return <PrivacyPolicy />
  }

  if (path === '/terms-conditions') {
    return <TermsConditions />
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <HowItWorks />
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
