import BlogContent from '@/components/sections/blog/BlogContent'
import { getBlogPosts, getBlogCategories } from '@/lib/getBlog'

export const metadata = { title: 'Blog | Codiksa' }

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getBlogPosts(),
    getBlogCategories(),
  ])

  return (
    <BlogContent
      posts={posts}
      categories={categories}/>
  )
}