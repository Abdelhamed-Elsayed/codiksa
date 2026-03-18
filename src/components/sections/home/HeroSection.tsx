import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16" style={{ backgroundColor: 'transparent'  }}>
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm border"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
        >
          <span>{'</>'}</span>
          <span>Building the future of software</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
          We Build{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--brand-gradient)' }}>
            Scalable
          </span>
          <br />
          <span className='bg-clip-text text-transparent'
          style={{ backgroundImage: 'var(--brand-gradient)' }}
          >Software</span> Solutions
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          From web & mobile apps to AI-powered solutions — we partner with ambitious teams to ship products that matter.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg font-medium text-white transition-opacity duration-200 hover:opacity-90"
            style={{ background: 'var(--brand-gradient)' }}
          >
            Start a Project →
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg font-medium border transition-all duration-200"
            style={{ color: 'var(--text-primary)', borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}
