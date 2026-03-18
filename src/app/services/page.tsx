import type { Metadata } from 'next'
import ServicesHero from '@/components/sections/services/ServicesHero'
import ServicesList from '@/components/sections/services/ServicesList'
import CTASection from '@/components/sections/shared/CTASection'
import { getServices } from '@/lib/getServices'

export const metadata: Metadata = { title: 'Services | Codiksa' }

export default async function ServicesPage() {
  const services = await getServices()
  return (
    <>
      <ServicesHero />
      <ServicesList services={services} />
      <CTASection
        title="Ready to Start Your Project?"
        subtitle="Let's discuss how we can help bring your vision to life."
        primaryBtn={{ label: 'Get in Touch', href: '/contact' }}
      />
    </>
  )
}
