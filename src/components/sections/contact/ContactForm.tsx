'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  { icon: Mail, title: 'Email Us', subtitle: 'Our team will respond within 24 hours', value: 'welcome@codiksa.com' },
  { icon: Phone, title: 'Call Us', subtitle: 'Mon-Fri from 9am to 6pm', value: '+20 1111111111' },
  { icon: MapPin, title: 'Visit Us', subtitle: 'Come say hello at our office', value: 'Fifth Settlement, Cairo, Egypt' },
  { icon: Clock, title: 'Working Hours', subtitle: "We're here to help", value: 'Saturday - Thursday: 9:00 AM - 6:00 PM PST' },
]

const emptyForm = {
  firstName: '', lastName: '', email: '', company: '', subject: '', message: ''
}

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      console.log(form)
      setForm(emptyForm)
      setLoading(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 4000)
    }, 800)
  }

  const inputStyle = {
    backgroundColor: 'transparent',
    borderColor: 'var(--border)',
    color: 'var(--text-primary)',
  }

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Form */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Send Us a Message</h2>
            <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'firstName', placeholder: 'John', label: 'First Name' },
                { name: 'lastName', placeholder: 'Doe', label: 'Last Name' },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-1">
                  <label className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="px-4 py-3 rounded-lg border text-sm outline-none"
                    style={inputStyle}
                    required
                  />
                </div>
              ))}
            </div>

            {[
              { name: 'email', type: 'email', placeholder: 'john@company.com', label: 'Email Address' },
              { name: 'company', type: 'text', placeholder: 'Your company name', label: 'Company (Optional)' },
              { name: 'subject', type: 'text', placeholder: 'How can we help?', label: 'Subject' },
            ].map((field) => (
              <div key={field.name} className="flex flex-col gap-1">
                <label className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                  {field.label}
                </label>
                <input
                  name={field.name}
                  type={field.type}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="px-4 py-3 rounded-lg border text-sm outline-none"
                  style={inputStyle}
                  required={field.name !== 'company'}
                />
              </div>
            ))}

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={5}
                className="px-4 py-3 rounded-lg border text-sm outline-none resize-none"
                style={inputStyle}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-opacity duration-200 hover:opacity-90"
              style={{
                background: 'var(--brand-gradient)',
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Sending...' : 'Send Message →'}
            </button>

            {submitted && (
              <div
                className="flex items-center gap-2 text-sm font-medium px-4 py-3 rounded-lg border"
                style={{
                  backgroundColor: 'rgba(96, 165, 250, 0.08)',
                  borderColor: 'var(--brand-primary)',
                  color: 'var(--brand-primary)',
                }}
              >
                ✅ Message sent successfully! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>

        {/* Contact Info + Map */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Contact Information</h2>
            <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
              Prefer to reach out directly? Here's how you can contact us.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 p-5 rounded-xl border"
                style={{ backgroundColor: 'transparent', borderColor: 'var(--border)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'var(--brand-gradient)' }}
                >
                  <info.icon size={18} color="white" />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{info.title}</p>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{info.subtitle}</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Google Map - Fifth Settlement Cairo */}
          <div
            className="rounded-xl overflow-hidden border"
            style={{ borderColor: 'var(--border)', height: '200px' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55255.01!2d31.4!3d30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d2c2f51c0e9%3A0xac984f9e5e4278c7!2sFifth%20Settlement%2C%20Cairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}