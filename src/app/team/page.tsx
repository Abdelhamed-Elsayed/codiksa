import type { Metadata } from 'next'
import TeamHero from '@/components/sections/team/TeamHero'
import TeamGrid from '@/components/sections/team/TeamGrid'
import CTASection from '@/components/sections/shared/CTASection'
import { getTeam } from '@/lib/getTeam'

export const metadata: Metadata = { title: 'Team | Codiksa' }

export default async function TeamPage() {
  const team = await getTeam()
  return (
    <>
      <TeamHero />
      <TeamGrid members={team} />
      <CTASection
        title="Want to Join Our Team?"
        subtitle="We're always looking for talented individuals who are passionate about building great software."
        primaryBtn={{ label: 'View Open Positions', href: '/contact' }}
      />
    </>
  )
}
