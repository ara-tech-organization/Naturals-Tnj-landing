import { useState } from 'react'
import { HelpCircle, Minus, Plus, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const FAQS = [
  {
    q: 'Do I need to book in advance, or can I walk in?',
    a: 'Walk-ins are welcome, but we recommend booking ahead — especially on weekends — so we can guarantee your preferred stylist and time slot.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, all major debit/credit cards, and UPI payments (GPay, PhonePe, Paytm).',
  },
  {
    q: 'Do you offer bridal packages?',
    a: 'Yes — our bridal packages include hair, makeup, skin prep and draping. Packages start at ₹8,000 and are fully customisable.',
  },
  {
    q: 'How far in advance should I book a bridal package?',
    a: "We recommend booking your bridal package at least 4-6 weeks ahead, especially during wedding season, so we can plan trials and hold your date.",
  },
  {
    q: 'Do you offer home service?',
    a: "Currently all our services, including bridal packages, are offered in-salon only — this lets us use our full range of equipment and products.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative py-10 lg:py-14 bg-gradient-to-b from-brand-50/50 via-white to-brand-50/40 overflow-hidden">
      <div className="absolute top-10 left-0 size-72 rounded-full bg-brand-300/15 blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 size-72 rounded-full bg-accent-400/15 blur-3xl -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-56 rounded-full bg-brand-200/15 blur-3xl -z-0" />
      <Sparkles className="absolute top-8 right-8 size-6 text-brand-300/40 animate-float -z-0" strokeWidth={1.5} />
      <HelpCircle className="absolute bottom-10 left-8 size-8 text-accent-300/30 animate-float -z-0" strokeWidth={1.5} />
      <svg
        className="absolute -top-1 left-0 w-full text-brand-100/60 -z-0"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,32 L1440,0 L0,0 Z" />
      </svg>
      <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal className="text-center mb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100/80 text-brand-700 text-xs font-semibold px-4 py-1.5 mb-5">
            <HelpCircle className="size-3.5" />
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
            Frequently Asked <span className="text-gradient-brand">Questions</span>
          </h2>
          <span className="block w-14 h-1.5 rounded-full gradient-brand mt-3 mx-auto" />
        </Reveal>

        <Reveal className="divide-y divide-brand-100 rounded-2xl bg-white ring-1 ring-brand-100/60 shadow-sm">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = openIndex === i
            return (
              <div key={q} className="px-5 sm:px-7">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-4 py-5 text-left"
                >
                  <span
                    className={`text-sm font-bold tabular-nums shrink-0 transition-colors duration-300 ${
                      isOpen ? 'text-brand-600' : 'text-brand-200'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`flex-1 font-medium transition-colors duration-300 ${isOpen ? 'text-brand-700' : 'text-ink'}`}>
                    {q}
                  </span>
                  <span
                    className={`size-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isOpen ? 'gradient-brand text-white' : 'bg-brand-50 text-brand-500'
                    }`}
                  >
                    {isOpen ? <Minus className="size-3.5" strokeWidth={2.5} /> : <Plus className="size-3.5" strokeWidth={2.5} />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pl-9 sm:pl-10 pr-8 pb-5 text-ink-soft leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
      <svg
        className="absolute -bottom-1 left-0 w-full text-brand-100/60 -z-0 rotate-180"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,32 L1440,0 L0,0 Z" />
      </svg>
    </section>
  )
}
