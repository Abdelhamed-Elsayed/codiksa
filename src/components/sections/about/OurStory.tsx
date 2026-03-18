import Image from 'next/image'

export default function OurStory() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden h-96 transition-all duration-200">
          <Image src="/images/about/team-working.jpg" alt="Our team working" fill sizes='(max-width: 768px) 100vw,50vw' loading='eager' className="object-cover" />
          <div className="absolute bottom-4 left-4 px-4 py-3 rounded-xl" style={{ backgroundColor: 'transparent'  }}>
            <p className="text-2xl font-bold" style={{ color: 'var(--brand-primary)' }}>10+</p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Years of Excellence</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>Our Story</h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>Codiksa was born from a simple belief: that technology should empower businesses, not complicate them. Our founders met at a tech conference and discovered a shared frustration with the disconnect between what businesses needed and what traditional software vendors provided.</p>
            <p>What started as a two-person team in a small office has grown into a global company with over 25 talented professionals. We've helped startups scale to millions of users and enabled enterprises to modernize their legacy systems.</p>
            <p>Today, we continue to push boundaries, embracing emerging technologies like AI and cloud computing while staying true to our core mission: building software that makes a real difference.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
