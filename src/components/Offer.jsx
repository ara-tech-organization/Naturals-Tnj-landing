import { ArrowRight, Star } from 'lucide-react'
import bgImg from '../assets/bg.jpg'
import Reveal from './Reveal'
import { scrollToId } from '../utils/scrollToId'

export default function Offer() {
  return (
    <section id="offer" className="relative py-14 xs:py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      <div
        className="absolute inset-0 -z-20 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="absolute inset-0 -z-10 bg-ink/70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/55" />

      <div className="relative mx-auto max-w-6xl px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8">
        <Reveal>
          <div className="grid lg:grid-cols-2 items-center gap-8 xs:gap-9 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Left — content */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 text-white text-[11px] xs:text-xs font-semibold px-3 xs:px-3.5 py-1.5 ring-1 ring-white/20">
                <Star className="size-3 xs:size-3.5 text-accent-400" fill="currentColor" strokeWidth={0} />
                New Client Special
              </span>

              <h2 className="mt-4 xs:mt-5 text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Your First Visit Deserves a Little Extra
              </h2>
              <p className="mt-3 xs:mt-4 text-sm xs:text-base text-white/80 leading-relaxed max-w-md mx-auto lg:mx-0">
                Book your first hair or facial treatment with us this month and enjoy 15% off —
                our way of welcoming you to the Naturals family.
              </p>

              <div className="mt-6 xs:mt-8 flex flex-col sm:flex-row items-center gap-3 xs:gap-4 justify-center lg:justify-start">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToId('book', '/')
                  }}
                  className="btn-shine group relative inline-flex items-center gap-2 gradient-brand text-white font-semibold px-6 xs:px-7 md:px-8 py-3 md:py-3.5 rounded-full shadow-xl shadow-black/40 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm xs:text-base"
                >
                  Claim This Offer
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="text-[11px] xs:text-xs text-white/60 tracking-wide">
                  Valid for new clients only &middot; Limited time offer
                </span>
              </div>
            </div>

            {/* Right — badge */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative size-44 xs:size-52 sm:size-56 md:size-60 lg:size-64 flex items-center justify-center animate-float">
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 size-full drop-shadow-2xl"
                  aria-hidden
                >
                  <path
                    d="M100 0 L112 22 L136 10 L140 36 L166 30 L162 56 L188 58 L176 82 L200 92 L182 110 L198 128 L174 138 L182 162 L156 164 L154 190 L130 180 L118 202 L100 184 L82 202 L70 180 L46 190 L44 164 L18 162 L26 138 L2 128 L18 110 L0 92 L24 82 L12 58 L38 56 L34 30 L60 36 L64 10 L88 22 Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeOpacity="0.85"
                  />
                </svg>
                <div className="relative flex flex-col items-center justify-center text-center">
                  <span className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold leading-none text-white">
                    15%
                  </span>
                  <span className="mt-1 text-xs xs:text-sm font-bold tracking-[0.25em] xs:tracking-[0.3em] uppercase text-white/85">
                    Off
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
