import { Check, Home, Phone } from 'lucide-react'
import { site } from '../siteConfig'
import { navigate } from '../utils/navigate'

export default function ThankYou() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-brand-50/60 to-white px-5 py-20">
      <div className="max-w-md w-full text-center">
        <div className="mx-auto size-16 rounded-full gradient-brand flex items-center justify-center shadow-lg shadow-brand-600/30">
          <Check className="size-8 text-white" strokeWidth={3} />
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink">Thank You!</h1>
        <p className="mt-3 text-ink-soft leading-relaxed">
          Your appointment request has been received. Our team will reach out to confirm your
          slot within 2 hours during business hours.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              navigate('/')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 gradient-brand text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-brand-600/30 hover:shadow-brand-600/45 hover:scale-[1.03] active:scale-100 transition-all"
          >
            <Home className="size-4.5" />
            Back to Home
          </a>
          <a
            href={site.phoneLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-brand-200 text-brand-700 font-semibold px-7 py-3.5 rounded-full hover:bg-brand-50 transition-colors"
          >
            <Phone className="size-4.5" />
            Call Us Instead
          </a>
        </div>
      </div>
    </section>
  )
}
