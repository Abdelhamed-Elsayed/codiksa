import type { Metadata } from 'next'
import TechnologiesHero from '@/components/sections/technologies/TechnologiesHero'
import TechnologiesList from '@/components/sections/technologies/TechnologiesList'
import CTASection from '@/components/sections/shared/CTASection'
import { getTechnologies } from '@/lib/getTechnologies'

export const metadata: Metadata = { title: 'Technologies | Codiksa' }

export default async function TechnologiesPage() {
  const categories = await getTechnologies()
  return (
    <>
      <TechnologiesHero />
      <TechnologiesList categories={categories} />
      <CTASection
        title="Have a Specific Tech Stack in Mind?"
        subtitle="We're always exploring new technologies. Let's discuss your project requirements."
        primaryBtn={{ label: 'Start a Conversation', href: '/contact' }}
      />
    </>
  )
}
