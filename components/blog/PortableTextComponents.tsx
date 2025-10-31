import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'
import { PortableTextComponents } from '@portabletext/react'

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Blog post image'}
            width={800}
            height={450}
            className="rounded-lg"
          />
          {value.alt && (
            <p className="mt-2 text-center text-sm text-[var(--text-secondary)]">
              {value.alt}
            </p>
          )}
        </div>
      )
    },
    code: ({ value }) => {
      return (
        <pre className="my-6 overflow-x-auto rounded-lg bg-gray-900 p-4">
          <code className="text-sm text-gray-100">{value.code}</code>
        </pre>
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="mb-6 mt-12 text-4xl font-bold text-[var(--text-primary)]">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 text-3xl font-bold text-[var(--text-primary)]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-2xl font-bold text-[var(--text-primary)]">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-6 text-xl font-bold text-[var(--text-primary)]">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mb-4 text-lg leading-relaxed text-[var(--text-secondary)]">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-[var(--primary)] bg-[var(--background-light)] p-4 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-lg text-[var(--text-secondary)]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-lg text-[var(--text-secondary)]">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-2 py-1 text-sm font-mono text-[var(--primary)]">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-[var(--primary)] hover:underline font-medium"
        >
          {children}
        </a>
      )
    },
  },
}
