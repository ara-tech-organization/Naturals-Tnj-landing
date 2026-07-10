import { BadgeCheck, ExternalLink, Quote, Star } from 'lucide-react'
import Reveal from './Reveal'

const REVIEWS = [
  {
    name: 'Priyanka R.',
    initials: 'PR',
    text: 'My bridal makeover was flawless — the team understood exactly what I wanted and made my big day stress-free. Highly recommend for brides in Thanjavur!',
  },
  {
    name: 'Karthik S.',
    initials: 'KS',
    text: "Been coming here for haircuts and grooming for over 2 years. Consistent quality every single time, and the staff genuinely care about getting it right.",
  },
  {
    name: 'Divya M.',
    initials: 'DM',
    text: 'Booked a facial last minute and they fit me right in. Clean salon, friendly staff, and my skin has never looked better.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-10 lg:py-14 bg-brand-50/40 overflow-hidden">
      <div className="absolute top-0 right-0 size-80 rounded-full bg-accent-400/10 blur-3xl -z-0" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100/80 text-brand-700 text-xs font-semibold px-4 py-1.5 mb-5">
            <Star className="size-3.5" fill="currentColor" strokeWidth={0} />
            Client Stories
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
            Loved by Clients Across Thanjavur
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-7">
          {REVIEWS.map(({ name, initials, text }, i) => (
            <Reveal key={name} delay={i * 120}>
              <div className="group relative h-full flex flex-col rounded-3xl bg-white border border-brand-100 p-7 shadow-sm hover:shadow-xl hover:shadow-brand-900/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 gradient-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <Quote className="size-7 text-brand-200 mb-3" fill="currentColor" strokeWidth={0} />
                <div className="flex text-accent-500 mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-ink-soft leading-relaxed">{text}</p>
                <div className="mt-auto pt-6 flex items-center gap-3">
                  <div className="size-10 rounded-full gradient-brand flex items-center justify-center text-white text-sm font-semibold shrink-0">
                    {initials}
                  </div>
                  <div>
                    <div className="font-semibold text-ink text-sm">{name}</div>
                    <div className="flex items-center gap-1 text-xs text-ink-soft">
                      <BadgeCheck className="size-3.5 text-brand-500" />
                      Verified Google Review
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=naturals+beauty+salon+thanjavur+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-brand-200 text-brand-700 font-semibold px-6 py-3 shadow-sm hover:shadow-lg hover:shadow-brand-900/10 hover:ring-brand-300 transition-all"
          >
            See all our reviews on Google
            <ExternalLink className="size-4 text-accent-500 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
