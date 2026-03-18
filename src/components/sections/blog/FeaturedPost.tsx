'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { BlogPost } from '@/types'

export default function FeaturedPost({ posts }: { posts: BlogPost[] }) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % posts.length)
  }, [posts.length])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + posts.length) % posts.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  const post = posts[current]

  return (
    <section className="py-8 px-4" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto">

        {/* Card */}
        <Link
          href={`/blog/${post.slug}`}
          className="grid-cols-1 lg:grid-cols-2 rounded-2xl border overflow-hidden transition-all duration-300 block"
          style={{ backgroundColor: 'transparent', borderColor: 'var(--border)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--brand-primary)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)'
          }}
        >
          {/* Image - Left */}
          <div className="relative h-64 lg:h-80 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes='(max-width: 768px) 100vw,50vw' loading='eager'
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
            <span
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white z-10"
              style={{ backgroundColor: 'transparent'}}
            >
              Featured
            </span>
          </div>

          {/* Content - Right */}
          <div className="p-8 flex flex-col gap-4 justify-center">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium w-fit border"
              style={{ color: 'var(--brand-primary)', borderColor: 'var(--brand-primary)' }}
            >
              {post.category}
            </span>

            <h2
              className="text-2xl font-bold leading-snug"
              style={{ color: 'var(--text-primary)' }}
            >
              {post.title}
            </h2>

            <p
              className="leading-relaxed line-clamp-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <div
                className="w-9 h-9 rounded-full bg-cover bg-center shrink-0"
                style={{
                  backgroundImage: `url(${post.author.avatar})`,
                  backgroundColor: 'transparent',
                }}
              />
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  {post.author.name}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short', day: 'numeric', year: 'numeric'
                  })} · {post.readTime} min read
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Controls */}
        <div className="flex items-center justify-between mt-4 px-2">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {posts.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  backgroundColor: i === current ? 'var(--brand-primary)' : 'var(--border)',
                }}
              />
            ))}
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-primary)'
                e.currentTarget.style.borderColor = 'var(--brand-primary)'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-card)'
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-primary)'
                e.currentTarget.style.borderColor = 'var(--brand-primary)'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-card)'
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}