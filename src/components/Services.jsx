import { ArrowRight, Check, Droplets, Gem, Scissors, Sparkles, UserRound } from 'lucide-react'
import hairstyleImg from '../assets/hairstyle.jpg'
import makeupImg from '../assets/makeup.jpeg'
import mensImg from '../assets/mens_grooming.jpeg'
import skincareImg from '../assets/skincare.jpeg'
import { site } from '../siteConfig'
import Reveal from './Reveal'

const SERVICES = [
  {
    icon: Scissors,
    title: 'Hair Care & Styling',
    price: '₹500',
    image: hairstyleImg,
    popular: true,
    desc: 'Expert cuts, coloring, treatments, and styling for all hair types.',
    items: ['Haircuts & Trims', 'Hair Coloring', 'Keratin Treatment', 'Hair Spa'],
  },
  {
    icon: Gem,
    title: 'Bridal Services',
    price: '₹8,000',
    image: makeupImg,
    popular: true,
    desc: 'Complete bridal makeover packages for your special day.',
    items: ['Bridal Makeup', 'Mehendi', 'Saree Draping', 'Pre-bridal Package'],
  },
  {
    icon: Droplets,
    title: 'Skin Care',
    price: '₹400',
    image: skincareImg,
    popular: false,
    desc: 'Advanced facial treatments, cleanup, and skin rejuvenation.',
    items: ['Facials', 'Cleanup', 'De-tan', 'Anti-aging'],
  },
  {
    icon: UserRound,
    title: "Men's Grooming",
    price: '₹200',
    image: mensImg,
    popular: false,
    desc: 'Premium grooming services tailored for the modern man.',
    items: ['Haircut & Styling', 'Beard Grooming', 'Facial Care', 'Hair Color'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-10 lg:py-14 bg-brand-50/40 overflow-hidden">
      <div className="absolute -top-24 -left-24 size-96 rounded-full bg-brand-300/20 blur-3xl -z-0" />
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
            Transparent, upfront pricing — no surprises when you arrive. Hover a card to see what's included.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ icon: Icon, title, price, image, popular, desc, items }, i) => (
            <Reveal key={title} delay={i * 100} className="[perspective:1500px] h-96">
              <div className="group relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                {/* Front face */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:shadow-brand-900/20 transition-shadow duration-500 [backface-visibility:hidden]">
                  <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10" />

                  {popular && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-accent-400 to-accent-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md ring-1 ring-white/30">
                      Popular
                    </span>
                  )}

                  <div className="absolute top-4 left-4 size-10 rounded-xl gradient-brand flex items-center justify-center shadow-lg">
                    <Icon className="size-5 text-white" strokeWidth={2.25} />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-1.5 text-sm text-white/80 leading-relaxed">{desc}</p>
                    <p className="mt-3 text-brand-200 font-semibold">Starting at {price}</p>
                  </div>
                </div>

                {/* Back face */}
                <div className="absolute inset-0 rounded-3xl gradient-brand p-6 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-xs text-white/70">What's included</p>

                  <ul className="mt-4 space-y-2.5 flex-1">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/95">
                        <Check className="size-4 text-white/80 shrink-0" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between gap-2 pt-3 border-t border-white/20">
                    <span className="font-semibold text-white">From {price}</span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 bg-white text-brand-700 text-xs font-semibold px-3.5 py-2 rounded-full hover:scale-105 transition-transform"
                    >
                      Book Now <ArrowRight className="size-3.5" />
                    </a>
                  </div>
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
