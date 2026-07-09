import { MessageCircle, Phone } from 'lucide-react'
import { site } from '../siteConfig'

export default function StickyMobileBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 flex border-t border-white/10 shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.25)]">
      <a
        href={site.phoneLink}
        className="flex-1 flex items-center justify-center gap-2 gradient-brand text-white font-semibold py-4 text-sm"
      >
        <Phone className="size-4.5" />
        Call Now
      </a>
      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-br from-accent-400 to-accent-600 text-white font-semibold py-4 text-sm"
      >
        <MessageCircle className="size-4.5" />
        WhatsApp
      </a>
    </div>
  )
}
