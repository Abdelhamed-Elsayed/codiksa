import { Users, Zap, Shield } from 'lucide-react'

const features = [
  { icon: Users, title: 'Expert Team', desc: 'Work with experienced developers and designers passionate about technology.' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Agile methodologies ensure quick iterations and on-time project delivery.' },
  { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security and robust architecture for peace of mind.' },
]

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-20 px-4" style={{ backgroundColor: 'transparent'  }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--brand-primary)' }}>Our Services</span>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>Solutions That Drive Growth</h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            We offer end-to-end software development services to help businesses of all sizes build, scale, and succeed in the digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--brand-gradient)' }}>
                <f.icon size={20} color="white" />
              </div>
              <div>
                <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{f.title}</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
