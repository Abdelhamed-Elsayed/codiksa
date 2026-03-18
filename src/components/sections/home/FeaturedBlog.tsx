import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/types'

export default function FeaturedBlog({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--brand-primary)' }}>Blog</span>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>Latest Insights</h2>
          </div>
          <Link href="/blog" className="text-sm font-medium hidden sm:block" style={{ color: 'var(--brand-primary)' }}>
            View All Posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border overflow-hidden flex flex-col transition-all duration-200 hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={post.image} alt={post.title} fill sizes='(max-width: 768px) 100vw,50vw' loading='eager'
                  className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium text-white" style={{ backgroundColor: 'var(--brand-primary)' }}>
                  {post.category}
                </span>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <span>📅 {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>⏱ {post.readTime} min read</span>
                </div>
                <h3 className="text-base font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>{post.title}</h3>
                <p className="text-sm leading-relaxed line-clamp-2 flex-1" style={{ color: 'var(--text-secondary)' }}>{post.excerpt}</p>
                <span className="text-sm font-medium mt-auto" style={{ color: 'var(--brand-primary)' }}>Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
