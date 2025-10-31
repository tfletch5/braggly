import { client } from './sanity.client'

export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  author: {
    name: string
    image?: any
    bio?: string
  }
  mainImage?: any
  categories?: Array<{
    title: string
    slug: {
      current: string
    }
  }>
  publishedAt: string
  excerpt?: string
  body: any
  featured?: boolean
}

// Get all published posts
export async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author->{
        name,
        image,
        bio
      },
      mainImage,
      categories[]->{
        title,
        slug
      },
      publishedAt,
      excerpt,
      featured
    }`
  )
}

// Get featured posts
export async function getFeaturedPosts(limit = 3): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post" && featured == true && defined(publishedAt)] | order(publishedAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      author->{
        name,
        image
      },
      mainImage,
      categories[]->{
        title,
        slug
      },
      publishedAt,
      excerpt
    }`
  )
}

// Get recent posts
export async function getRecentPosts(limit = 6): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      author->{
        name,
        image
      },
      mainImage,
      categories[]->{
        title,
        slug
      },
      publishedAt,
      excerpt
    }`
  )
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author->{
        name,
        image,
        bio
      },
      mainImage,
      categories[]->{
        title,
        slug
      },
      publishedAt,
      excerpt,
      body
    }`,
    { slug }
  )
}

// Get all post slugs (for static generation)
export async function getPostSlugs(): Promise<string[]> {
  const slugs = await client.fetch<string[]>(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )
  return slugs
}

// Get posts by category
export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post" && defined(publishedAt) && references(*[_type=="category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author->{
        name,
        image
      },
      mainImage,
      categories[]->{
        title,
        slug
      },
      publishedAt,
      excerpt
    }`,
    { categorySlug }
  )
}
