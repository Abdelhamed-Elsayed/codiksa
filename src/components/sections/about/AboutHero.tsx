export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 px-4 text-center" style={{ backgroundColor: 'transparent'  }}>
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--brand-primary)' }}>About Us</span>
        <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>Building the Future of Software</h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Since 2015, Codiksa has been at the forefront of software innovation, helping businesses transform their ideas into powerful digital solutions.
        </p>
      </div>
    </section>
  )
}
