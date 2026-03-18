'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/types'

interface BlogGridProps {
  posts: BlogPost[]
  categories: string[]
  searchQuery?: string
}

export default function BlogGrid({ posts, categories, searchQuery = '' }: BlogGridProps) {
  const [active, setActive] = useState('All')

  const filtered = posts.filter((p) => {
    const matchesCategory = active === 'All' || p.category === active
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'transparent'}}>
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200"
              style={{
                backgroundColor: active === cat ? 'var(--brand-primary)' : 'var(--bg-card)',
                borderColor: active === cat ? 'var(--brand-primary)' : 'var(--border)',
                color: active === cat ? 'white' : 'var(--text-secondary)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* No results */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
              No articles found for "{searchQuery}"
            </p>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border overflow-hidden flex flex-col transition-all duration-200"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'var(--border)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brand-primary)'
                e.currentTarget.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  sizes='(max-width: 768px) 100vw,50vw' loading='eager'
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span
                  className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium text-white"
                  style={{ backgroundColor: 'transparent' }}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>· {post.readTime} min read</span>
                </div>
                <h3 className="font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed line-clamp-2 flex-1" style={{ color: 'var(--text-secondary)' }}>
                  {post.excerpt}
                </p>
                <div
                  className="flex items-center justify-between mt-auto pt-2 border-t"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {post.author.name}
                  </span>
                  <span className="text-sm font-medium" style={{ color: 'var(--brand-primary)' }}>
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}