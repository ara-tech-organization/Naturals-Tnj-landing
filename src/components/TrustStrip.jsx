import { CalendarCheck, Star, Users, Award } from 'lucide-react'

const ITEMS = [
  { icon: Star, text: '4.7/5 on Google (200+ reviews)' },
  { icon: Award, text: '3+ Years in Thanjavur' },
  { icon: Users, text: '10,000+ Happy Clients' },
  { icon: CalendarCheck, text: 'Open 7 Days' },
]

export default function TrustStrip() {
  return (
    <div className="relative z-10 gradient-brand">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-3.5 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap place-items-center lg:justify-center gap-x-10 gap-y-3">
        {ITEMS.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="group flex items-center gap-2 text-white/95 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Icon className="size-4 shrink-0 transition-transform duration-300 group-hover:scale-125" strokeWidth={2.25} />
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}
