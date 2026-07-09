import { useState } from 'react'
import { AlertCircle, Calendar, Loader2 } from 'lucide-react'
import { navigate } from '../utils/navigate'

const initialState = { name: '', email: '', phone: '', city: '', date: '', message: '' }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[0-9+\-\s]{7,15}$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Name is required'
  if (!values.email.trim()) errors.email = 'Email is required'
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Enter a valid email address'
  if (!values.phone.trim()) errors.phone = 'Phone number is required'
  else if (!PHONE_RE.test(values.phone.trim())) errors.phone = 'Enter a valid phone number'
  if (!values.city.trim()) errors.city = 'City is required'
  if (!values.date) errors.date = 'Appointment date is required'
  return errors
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
          email: form.email.trim(),
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

  const inputClass = (key) =>
    `w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft/60 outline-none focus:ring-4 transition-all ${
      errors[key]
        ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
        : 'border-brand-100 focus:border-brand-400 focus:ring-brand-100'
    }`

  const FieldError = ({ field }) =>
    errors[field] ? (
      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
        <AlertCircle className="size-3.5 shrink-0" />
        {errors[field]}
      </p>
    ) : null

  return (
    <form onSubmit={handleSubmit} noValidate className={compact ? 'space-y-3' : 'space-y-4'}>
      <div>
        <input
          type="text"
          placeholder="Name *"
          value={form.name}
          onChange={update('name')}
          className={inputClass('name')}
        />
        <FieldError field="name" />
      </div>

      <div>
        <input
          type="email"
          placeholder="Email Address *"
          value={form.email}
          onChange={update('email')}
          className={inputClass('email')}
        />
        <FieldError field="email" />
      </div>

      <div>
        <input
          type="tel"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={update('phone')}
          className={inputClass('phone')}
        />
        <FieldError field="phone" />
      </div>

      <div>
        <input
          type="text"
          placeholder="City *"
          value={form.city}
          onChange={update('city')}
          className={inputClass('city')}
        />
        <FieldError field="city" />
      </div>

      <div>
        <label className="flex items-center gap-1.5 text-sm text-ink-soft mb-1.5">
          <Calendar className="size-4 text-brand-500" />
          Appointment Date *
        </label>
        <input type="date" value={form.date} onChange={update('date')} className={inputClass('date')} />
        <FieldError field="date" />
      </div>

      <textarea
        placeholder="Message"
        value={form.message}
        onChange={update('message')}
        rows={compact ? 2 : 3}
        className={`${inputClass('message')} resize-none`}
      />

      {status === 'error' && (
        <p className="flex items-center gap-1.5 text-sm text-red-500">
          <AlertCircle className="size-4 shrink-0" />
          Something went wrong sending your request. Please try again or call us directly.
        </p>
      )}

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
