const milestones = [
  { year: '2015', event: 'Codiksa founded with a vision to transform software development' },
  { year: '2017', event: 'Reached 25 team members and 50+ completed projects' },
  { year: '2019', event: 'Expanded to international markets with clients across Europe' },
  { year: '2021', event: 'Launched AI & Data Solutions division' },
  { year: '2023', event: 'Celebrated 100th enterprise client partnership' },
  { year: '2025', event: 'Named Top Software Development Company by TechReview' },
]

export default function Journey() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'transparent'  }}>
      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>Our Journey</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Key milestones that have shaped who we are today.</p>
        </div>
        <div className="relative flex flex-col gap-0">
          <div className="absolute left-2.75 top-3 bottom-3 w-0.5" style={{ backgroundColor: 'transparent' }} />
          {milestones.map((m) => (
            <div key={m.year} className="relative flex items-start gap-6 pb-8">
              <div className="relative z-10 w-6 h-6 rounded-full shrink-0 mt-0.5" style={{ backgroundColor: 'transparent'  }} />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold" style={{ color: 'var(--brand-primary)' }}>{m.year}</span>
                <span style={{ color: 'var(--text-secondary)' }}>{m.event}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
