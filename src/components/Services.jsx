import { ArrowRight, Droplets, Gem, Scissors, Sparkles, UserRound } from 'lucide-react'
import { site } from '../siteConfig'
import Reveal from './Reveal'

const SERVICES = [
  {
    icon: Scissors,
    title: 'Hair Care & Styling',
    price: '₹500',
    popular: true,
    desc: 'Expert cuts, coloring, treatments, and styling for all hair types.',
    items: ['Haircuts & Trims', 'Hair Coloring', 'Keratin Treatment', 'Hair Spa'],
  },
  {
    icon: Gem,
    title: 'Bridal Services',
    price: '₹8,000',
    popular: true,
    desc: 'Complete bridal makeover packages for your special day.',
    items: ['Bridal Makeup', 'Mehendi', 'Saree Draping', 'Pre-bridal Package'],
  },
  {
    icon: Droplets,
    title: 'Skin Care',
    price: '₹400',
    popular: false,
    desc: 'Advanced facial treatments, cleanup, and skin rejuvenation.',
    items: ['Facials', 'Cleanup', 'De-tan', 'Anti-aging'],
  },
  {
    icon: UserRound,
    title: "Men's Grooming",
    price: '₹200',
    popular: false,
    desc: 'Premium grooming services tailored for the modern man.',
    items: ['Haircut & Styling', 'Beard Grooming', 'Facial Care', 'Hair Color'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-10 lg:py-14 bg-gradient-to-br from-brand-50 via-white to-accent-50/40 overflow-hidden">
      <div className="absolute -top-24 -left-24 size-96 rounded-full bg-brand-300/20 blur-3xl -z-0" />
      <div className="absolute -bottom-24 -right-24 size-96 rounded-full bg-accent-300/20 blur-3xl -z-0" />
      <div
        className="absolute inset-0 -z-0 opacity-[0.6]"
        style={{
          backgroundImage: 'radial-gradient(var(--color-brand-300) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100/80 text-brand-700 text-xs font-semibold px-4 py-1.5 mb-5">
            <Sparkles className="size-3.5" />
            What Do We Offer
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
            Everything You Need for a Complete Beauty Transformation
          </h2>
          <p className="mt-4 text-ink-soft text-lg">
            Transparent, upfront pricing — no surprises when you arrive.
          </p>
        </Reveal>

        <div className="flex flex-col divide-y divide-brand-100 rounded-[1.75rem] bg-white border border-brand-100 shadow-sm overflow-hidden">
          {SERVICES.map(({ icon: Icon, title, price, popular, desc, items }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="group relative flex flex-col sm:flex-row sm:items-center gap-5 px-6 sm:px-8 py-6 hover:bg-brand-50/60 transition-colors duration-300">
                <span className="pointer-events-none absolute left-0 top-0 bottom-0 w-1 gradient-brand scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300" />

                <div className="size-12 rounded-xl gradient-brand flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Icon className="size-5.5 text-white" strokeWidth={2.25} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="font-semibold text-lg text-ink">{title}</h3>
                    {popular && (
                      <span className="bg-gradient-to-r from-accent-400 to-accent-600 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-ink-soft leading-relaxed">{desc}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} className="text-xs text-brand-700 bg-brand-50 border border-brand-100 rounded-full px-2.5 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between sm:flex-col sm:items-end gap-1 sm:gap-2 sm:pl-4 sm:border-l border-brand-100 shrink-0">
                  <div className="sm:text-right">
                    <p className="text-xs text-ink-soft/70">Starting at</p>
                    <p className="font-bold text-brand-700">{price}</p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-brand-700 text-xs font-semibold px-3.5 py-2 rounded-full ring-1 ring-brand-200 group-hover:gradient-brand group-hover:text-white group-hover:ring-transparent transition-all"
                  >
                    Book Now <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <a
            href={site.phoneLink}
            className="group inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-brand-200 text-brand-700 font-semibold px-6 py-3 shadow-sm hover:shadow-lg hover:shadow-brand-900/10 hover:ring-brand-300 transition-all"
          >
            View full price list &amp; call us
            <ArrowRight className="size-4 text-accent-500 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
