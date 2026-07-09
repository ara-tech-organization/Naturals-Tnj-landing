import { Camera, Mail, MapPin, Phone, Users } from 'lucide-react'
import logo from '../assets/logo.png'
import { site } from '../siteConfig'

const QUICK_LINKS = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#offer', label: 'Offers' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
]

const SERVICES = [
  'Hair Care & Styling',
  'Bridal Packages',
  "Men's Grooming",
  'Skin & Facial',
  'Makeup',
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 pb-24 lg:pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-10 grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt={site.name} className="h-10 w-auto object-contain" />
            <span className="font-semibold text-lg text-white">
              Naturals <span className="text-brand-300">Thanjavur</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Thanjavur's trusted salon since 2009 — hair, bridal &amp; grooming experts serving
            10,000+ happy clients.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors"
            >
              <Camera className="size-4" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors"
            >
              <Users className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s}>
                <a href="#services" className="hover:text-white transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Find Us</h3>
          <ul className="space-y-3 text-sm mb-5">
            <li className="flex gap-2.5">
              <MapPin className="size-4.5 text-brand-300 shrink-0 mt-0.5" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="size-4.5 text-brand-300 shrink-0 mt-0.5" />
              <a href={site.phoneLink} className="hover:text-white transition-colors">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="size-4.5 text-brand-300 shrink-0 mt-0.5" />
              <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-5 lg:px-8">
        <p className="text-center text-xs text-white/50">
          © {new Date().getFullYear()} {site.name} Thanjavur. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
