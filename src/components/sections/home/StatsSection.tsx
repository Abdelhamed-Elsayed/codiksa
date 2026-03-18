const stats = [
  { value: '150+', label: 'Projects Shipped' },
  { value: '50+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
  { value: '99%', label: 'Client Retention' },
]

export default function StatsSection() {
  return (
    <section
      className="py-16 px-4 border-t border-b"
      style={{ backgroundColor: 'transparent' , borderColor: 'var(--border)' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2">
            <span className="text-4xl font-bold" style={{ color: 'var(--brand-primary)' }}>{stat.value}</span>
            <span className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
