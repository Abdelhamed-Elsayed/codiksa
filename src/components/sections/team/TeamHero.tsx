export default function TeamHero() {
  return (
    <section className="pt-32 pb-20 px-4 text-center" style={{ backgroundColor: 'transparent'  }}>
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--brand-primary)' }}>Our Team</span>
        <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>Meet the Experts</h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Our diverse team of talented professionals brings together expertise from leading tech companies and a shared passion for innovation.
        </p>
      </div>
    </section>
  )
}
