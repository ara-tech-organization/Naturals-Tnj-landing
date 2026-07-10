import { MapPin, Navigation } from 'lucide-react'
import { site } from '../siteConfig'
import Reveal from './Reveal'

export default function LocationMap() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="relative rounded-3xl overflow-hidden border border-brand-100 shadow-xl shadow-brand-900/10">
          <div className="group absolute top-5 left-5 z-10 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg px-4 py-3 max-w-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
            <div className="size-10 rounded-xl gradient-brand flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <MapPin className="size-5 text-white" strokeWidth={2.25} />
            </div>
            <div className="text-sm">
              <div className="font-semibold text-ink leading-tight">{site.name}</div>
              <div className="text-ink-soft text-xs mt-0.5 leading-snug">{site.address}</div>
            </div>
          </div>

          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-5 right-5 z-10 inline-flex items-center gap-2 gradient-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg hover:scale-[1.03] active:scale-100 transition-transform"
          >
            <Navigation className="size-4" />
            Get Directions
          </a>

          <iframe
            title="Naturals Beauty Salon Thanjavur location"
            src={site.mapsEmbedUrl}
            className="w-full h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  )
}
