import HeroSection from '@/components/sections/home/HeroSection'
import StatsSection from '@/components/sections/home/StatsSection'
import TechnologiesStrip from '@/components/sections/home/TechnologiesStrip'
import FeaturedServices from '@/components/sections/home/FeaturedServices'
import FeaturedProjects from '@/components/sections/home/FeaturedProjects'
import TestimonialsSection from '@/components/sections/home/TestimonialsSection'
import FeaturedBlog from '@/components/sections/home/FeaturedBlog'
import CTASection from '@/components/sections/shared/CTASection'
import { getFeaturedProjects } from '@/lib/getProjects'
import { getServices } from '@/lib/getServices'
import { getBlogPosts } from '@/lib/getBlog'

export default async function HomePage() {
  const [projects, services, posts] = await Promise.all([
    getFeaturedProjects(),
    getServices(),
    getBlogPosts(),
  ])

  return (
    <>
      <HeroSection />
      <StatsSection />
      <TechnologiesStrip />
      <FeaturedServices services={services.slice(0, 5)} />
      <FeaturedProjects projects={projects} />
      <TestimonialsSection />
      <FeaturedBlog posts={posts.slice(0, 3)} />
      <CTASection
        title="Ready to Transform Your Ideas Into Reality?"
        subtitle="Let's discuss your project and explore how we can help you achieve your goals."
        primaryBtn={{ label: 'Start a Project', href: '/contact' }}
        secondaryBtn={{ label: 'View Our Work', href: '/projects' }}
      />
    </>
  )
}
