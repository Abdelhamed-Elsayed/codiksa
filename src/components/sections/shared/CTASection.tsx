import Link from 'next/link'

interface CTASectionProps {
  title: string
  subtitle: string
  primaryBtn: { label: string; href: string }
  secondaryBtn?: { label: string; href: string }
}

export default function CTASection({ title, subtitle, primaryBtn, secondaryBtn }: CTASectionProps) {
  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Glow Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.12) 0%, rgba(99, 102, 241, 0.08) 40%, transparent 70%)',
        }}
      />

      {/* Border Top & Bottom */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent)' }}
      />

      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 relative z-10">
        <h2
          className="text-3xl sm:text-4xl font-bold"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h2>
        <p
          className="text-lg"
          style={{ color: 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryBtn.href}
            className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: 'var(--brand-gradient)' }}
          >
            {primaryBtn.label} →
          </Link>
          {secondaryBtn && (
            <Link
              href={secondaryBtn.href}
              className="px-6 py-3 rounded-lg font-medium border transition-all duration-200 hover:scale-105"
              style={{
                color: 'var(--text-primary)',
                borderColor: 'var(--border)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              {secondaryBtn.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}