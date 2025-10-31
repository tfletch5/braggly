import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, getPostSlugs, getRecentPosts } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import { portableTextComponents } from "@/components/blog/PortableTextComponents";
import { formatDate, calculateReadTime } from "@/lib/utils";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Braggly Blog`,
    description: post.excerpt || `Read ${post.title} on the Braggly blog`,
    openGraph: {
      title: post.title,
      description: post.excerpt || "",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const recentPosts = await getRecentPosts(3);
  const relatedPosts = recentPosts.filter((p) => p.slug.current !== slug);

  // Calculate read time
  const bodyText =
    post.body
      ?.map((block: any) => {
        if (block._type === "block" && block.children) {
          return block.children.map((child: any) => child.text).join("");
        }
        return "";
      })
      .join(" ") || "";

  const readTime = calculateReadTime(bodyText);

  return (
    <article>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>

            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category) => (
                  <span
                    key={category.slug.current}
                    className="inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              {post.author && (
                <div className="flex items-center gap-2">
                  {post.author.image && (
                    <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-white/20">
                      <Image
                        src={urlFor(post.author.image).width(40).height(40).url()}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <span className="font-medium">{post.author.name}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImage && (
        <section className="py-8 bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <Image
                  src={urlFor(post.mainImage).width(1200).height(675).url()}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Post Content */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl leading-relaxed text-[var(--text-secondary)] mb-8 pb-8 border-b border-[var(--border)]">
                {post.excerpt}
              </p>
            )}

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <PortableText value={post.body} components={portableTextComponents} />
            </div>

            {/* Author Bio */}
            {post.author && post.author.bio && (
              <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--background-light)] p-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                  About the Author
                </h3>
                <div className="flex items-start gap-4">
                  {post.author.image && (
                    <div className="relative h-16 w-16 flex-shrink-0 rounded-full overflow-hidden">
                      <Image
                        src={urlFor(post.author.image).width(64).height(64).url()}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] text-lg mb-2">
                      {post.author.name}
                    </p>
                    <p className="text-[var(--text-secondary)]">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[var(--background-light)]">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">
                More Articles
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost._id} post={relatedPost} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
