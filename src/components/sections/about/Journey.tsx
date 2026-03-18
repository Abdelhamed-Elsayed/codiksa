'use client'

import { useEffect, useRef, useState } from 'react'

const milestones = [
  { year: '2015', event: 'Codiksa founded with a vision to transform software development' },
  { year: '2017', event: 'Reached 25 team members and 50+ completed projects' },
  { year: '2019', event: 'Expanded to international markets with clients across Europe' },
  { year: '2021', event: 'Launched AI & Data Solutions division' },
  { year: '2023', event: 'Celebrated 100th enterprise client partnership' },
  { year: '2026', event: 'Named Top Software Development Company by TechReview' },
]

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(milestones.length).fill(false))
  const [animationDone, setAnimationDone] = useState(false)

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          milestones.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev]
                next[i] = true
                return next
              })
            }, i * 200)
          })
          setTimeout(() => setAnimationDone(true), milestones.length * 200)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto cycle
  useEffect(() => {
    if (!animationDone) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % milestones.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [animationDone])

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Our Journey
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Key milestones that have shaped who we are today.
          </p>
        </div>

        <div ref={containerRef} className="flex flex-col items-center gap-0">
          {/* Center node */}
          <div
            className="flex items-center justify-center rounded-full border-2 mb-2 shrink-0"
            style={{
              width: '110px',
              height: '110px',
              borderColor: 'var(--brand-primary)',
              backgroundColor: 'var(--bg-card)',
              boxShadow: '0 0 24px rgba(96, 165, 250, 0.25)',
            }}
          >
            <div className="text-center">
              <div
                className="font-bold"
                style={{ fontSize: '12px', color: 'var(--brand-primary)', letterSpacing: '2px' }}
              >
                CODIKSA
              </div>
              <div style={{ fontSize: '8px', color: 'var(--text-muted)', letterSpacing: '1px' }}>
                TIMELINE
              </div>
            </div>
          </div>

          {/* Milestones */}
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0
            const isActive = activeIndex === i

            return (
              <div
                key={m.year}
                className="w-full flex items-center"
                style={{
                  opacity: visibleItems[i] ? 1 : 0,
                  transform: visibleItems[i] ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                }}
              >
                {/* Left */}
                <div className="flex-1 pr-3">
                  {isLeft && (
                    <button
                      onClick={() => setActiveIndex(i)}
                      className="w-full text-right p-3 rounded-xl border transition-all duration-300"
                      style={{
                        background: 'none',
                        cursor: 'pointer',
                        borderColor: isActive ? 'var(--brand-primary)' : 'var(--border)',
                        backgroundColor: isActive ? 'var(--bg-card)' : 'transparent',
                        boxShadow: isActive ? '0 0 14px rgba(96, 165, 250, 0.15)' : 'none',
                      }}
                    >
                      <div
                        className="font-bold mb-1"
                        style={{ fontSize: '14px', color: 'var(--brand-primary)' }}
                      >
                        {m.year}
                      </div>
                      <div
                        className="leading-snug"
                        style={{ fontSize: '11px', color: 'var(--text-secondary)' }}
                      >
                        {m.event}
                      </div>
                    </button>
                  )}
                </div>

                {/* Center line + dot */}
                <div className="flex flex-col items-center shrink-0" style={{ width: '24px' }}>
                  <div
                    style={{
                      width: '1px',
                      height: '20px',
                      backgroundColor: 'var(--brand-primary)',
                      opacity: 0.3,
                    }}
                  />
                  <div
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'var(--brand-primary)' : 'var(--border)',
                      boxShadow: isActive ? '0 0 10px rgba(96, 165, 250, 0.7)' : 'none',
                      transition: 'all 0.3s ease',
                      flexShrink: 0,
                    }}
                  />
                  <div
                    style={{
                      width: '1px',
                      height: '20px',
                      backgroundColor: 'var(--brand-primary)',
                      opacity: 0.3,
                    }}
                  />
                </div>

                {/* Right */}
                <div className="flex-1 pl-3">
                  {!isLeft && (
                    <button
                      onClick={() => setActiveIndex(i)}
                      className="w-full text-left p-3 rounded-xl border transition-all duration-300"
                      style={{
                        background: 'none',
                        cursor: 'pointer',
                        borderColor: isActive ? 'var(--brand-primary)' : 'var(--border)',
                        backgroundColor: isActive ? 'var(--bg-card)' : 'transparent',
                        boxShadow: isActive ? '0 0 14px rgba(96, 165, 250, 0.15)' : 'none',
                      }}
                    >
                      <div
                        className="font-bold mb-1"
                        style={{ fontSize: '14px', color: 'var(--brand-primary)' }}
                      >
                        {m.year}
                      </div>
                      <div
                        className="leading-snug"
                        style={{ fontSize: '11px', color: 'var(--text-secondary)' }}
                      >
                        {m.event}
                      </div>
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2">
          {milestones.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="border-none cursor-pointer transition-all duration-300"
              style={{
                width: activeIndex === i ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: activeIndex === i ? 'var(--brand-primary)' : 'var(--border)',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}