import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react'
import logo from '../assets/logo.png'
import { site } from '../siteConfig'
import { navigate } from '../utils/navigate'
import Footer from './Footer'

export default function LegalPage({ title, effectiveDate, sections }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50/60 to-white">
      <header className="border-b border-brand-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 py-4 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              navigate('/')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2"
          >
            <img src={logo} alt={site.name} className="h-10 w-auto object-contain" />
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              navigate('/')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 lg:px-8 py-12 lg:py-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-100/80 text-brand-700 text-xs font-semibold px-4 py-1.5 mb-5">
          Legal
        </span>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">{title}</h1>
        <p className="mt-2 text-sm text-ink-soft">Effective Date: {effectiveDate}</p>
        <span className="block w-14 h-1.5 rounded-full gradient-brand mt-5" />

        <div className="mt-10 space-y-9">
          {sections.map(({ heading, intro, items }, i) => (
            <section key={i}>
              {heading && <h2 className="text-xl font-semibold text-ink">{heading}</h2>}
              {intro && <p className={`${heading ? 'mt-2.5' : ''} text-ink-soft leading-relaxed`}>{intro}</p>}
              {items && (
                <ul className="mt-3 space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-ink-soft leading-relaxed">
                      <span className="mt-2 size-1.5 rounded-full bg-brand-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-[1.75rem] bg-white border border-brand-100 shadow-sm p-6 lg:p-8">
          <h2 className="text-xl font-semibold text-ink">Contact Us</h2>
          <p className="mt-1 font-semibold text-brand-700">{site.name} {site.location}</p>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            <li className="flex gap-2.5">
              <MapPin className="size-4.5 text-brand-500 shrink-0 mt-0.5" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="size-4.5 text-brand-500 shrink-0 mt-0.5" />
              <a href={site.phoneLink} className="hover:text-brand-700 transition-colors">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="size-4.5 text-brand-500 shrink-0 mt-0.5" />
              <a href={`mailto:${site.email}`} className="hover:text-brand-700 transition-colors">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  )
}
