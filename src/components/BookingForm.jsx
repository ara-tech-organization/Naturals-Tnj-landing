import { useState } from 'react'
import { AlertCircle, Calendar, Loader2, MapPin, MessageSquare, Phone, Send, ShieldCheck, User } from 'lucide-react'
import { navigate } from '../utils/navigate'

const initialState = { name: '', phone: '', city: '', date: '', message: '' }

const PHONE_RE = /^[0-9+\-\s]{7,15}$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Name is required'
  if (!values.phone.trim()) errors.phone = 'Phone number is required'
  else if (!PHONE_RE.test(values.phone.trim())) errors.phone = 'Enter a valid phone number'
  if (!values.city.trim()) errors.city = 'City is required'
  if (!values.date) errors.date = 'Appointment date is required'
  return errors
}

function Field({ icon: Icon, label, error, alignTop = false, children }) {
  return (
    <div>
      <div
        className={`flex gap-2.5 rounded-2xl border bg-white px-3.5 py-2.5 transition-all ${
          alignTop ? 'items-start' : 'items-center'
        } ${
          error
            ? 'border-red-300 ring-4 ring-red-50'
            : 'border-brand-100 focus-within:border-brand-400 focus-within:ring-4 focus-within:ring-brand-100'
        }`}
      >
        <div className={`size-8 rounded-full bg-brand-50 flex items-center justify-center shrink-0 ${alignTop ? 'mt-0.5' : ''}`}>
          <Icon className="size-4 text-brand-500" strokeWidth={2.25} />
        </div>
        <div className="flex-1 min-w-0">
          <label className="block text-sm font-semibold text-ink">{label}</label>
          {children}
        </div>
      </div>
      {error && (
        <p className="mt-1.5 ml-1 flex items-center gap-1 text-xs text-red-500">
          <AlertCircle className="size-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

export default function BookingForm({ compact = false }) {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((errs) => ({ ...errs, [key]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('sending')

    try {
      const res = await fetch('https://naturalsthanjavur.com/api/email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          city: form.city.trim(),
          date: form.date,
          message: form.message.trim(),
          source: compact ? 'Hero Booking Form' : 'Booking Form',
        }),
      })

      const result = await res.json()
      if (!res.ok || !result.success) throw new Error(result.message || 'Request failed')

      navigate('/thank-you')
    } catch {
      setStatus('error')
      return
    }

    setStatus('idle')
  }

  const fieldInputClass = 'w-full bg-transparent outline-none border-0 p-0 text-sm text-ink placeholder:text-ink-soft/50'

  return (
    <form onSubmit={handleSubmit} noValidate className={compact ? 'space-y-2.5' : 'space-y-3.5'}>
      <Field icon={User} label="Name *" error={errors.name}>
        <input
          type="text"
          placeholder="Enter your full name"
          value={form.name}
          onChange={update('name')}
          className={fieldInputClass}
        />
      </Field>

      <Field icon={Phone} label="Phone Number *" error={errors.phone}>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={form.phone}
          onChange={update('phone')}
          className={fieldInputClass}
        />
      </Field>

      <Field icon={MapPin} label="City *" error={errors.city}>
        <input
          type="text"
          placeholder="Enter your city"
          value={form.city}
          onChange={update('city')}
          className={fieldInputClass}
        />
      </Field>

      <Field icon={Calendar} label="Appointment Date *" error={errors.date}>
        <input type="date" value={form.date} onChange={update('date')} className={fieldInputClass} />
      </Field>

      <Field icon={MessageSquare} label="Message" alignTop>
        <textarea
          placeholder="How can we help you?"
          value={form.message}
          onChange={update('message')}
          rows={compact ? 2 : 3}
          className={`${fieldInputClass} resize-none`}
        />
      </Field>

      {status === 'error' && (
        <p className="flex items-center gap-1.5 text-sm text-red-500">
          <AlertCircle className="size-4 shrink-0" />
          Something went wrong sending your request. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full gradient-brand text-white font-semibold py-3 rounded-2xl shadow-lg shadow-brand-600/30 hover:shadow-brand-600/45 hover:scale-[1.01] active:scale-100 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="size-4" strokeWidth={2.25} />
            Submit
          </>
        )}
      </button>
      <p className="flex items-center justify-center gap-1.5 text-xs text-ink-soft text-center">
        <ShieldCheck className="size-3.5 text-brand-400 shrink-0" />
        We'll get back to you within 2 hours during business hours
      </p>
    </form>
  )
}
