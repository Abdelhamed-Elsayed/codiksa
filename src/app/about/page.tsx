import type { Metadata } from 'next'
import AboutHero from '@/components/sections/about/AboutHero'
import OurStory from '@/components/sections/about/OurStory'
import MissionVision from '@/components/sections/about/MissionVision'
import CoreValues from '@/components/sections/about/CoreValues'
import Journey from '@/components/sections/about/Journey'
import CTASection from '@/components/sections/shared/CTASection'

export const metadata: Metadata = { title: 'About | Codiksa' }

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <Journey />
      <CTASection
        title="Ready to Work With Us?"
        subtitle="Let's discuss how we can help bring your vision to life."
        primaryBtn={{ label: 'Contact Us', href: '/contact' }}
        secondaryBtn={{ label: 'Meet the Team', href: '/team' }}
      />
    </>
  )
}
