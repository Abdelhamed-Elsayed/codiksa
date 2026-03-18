import type { TechnologyCategory } from '@/types'
import data from '@/data/technologies.json'

export async function getTechnologies(): Promise<TechnologyCategory[]> {
  return data as TechnologyCategory[]
}

export async function getTechnologyCategory(id: string): Promise<TechnologyCategory | undefined> {
  return (data as TechnologyCategory[]).find((c) => c.id === id)
}
