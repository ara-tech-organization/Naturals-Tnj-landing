import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { site } from '../siteConfig'
import Reveal from './Reveal'
import { scrollToId } from '../utils/scrollToId'

const CARDS = [
  {
    icon: Phone,
    title: 'Call Us',
    detail: site.phoneDisplay,
    href: site.phoneLink,
    bg: 'gradient-brand',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: 'Chat with us instantly',
    href: site.whatsappLink,
    bg: 'bg-gradient-to-br from-accent-400 to-accent-600',
  },
  {
    icon: Mail,
    title: 'Email',
    detail: site.email,
    href: `mailto:${site.email}`,
    bg: 'bg-accent-500',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: site.address,
    href: site.mapsLink,
    bg: 'bg-ink',
  },
]

export default function ContactCTA() {
  return (
    <section id="contact" className="py-10 lg:py-14 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100/80 text-brand-700 text-xs font-semibold px-4 py-1.5 mb-4">
            <Phone className="size-3.5" />
            Contact Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">Get in Touch</h2>
          <span className="block w-14 h-1.5 rounded-full gradient-brand mt-3 mb-2 mx-auto" />
          <p className="mt-3 text-ink-soft text-lg flex items-center justify-center gap-2">
            <Clock className="size-4.5 text-brand-500" />
            {site.hours}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map(({ icon: Icon, title, detail, href, bg }, i) => (
            <Reveal key={title} delay={i * 100}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group h-full flex flex-col items-center text-center gap-3 rounded-2xl bg-white border border-brand-100 px-5 py-8 shadow-sm hover:shadow-xl hover:shadow-brand-900/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`size-12 rounded-xl ${bg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                >
                  <Icon className="size-5.5 text-white" strokeWidth={2.25} />
                </div>
                <div className="font-semibold text-ink">{title}</div>
                <div className="text-sm text-ink-soft leading-snug">{detail}</div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-10">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('book', '/')
            }}
            className="btn-shine relative inline-flex items-center gap-2 gradient-brand text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-brand-600/30 hover:shadow-brand-600/45 hover:scale-[1.03] active:scale-100 transition-all"
          >
            Book Your Appointment
          </a>
        </Reveal>
      </div>
    </section>
  )
}
