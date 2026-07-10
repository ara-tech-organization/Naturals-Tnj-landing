import { Fragment } from 'react'
import { ArrowRight, CalendarCheck2, Sparkle, Wand2 } from 'lucide-react'
import Reveal from './Reveal'

const STEPS = [
  {
    number: '01',
    icon: CalendarCheck2,
    title: 'Book Online',
    desc: 'Fill out the consultation form with your preferred date and we\'ll confirm your slot.',
  },
  {
    number: '02',
    icon: Wand2,
    title: 'Visit Our Salon',
    desc: 'Walk into our premium Thanjavur salon and get a personalised consultation with our experts.',
  },
  {
    number: '03',
    icon: Sparkle,
    title: 'Get Transformed',
    desc: 'Enjoy world-class beauty services and leave looking and feeling your absolute best.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-10 lg:py-14 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100/80 text-brand-700 text-xs font-semibold px-4 py-1.5 mb-4">
            <Wand2 className="size-3.5" />
            How It Works
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
            Book Your Appointment in <span className="text-gradient-brand">3 Simple Steps</span>
          </h2>
          <span className="block w-14 h-1.5 rounded-full gradient-brand mt-3 mx-auto" />
        </Reveal>

        <div className="flex flex-col sm:flex-row items-stretch gap-4">
          {STEPS.map(({ number, icon: Icon, title, desc }, i) => (
            <Fragment key={title}>
              <Reveal delay={i * 120} className="flex-1">
                <div className="group relative h-full rounded-2xl bg-white border border-brand-100 shadow-sm hover:shadow-lg hover:shadow-brand-900/5 hover:-translate-y-1 transition-all duration-300 pt-8 pb-7 px-6 text-center">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 size-8 rounded-full gradient-brand text-white text-sm font-bold flex items-center justify-center shadow-md shadow-brand-900/20 transition-transform duration-300 group-hover:scale-110">
                    {number.replace('0', '')}
                  </span>

                  <div className="mx-auto mt-3 size-14 rounded-2xl bg-brand-50 flex items-center justify-center transition-colors duration-300 group-hover:bg-brand-100">
                    <Icon className="size-6 text-brand-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" strokeWidth={2} />
                  </div>

                  <h3 className="mt-5 font-semibold text-lg text-ink">{title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{desc}</p>
                </div>
              </Reveal>

              {i < STEPS.length - 1 && (
                <div className="hidden sm:flex items-center justify-center shrink-0">
                  <ArrowRight className="size-5 text-brand-300" strokeWidth={2.5} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
