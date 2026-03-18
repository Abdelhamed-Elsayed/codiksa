import type { Service } from '@/types'
import data from '@/data/services.json'

export async function getServices(): Promise<Service[]> {
  return data as Service[]
}

export async function getServiceById(id: string): Promise<Service | undefined> {
  return (data as Service[]).find((s) => s.id === id)
}
