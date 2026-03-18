import data from '@/data/blog.json'
import type { BlogPost } from '@/types'

export async function getBlogPosts(): Promise<BlogPost[]> {
  return data as unknown as BlogPost[]
}

export async function getFeaturedPost(): Promise<BlogPost | undefined> {
  return (data as unknown as BlogPost[]).find((p) => p.featured)
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return (data as unknown as BlogPost[]).find((p) => p.slug === slug)
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  if (category === 'All') return data as unknown as BlogPost[]
  return (data as unknown as BlogPost[]).filter((p) => p.category === category)
}

export async function getBlogCategories(): Promise<string[]> {
  const categories = (data as unknown as BlogPost[]).map((p) => p.category)
  return ['All', ...Array.from(new Set(categories))]
}