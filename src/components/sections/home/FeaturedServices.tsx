import Link from 'next/link'
import type { Service } from '@/types'
import { Globe, Smartphone, Palette, Cloud, Brain } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  globe: Globe, smartphone: Smartphone, palette: Palette, cloud: Cloud, brain: Brain,
}

export default function FeaturedServices({ services }: { services: Service[] }) {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'transparent'  }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--brand-primary)' }}>What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>Our Services</h2>
          <p className="max-w-2xl text-lg" style={{ color: 'var(--text-secondary)' }}>
            We offer a comprehensive suite of services to help you build and scale your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Globe
            return (
              <div
                key={service.id}
                className="p-6 rounded-xl border flex flex-col gap-4 transition-all duration-200 hover:scale-[1.02]"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--brand-gradient)' }}>
                  <Icon size={20} color="white" />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center">
          <Link href="/services" className="text-sm font-medium transition-colors duration-200" style={{ color: 'var(--brand-primary)' }}>
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  )
}
