import { Mail, MapPin, Phone } from 'lucide-react'
import logo from '../assets/logo.png'
import { site } from '../siteConfig'

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.256 1.216.6 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.048 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.048-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.247 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2Zm0 1.802c-2.67 0-2.987.01-4.04.059-.976.045-1.505.207-1.858.344-.467.181-.8.398-1.15.748-.35.35-.567.683-.748 1.15-.137.353-.3.882-.344 1.857-.05 1.054-.06 1.37-.06 4.04s.01 2.987.06 4.04c.045.976.207 1.505.344 1.858.181.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.049 1.37.06 4.041.06s2.987-.011 4.04-.06c.976-.045 1.505-.207 1.858-.344.467-.182.8-.399 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.858.05-1.053.06-1.37.06-4.04s-.011-2.986-.06-4.04c-.045-.975-.207-1.504-.344-1.857a3.1 3.1 0 0 0-.748-1.15 3.1 3.1 0 0 0-1.15-.748c-.353-.137-.882-.3-1.858-.344-1.053-.05-1.37-.06-4.04-.06Zm0 3.064a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-1.982a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.183 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.196 2.238.196v2.475h-1.26c-1.243 0-1.63.775-1.63 1.57v1.89h2.773l-.443 2.91h-2.33V22c4.78-.757 8.437-4.92 8.437-9.94Z" />
    </svg>
  )
}

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
            <img src={logo} alt={site.name} className="h-16 w-auto object-contain" />
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
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors"
            >
              <FacebookIcon className="size-4" />
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
