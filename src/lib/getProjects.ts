import type { Project } from '@/types'
import data from '@/data/projects.json'

export async function getProjects(): Promise<Project[]> {
  return data as Project[]
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return (data as Project[]).filter((p) => p.featured)
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return (data as Project[]).find((p) => p.slug === slug)
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
  return (data as Project[]).filter((p) => p.category === category)
}
