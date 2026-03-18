import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getProjects } from '@/lib/getProjects'

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return {}
  return { title: `${project.title} | Codiksa` }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <main className="pt-32 pb-20 px-4" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <Link href="/projects" className="text-sm font-medium" style={{ color: 'var(--brand-primary)' }}>
          ← Back to Projects
        </Link>

        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className="px-3 py-1 rounded-full text-sm font-medium border"
              style={{ color: 'var(--brand-primary)', borderColor: 'var(--brand-primary)' }}
            >
              {project.category}
            </span>
            <span style={{ color: 'var(--text-muted)' }} className="text-sm">
              {project.client} · {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {project.title}
          </h1>

          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm border"
                style={{ color: 'var(--text-secondary)', borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}