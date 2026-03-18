export default function ProjectsHero() {
  return (
    <section className="pt-32 pb-20 px-4 text-center" style={{ backgroundColor: 'transparent'  }}>
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--brand-primary)' }}>Portfolio</span>
        <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>Our Work Speaks for Itself</h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Explore our portfolio of successful projects delivered for clients across industries. Each project showcases our commitment to quality and innovation.
        </p>
      </div>
    </section>
  )
}
