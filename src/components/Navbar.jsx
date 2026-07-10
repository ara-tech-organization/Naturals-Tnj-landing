import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import logo from '../assets/logo.png'
import { site } from '../siteConfig'
import { scrollToId } from '../utils/scrollToId'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const id = window.location.pathname.replace('/', '')
    if (LINKS.some((link) => link.id === id)) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
      setActive(id)
    }
  }, [])

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const goToSection = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    scrollToId(id)
    setActive(id)
  }

  const goToBook = (e) => {
    e.preventDefault()
    setOpen(false)
    scrollToId('book', '/')
    setActive('')
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 gradient-brand transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-brand-900/25' : ''
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between py-2">
        <a href="#home" className="flex items-center shrink-0">
          <img src={logo} alt="Naturals Beauty Salon Thanjavur" className="h-18 w-auto object-contain" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`/${link.id}`}
              onClick={goToSection(link.id)}
              className={`relative py-1 text-sm font-medium transition-colors ${
                active === link.id ? 'text-white' : 'text-white/85 hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 w-full rounded-full bg-white transition-transform duration-300 origin-left ${
                  active === link.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <a
            href={site.phoneLink}
            className="flex items-center gap-2 text-sm font-medium text-white/85 hover:text-white transition-colors"
          >
            <Phone className="size-4" strokeWidth={2.25} />
            {site.phoneDisplay}
          </a>
          <a
            href="/"
            onClick={goToBook}
            className="bg-white text-brand-700 text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg hover:scale-[1.03] active:scale-100 transition-all"
          >
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-white"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-white/20 shadow-xl animate-fade-in">
          <div className="flex flex-col px-5 py-4 gap-1">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`/${link.id}`}
                onClick={goToSection(link.id)}
                className={`py-2.5 text-sm font-medium border-b border-brand-50 last:border-0 ${
                  active === link.id ? 'text-brand-600 font-semibold' : 'text-ink-soft hover:text-brand-600'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/"
              onClick={goToBook}
              className="mt-3 gradient-brand text-white text-sm font-semibold px-5 py-3 rounded-full text-center"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
