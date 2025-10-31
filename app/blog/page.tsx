import type { Metadata } from "next";
import { getPosts } from "@/lib/sanity.queries";
import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog | Braggly Insights - AI Marketing Tips & Strategies",
  description: "Learn about AI marketing automation, best practices, and industry insights to grow your business.",
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#60A5FA] py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Braggly Insights
            </h1>
            <p className="text-lg text-white/90 lg:text-xl">
              AI marketing tips, automation strategies, and industry insights to help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {posts.length > 0 ? (
            <>
              {/* Featured Post */}
              {posts.some((post) => post.featured) && (
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                    Featured Post
                  </h2>
                  <div className="grid gap-8 lg:grid-cols-1">
                    {posts
                      .filter((post) => post.featured)
                      .slice(0, 1)
                      .map((post) => (
                        <BlogCard key={post._id} post={post} />
                      ))}
                  </div>
                </div>
              )}

              {/* All Posts */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                  Latest Articles
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {posts
                    .filter((post) => !post.featured)
                    .map((post) => (
                      <BlogCard key={post._id} post={post} />
                    ))}
                </div>
              </div>
            </>
          ) : (
            /* No Posts Yet */
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                No Posts Yet
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                We're working on creating valuable content to help you master AI marketing automation.
                Subscribe to our newsletter to be notified when we publish new articles.
              </p>

              {/* Newsletter Signup */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background-light)] p-6">
                <h3 className="font-bold text-[var(--text-primary)] mb-4">
                  Get Notified About New Posts
                </h3>
                <form className="flex flex-col sm:flex-row gap-3" action="/api/newsletter" method="POST">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="flex h-12 flex-1 rounded-lg border border-[var(--border)] bg-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-[var(--primary)] px-6 font-medium text-white hover:bg-[var(--primary-dark)] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
