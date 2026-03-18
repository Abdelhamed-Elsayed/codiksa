import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/types'

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--brand-primary)' }}>Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>Featured Projects</h2>
          </div>
          <Link href="/projects" className="text-sm font-medium hidden sm:block" style={{ color: 'var(--brand-primary)' }}>
            View All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded-xl border transition-all duration-300 hover:scale-[1.02]"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes='(max-width: 768px) 100vw,50vw' loading='eager'
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
                <h3 className="text-base font-semibold text-white">{project.title}</h3>
                <p className="text-xs text-white/70 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs font-medium" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white' }}>
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs text-white/60">+{project.tags.length - 3}</span>
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
