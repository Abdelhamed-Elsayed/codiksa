import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug, getBlogPosts } from '@/lib/getBlog'

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) return {}
  return { title: `${post.title} | Codiksa` }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="pt-32 pb-20 px-4" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <Link href="/blog" className="text-sm font-medium" style={{ color: 'var(--brand-primary)' }}>
          ← Back to Blog
        </Link>

        <div className="flex flex-col gap-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-medium w-fit border"
            style={{ color: 'var(--brand-primary)', borderColor: 'var(--brand-primary)' }}
          >
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full overflow-hidden bg-cover bg-center shrink-0"
              style={{ backgroundImage: `url(${post.author.avatar})`, backgroundColor: 'var(--bg-card)' }}
            />
            <div>
              <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{post.author.name}</p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · {post.readTime} min read
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        <div
          className="text-base leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {post.content || post.excerpt}
        </div>
      </div>
    </main>
  )
}