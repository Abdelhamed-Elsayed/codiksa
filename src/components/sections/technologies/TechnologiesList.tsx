import Image from 'next/image'
import type { TechnologyCategory } from '@/types'
import { Monitor, Server, Database, Cloud } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  monitor: Monitor, server: Server, database: Database, cloud: Cloud,
}

export default function TechnologiesList({ categories }: { categories: TechnologyCategory[] }) {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'transparent'  }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {categories.map((category) => {
          const Icon = iconMap[category.icon] ?? Monitor
          return (
            <div key={category.id} className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--brand-gradient)' }}>
                  <Icon size={20} color="white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{category.name}</h2>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{category.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.id}
                    className="p-5 rounded-xl border flex flex-col gap-3 transition-all duration-200 hover:scale-[1.02]"
                    style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 relative shrink-0">
                        <Image src={tech.icon} alt={tech.name} fill sizes='(max-width: 768px) 100vw,50vw' loading='eager' 
                        className="object-contain" />
                      </div>
                      <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{tech.name}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
