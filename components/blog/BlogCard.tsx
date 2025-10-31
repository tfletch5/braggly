import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Post } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'
import { formatDate, calculateReadTime } from '@/lib/utils'
import { Calendar, Clock } from 'lucide-react'

interface BlogCardProps {
  post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(600).height(400).url()
    : '/images/blog-placeholder.jpg'

  // Calculate read time from body content
  const bodyText = post.body
    ?.map((block: any) => {
      if (block._type === 'block' && block.children) {
        return block.children.map((child: any) => child.text).join('')
      }
      return ''
    })
    .join(' ') || ''

  const readTime = calculateReadTime(bodyText)

  return (
    <Link href={`/blog/${post.slug.current}`} className="group">
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:border-[var(--primary)]">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>

        <CardHeader>
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.slice(0, 2).map((category) => (
                <span
                  key={category.slug.current}
                  className="inline-flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium text-[var(--primary)] mt-3"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          <CardTitle className="line-clamp-2 text-xl group-hover:text-[var(--primary)] transition-colors">
            {post.title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          {/* Excerpt */}
          {post.excerpt && (
            <p className="mb-4 line-clamp-3 text-[var(--text-secondary)]">
              {post.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime} min read</span>
            </div>
          </div>

          {/* Author */}
          {post.author && (
            <div className="mt-4 flex items-center gap-2 pt-4 border-t border-[var(--border)]">
              {post.author.image && (
                <div className="relative h-8 w-8 rounded-full overflow-hidden">
                  <Image
                    src={urlFor(post.author.image).width(32).height(32).url()}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <span className="text-sm font-medium text-[var(--text-primary)]">
                {post.author.name}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
