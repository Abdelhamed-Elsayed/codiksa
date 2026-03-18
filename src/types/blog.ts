export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  image: string
  author: {
    name: string
    avatar: string
  }
  date: string
  readTime: number
  featured: boolean
}