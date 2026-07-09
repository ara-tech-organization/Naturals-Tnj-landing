import { Award, Gem, HeartHandshake, Rocket, ShieldCheck, Sparkles, Sprout, Users } from 'lucide-react'
import aboutImg from '../assets/about.jpg'
import Reveal from './Reveal'

const STATS = [
  { icon: Users, value: '10,000+', label: 'Happy Customers' },
  { icon: Award, value: '3+', label: 'Years of Experience' },
  { icon: HeartHandshake, value: '1,000+', label: 'Bridal Makeovers' },
]

const MILESTONES = [
  {
    year: '2009',
    icon: Sprout,
    title: 'Where It Began',
    text: 'Opened our first chair in Thanjavur with one promise — honest, expert care.',
  },
  {
    year: '2015',
    icon: Rocket,
    title: 'Growing Fast',
    text: 'Expanded into bridal, skin & grooming as word of mouth spread across the city.',
  },
  {
    year: '2020',
    icon: Users,
    title: '10,000+ Clients',
    text: 'Crossed ten thousand happy customers who trusted us with their look.',
  },
  {
    year: 'Today',
    icon: Gem,
    title: '3+ Years Strong',
    text: "Still Thanjavur's most trusted name in beauty, styling & grooming.",
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-14 lg:py-20 bg-gradient-to-b from-brand-50/60 to-white overflow-hidden">
      <div className="absolute -top-20 right-0 size-72 rounded-full bg-accent-400/10 blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 size-64 rounded-full bg-brand-300/10 blur-3xl -z-0" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Intro: text left, motion image right */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <Reveal className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100/80 text-brand-700 text-xs font-semibold px-4 py-1.5">
              <Sparkles className="size-3.5" />
              Why Thanjavur Chooses Naturals
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-ink leading-tight">
              3 Years of Trust, <span className="text-gradient-brand">One Salon at a Time</span>
            </h2>
            <span className="block w-14 h-1.5 rounded-full gradient-brand mt-4" />
            <p className="mt-5 text-ink-soft text-lg leading-relaxed max-w-lg">
              Since 2009, we've helped thousands of clients in Thanjavur look and feel their best —
              from everyday haircuts to once-in-a-lifetime bridal transformations. Every stylist on
              our team is certified and trained in the latest techniques, and every treatment uses
              premium, salon-grade products.
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-6 relative flex justify-center lg:justify-end">
            {/* orbiting/floating decorative rings */}
            <div className="absolute -top-6 -right-4 size-24 rounded-full border-2 border-dashed border-brand-300/50 animate-spin-slow -z-0" />
            <div className="absolute -bottom-8 -left-4 size-16 rounded-full bg-accent-400/15 blur-xl animate-float -z-0" />

            <div className="relative animate-sway">
              <div className="absolute -inset-4 gradient-brand rounded-[2.5rem] opacity-20 blur-2xl -z-10" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-900/20 ring-4 ring-white w-80 sm:w-[26rem] h-[22.5rem] sm:h-[25rem]">
                <img
                  src={aboutImg}
                  alt="Stylist at Naturals Beauty Salon Thanjavur"
                  className="w-full h-full object-cover animate-breathe"
                />
              </div>

              <div className="absolute -bottom-5 -left-6 sm:-left-10 bg-white rounded-2xl shadow-xl shadow-brand-900/15 ring-1 ring-brand-100 px-5 py-4 flex items-center gap-3 animate-float">
                <div className="size-11 rounded-xl gradient-brand flex items-center justify-center shrink-0">
                  <ShieldCheck className="size-5 text-white" strokeWidth={2.25} />
                </div>
                <div>
                  <div className="font-bold text-ink leading-none">3+ Years</div>
                  <div className="text-xs text-ink-soft mt-1">Trusted in Thanjavur</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Milestones */}
        <div className="mt-20 lg:mt-24">
          <Reveal className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100/80 text-brand-700 text-xs font-semibold px-4 py-1.5">
              <Rocket className="size-3.5" />
              Our Journey
            </span>
            <h3 className="mt-4 text-2xl lg:text-3xl font-bold tracking-tight text-ink">
              From One Chair to <span className="text-gradient-brand">Thanjavur's Favorite</span>
            </h3>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MILESTONES.map(({ year, icon: Icon, title, text }, i) => (
              <Reveal key={year} delay={i * 120}>
                <div className="group relative h-full rounded-[1.75rem] bg-white border border-brand-100 px-6 py-7 shadow-sm hover:shadow-xl hover:shadow-brand-900/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <span className="pointer-events-none absolute -right-3 -top-5 text-7xl font-extrabold text-brand-50 select-none leading-none">
                    {i + 1}
                  </span>
                  <div className="relative size-12 rounded-xl gradient-brand flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="size-5.5 text-white" strokeWidth={2.25} />
                  </div>
                  <span className="relative mt-5 block text-xs font-bold tracking-[0.2em] uppercase text-accent-600">
                    {year}
                  </span>
                  <h4 className="relative mt-1.5 font-semibold text-ink">{title}</h4>
                  <p className="relative mt-2 text-sm text-ink-soft leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-5">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <Reveal
              key={label}
              delay={300 + i * 100}
              className="group relative rounded-2xl sm:rounded-[1.75rem] gradient-brand p-4 sm:p-6 text-center overflow-hidden shadow-lg shadow-brand-900/15 hover:-translate-y-1 transition-transform duration-300"
            >
              <Icon className="absolute -right-3 -bottom-3 size-16 text-white/10" strokeWidth={1.5} />
              <Icon className="relative mx-auto size-6 text-white/90" strokeWidth={2.25} />
              <div className="relative mt-2 text-xl sm:text-3xl font-bold text-white">{value}</div>
              <div className="relative mt-1 text-[11px] sm:text-xs text-white/80 leading-tight">{label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
