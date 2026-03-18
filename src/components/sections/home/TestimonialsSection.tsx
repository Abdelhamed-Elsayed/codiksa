const testimonials = [
  {
    id: 1,
    quote: 'Codiksa transformed our outdated systems into a modern, scalable platform. Their expertise and dedication exceeded our expectations.',
    name: 'Sarah Chen',
    role: 'CTO, TechVentures Inc.',
    avatar: '/images/testimonials/sara.jpg',
  },
  {
    id: 2,
    quote: 'The team delivered our mobile app on time and within budget. The quality of their work and communication was exceptional throughout.',
    name: 'Michael Torres',
    role: 'Founder, HealthSync',
    avatar: '/images/testimonials/michael.jpg',
  },
  {
    id: 3,
    quote: 'Working with Codiksa was a game-changer for our startup. They understood our vision and brought it to life with incredible precision.',
    name: 'Emily Watson',
    role: 'CEO, GreenCommerce',
    avatar: '/images/testimonials/emily.jpg',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'transparent'  }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--brand-primary)' }}>Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-xl border flex flex-col gap-4"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <span className="text-4xl font-serif leading-none" style={{ color: 'var(--brand-primary)' }}>"</span>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>{t.quote}</p>
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
                <div
                  className="w-10 h-10 rounded-full overflow-hidden bg-center bg-cover shrink-0"
                  style={{ backgroundImage: `url(${t.avatar})`, backgroundColor: 'var(--bg-card-hover)' }}
                />
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
