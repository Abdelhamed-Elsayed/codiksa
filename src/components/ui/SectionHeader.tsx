interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
}

export default function SectionHeader({ badge, title, subtitle, align = 'center' }: SectionHeaderProps) {
  return (
    <div data-align={align} className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : ''}`}>
      {badge && (
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--brand-primary)' }}>
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg" style={{ color: 'var(--text-secondary)' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
