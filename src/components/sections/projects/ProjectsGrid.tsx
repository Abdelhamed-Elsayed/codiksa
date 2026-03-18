'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/types'

const categories = ['All', 'Web Application', 'Mobile Application', 'E-commerce', 'Enterprise Solution', 'EdTech']

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200"
              style={{
                backgroundColor: active === cat ? 'var(--brand-primary)' : 'transparent',
                borderColor: active === cat ? 'var(--brand-primary)' : 'var(--border)',
                color: active === cat ? 'white' : 'var(--text-secondary)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group rounded-xl border overflow-hidden flex flex-col transition-all duration-200 hover:scale-[1.02]"
              style={{ backgroundColor: 'transparent', borderColor: 'var(--border)' }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image src={project.image} alt={project.title} fill sizes='(max-width: 768px) 100vw,50vw' loading='eager'
                  className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium text-white" style={{ backgroundColor: 'transparent' }}>
                  {project.category}
                </span>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between text-xs" style={{ color: 'var(--text-muted)' }}>
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                <p className="text-sm leading-relaxed line-clamp-2 flex-1" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs font-medium border" style={{ color: 'var(--text-secondary)', borderColor: 'var(--border)' }}>
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>+{project.tags.length - 3}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
