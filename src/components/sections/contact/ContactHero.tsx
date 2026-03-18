export default function ContactHero() {
  return (
    <section className="pt-32 pb-20 px-4 text-center" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--brand-primary)' }}>Contact Us</span>
        <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>Let's Start a Conversation</h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)', backgroundColor: 'transparent' }}>
          Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
    </section>
  )
}
