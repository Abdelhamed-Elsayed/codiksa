import { Target, Eye } from 'lucide-react'

const items = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To empower businesses with innovative software solutions that drive growth, improve efficiency, and create lasting value. We believe in building technology that serves people, not the other way around.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be the most trusted partner for businesses seeking digital transformation. We envision a world where every organization, regardless of size, has access to world-class software solutions.',
  },
]

export default function MissionVision() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'transparent'  }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div key={item.title} className="p-8 rounded-2xl border flex flex-col gap-4" style={{ backgroundColor: 'transparent' , borderColor: 'var(--border)' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--brand-gradient)' }}>
              <item.icon size={24} color="white" />
            </div>
            <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
