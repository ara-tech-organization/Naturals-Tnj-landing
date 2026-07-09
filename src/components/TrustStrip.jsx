import { CalendarCheck, Star, Users, Award } from 'lucide-react'

const ITEMS = [
  { icon: Star, text: '4.7/5 on Google (200+ reviews)' },
  { icon: Award, text: '15+ Years in Thanjavur' },
  { icon: Users, text: '10,000+ Happy Clients' },
  { icon: CalendarCheck, text: 'Open 7 Days' },
]

export default function TrustStrip() {
  return (
    <div className="relative z-10 gradient-brand">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
        {ITEMS.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2 text-white/95 text-sm font-medium">
            <Icon className="size-4 shrink-0" strokeWidth={2.25} />
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}
