'use client'

import { useState } from 'react'
import BlogSearch from './BlogSearch'

interface BlogHeroProps {
  onSearch: (value: string) => void
}

export default function BlogHero({ onSearch }: BlogHeroProps) {
  const [search, setSearch] = useState('')

  const handleChange = (value: string) => {
    setSearch(value)
    onSearch(value)
  }

  return (
    <section className="pt-32 pb-20 px-4 text-center" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--brand-primary)' }}>Blog</span>
        <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>Insights & Updates</h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Stay ahead of the curve with our latest articles on software development, design trends, and technology insights.
        </p>
        <BlogSearch value={search} onChange={handleChange} />
      </div>
    </section>
  )
}