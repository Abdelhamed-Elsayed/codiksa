export default function TechnologiesHero() {
  return (
    <section className="pt-32 pb-20 px-4 text-center" style={{ backgroundColor: 'transparent'  }}>
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--brand-primary)' }}>Technologies</span>
        <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>Built With Modern Tech</h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          We leverage the latest technologies and best practices to deliver high-performance, scalable solutions that stand the test of time.
        </p>
      </div>
    </section>
  )
}
