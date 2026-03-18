import type { Metadata } from 'next'
import ContactHero from '@/components/sections/contact/ContactHero'
import ContactForm from '@/components/sections/contact/ContactForm'
import CTASection from '@/components/sections/shared/CTASection'

export const metadata: Metadata = { title: 'Contact | Codiksa' }

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm  />
      <CTASection
        title="Have Questions?"
        subtitle="Check out our services page to learn more about what we offer, or browse our blog for insights."
        primaryBtn={{ label: 'View Our Services', href: '/services' }}
        secondaryBtn={{ label: 'Read Our Blog', href: '/blog' }}
      />
    </>
  )
}
