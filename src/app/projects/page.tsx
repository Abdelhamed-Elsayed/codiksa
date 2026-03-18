import type { Metadata } from 'next'
import ProjectsHero from '@/components/sections/projects/ProjectsHero'
import ProjectsGrid from '@/components/sections/projects/ProjectsGrid'
import CTASection from '@/components/sections/shared/CTASection'
import { getProjects } from '@/lib/getProjects'

export const metadata: Metadata = { title: 'Projects | Codiksa' }

export default async function ProjectsPage() {
  const projects = await getProjects()
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
      <CTASection
        title="Want to See Your Project Here?"
        subtitle="Let's create something amazing together. Start your project with us today."
        primaryBtn={{ label: 'Start Your Project', href: '/contact' }}
      />
    </>
  )
}
