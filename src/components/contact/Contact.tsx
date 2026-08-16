import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    setSuccess(false)
    setError('')

    try {
      const { error: supabaseError } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim() || null,
            company: formData.company.trim() || null,
            message: formData.message.trim(),
          },
        ])

      if (supabaseError) {
        throw supabaseError
      }

      setSuccess(true)

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      })
    } catch (err) {
      console.error('Contact form error:', err)

      setError(
        'Unable to send your message right now. Please try again later.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block mb-2">
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-lg border px-4 py-3"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-lg border px-4 py-3"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block mb-2">
          Phone
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-3"
          placeholder="+91 98765 43210"
        />
      </div>

      <div>
        <label htmlFor="company" className="block mb-2">
          Company
        </label>

        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-3"
          placeholder="Company name"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-lg border px-4 py-3"
          placeholder="Tell us about your project..."
        />
      </div>

      {success && (
        <div className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-600">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-600">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg px-6 py-3 font-medium disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
