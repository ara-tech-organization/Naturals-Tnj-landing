import { MessageCircle, Phone, ShieldCheck, Sparkles, Star } from 'lucide-react'
import heroImg from '../assets/hero_bgimage.jpg'
import BookingForm from './BookingForm'
import { site } from '../siteConfig'
import { scrollToId } from '../utils/scrollToId'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <img
        src={heroImg}
        alt="Naturals Beauty Salon Thanjavur — expert treatment in progress"
        className="absolute inset-0 -z-20 w-full h-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
      <div className="absolute -top-24 -right-24 size-96 rounded-full bg-brand-400/20 blur-3xl -z-10 animate-float" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 mb-6 ring-1 ring-white/25">
            <Sparkles className="size-3.5" />
            Thanjavur's Most Trusted Salon Since 2009
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight text-white">
            Look Your Best for{' '}
            <span className="text-gradient-brand bg-gradient-to-r from-brand-300 to-accent-400 bg-clip-text text-transparent">
              Every Occasion
            </span>
          </h1>

          <p className="mt-5 text-lg text-white/85 max-w-xl">
            From everyday styling to your wedding day — expert stylists, transparent pricing,
            and 15+ years of experience trusted by Thanjavur families.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('book', '/')
              }}
              className="btn-shine gradient-brand text-white font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-brand-900/40 hover:shadow-brand-900/50 hover:scale-[1.03] active:scale-100 transition-all flex items-center gap-2"
            >
              <Phone className="size-4.5" />
              Book Your Appointment
            </a>
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 backdrop-blur-sm transition-colors flex items-center gap-2"
            >
              <MessageCircle className="size-4.5" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-9 flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-1.5 text-sm font-medium text-white">
              <div className="flex text-accent-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              4.7/5 on Google
            </div>
            <div className="flex items-center gap-1.5 text-sm font-medium text-white/80">
              <ShieldCheck className="size-4 text-brand-300" />
              15+ Years in Thanjavur
            </div>
          </div>
        </div>

        <div className="animate-fade-up lg:justify-self-end w-full max-w-lg" style={{ animationDelay: '150ms' }}>
          <div className="relative">
            <div className="absolute -inset-3 gradient-brand rounded-[2rem] opacity-30 blur-xl -z-10" />
            <div
              id="book"
              className="rounded-3xl bg-white/95 backdrop-blur-xl border border-white shadow-2xl shadow-ink/30 pt-7 pb-6 px-6 scroll-mt-28"
            >
              <h2 className="text-xl font-bold text-ink text-center mb-1">Book a Consultation</h2>
              <p className="text-sm text-ink-soft text-center mb-5">
                Tell us what you're looking for and we'll get back to you within 2 hours during
                business hours.
              </p>
              <BookingForm compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
