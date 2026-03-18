'use client'

const technologies = [
  { name: 'React', icon: '/images/tech/react.svg' },
  { name: 'Next.js', icon: '/images/tech/nextjs.svg' },
  { name: 'TypeScript', icon: '/images/tech/typescript.svg' },
  { name: 'Node.js', icon: '/images/tech/nodejs.svg' },
  { name: 'PostgreSQL', icon: '/images/tech/postgresql.svg' },
  { name: 'MongoDB', icon: '/images/tech/mongodb.svg' },
  { name: 'Docker', icon: '/images/tech/docker.svg' },
  { name: 'AWS', icon: '/images/tech/aws.svg' },
]

export default function TechnologiesStrip() {
  return (
    <section className="py-12 px-4" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <p
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: 'var(--text-muted)' }}
        >
          Trusted Technologies We Work With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 cursor-pointer"
              style={{ transition: 'transform 0.2s ease' }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('img') as HTMLImageElement
                if (img) {
                  img.style.filter = 'grayscale(0%) brightness(100%)'
                  img.style.transform = 'scale(1.2)'
                }
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('img') as HTMLImageElement
                if (img) {
                  img.style.filter = 'grayscale(100%) brightness(200%)'
                  img.style.transform = 'scale(1)'
                }
              }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                width={40}
                height={40}
                style={{
                  filter: 'grayscale(100%) brightness(200%)',
                  transition: 'filter 0.3s ease, transform 0.3s ease',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}