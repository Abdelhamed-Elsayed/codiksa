'use client'

import { useState } from 'react'
import BlogHero from './BlogHero'
import FeaturedPost from './FeaturedPost'
import BlogGrid from './BlogGrid'
import type { BlogPost } from '@/types'

interface BlogContentProps {
  posts: BlogPost[]
  categories: string[]
}

export default function BlogContent({ posts, categories }: BlogContentProps) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <BlogHero onSearch={setSearchQuery} />
      <FeaturedPost posts={posts} />
      <BlogGrid
        posts={posts}
        categories={categories}
        searchQuery={searchQuery}
      />
    </>
  )
}