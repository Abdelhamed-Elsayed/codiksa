import type { TeamMember } from '@/types'
import data from '@/data/team.json'

export async function getTeam(): Promise<TeamMember[]> {
  return data as TeamMember[]
}

export async function getTeamMember(id: string): Promise<TeamMember | undefined> {
  return (data as TeamMember[]).find((member) => member.id === id)
}
