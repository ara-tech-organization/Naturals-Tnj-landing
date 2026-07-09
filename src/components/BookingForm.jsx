import { useState } from 'react'
import { Calendar, Check, Loader2 } from 'lucide-react'
import { site } from '../siteConfig'

const initialState = { name: '', email: '', phone: '', city: '', date: '', message: '' }

export default function BookingForm({ compact = false }) {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !form.city.trim() || !form.date) return

    setStatus('sending')

    const lines = [
      `Hi Naturals Thanjavur, I'd like to book a consultation.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `City: ${form.city}`,
      `Appointment date: ${form.date}`,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean)

    const whatsappUrl = `${site.whatsappLink}?text=${encodeURIComponent(lines.join('\n'))}`

    window.setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
      setStatus('sent')
    }, 500)
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center text-center gap-3 py-10 px-6">
        <div className="size-14 rounded-full gradient-brand flex items-center justify-center">
          <Check className="size-7 text-white" strokeWidth={3} />
        </div>
        <h3 className="text-xl font-semibold text-ink">Request sent!</h3>
        <p className="text-ink-soft text-sm max-w-xs">
          We've opened WhatsApp with your details — just hit send and our team will confirm your slot shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState)
            setStatus('idle')
          }}
          className="text-brand-600 text-sm font-medium mt-1 hover:underline"
        >
          Book another appointment
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-xl border border-brand-100 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft/60 outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100 transition-all'

  if (!compact) {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          type="text"
          placeholder="Name *"
          value={form.name}
          onChange={update('name')}
          className={inputClass}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={update('email')}
          className={inputClass}
        />

        <input
          required
          type="tel"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={update('phone')}
          className={inputClass}
        />

        <input
          required
          type="text"
          placeholder="City *"
          value={form.city}
          onChange={update('city')}
          className={inputClass}
        />

        <div>
          <label className="flex items-center gap-1.5 text-sm text-ink-soft mb-1.5">
            <Calendar className="size-4 text-brand-500" />
            Appointment Date *
          </label>
          <input required type="date" value={form.date} onChange={update('date')} className={inputClass} />
        </div>

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={update('message')}
          rows={3}
          className={`${inputClass} resize-none`}
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full gradient-brand text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-brand-600/30 hover:shadow-brand-600/45 hover:scale-[1.01] active:scale-100 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {status === 'sending' ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending...
            </>
          ) : (
            'Submit'
          )}
        </button>
        <p className="text-xs text-ink-soft text-center">We'll get back to you within 2 hours during business hours</p>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        required
        type="text"
        placeholder="Name *"
        value={form.name}
        onChange={update('name')}
        className={inputClass}
      />

      <input
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={update('email')}
        className={inputClass}
      />

      <input
        required
        type="tel"
        placeholder="Phone Number *"
        value={form.phone}
        onChange={update('phone')}
        className={inputClass}
      />

      <input
        required
        type="text"
        placeholder="City *"
        value={form.city}
        onChange={update('city')}
        className={inputClass}
      />

      <div>
        <label className="flex items-center gap-1.5 text-sm text-ink-soft mb-1.5">
          <Calendar className="size-4 text-brand-500" />
          Appointment Date *
        </label>
        <input required type="date" value={form.date} onChange={update('date')} className={inputClass} />
      </div>

      <textarea
        placeholder="Message"
        value={form.message}
        onChange={update('message')}
        rows={2}
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full gradient-brand text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-brand-600/30 hover:shadow-brand-600/45 hover:scale-[1.01] active:scale-100 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending...
          </>
        ) : (
          'Submit'
        )}
      </button>
      <p className="text-xs text-ink-soft text-center">We'll get back to you within 2 hours during business hours</p>
    </form>
  )
}
