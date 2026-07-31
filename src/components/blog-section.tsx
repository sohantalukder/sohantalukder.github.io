import { AlertCircle, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"
import { getMediumPosts, type BlogPost } from "@/lib/medium-rss"
import { BlogPostGrid } from "@/components/blog-post-grid"

function MediumLink({ children }: { children: string }) {
  return (
    <Link href="https://sohantalukder.medium.com/" target="_blank" rel="noopener noreferrer" className="editorial-link">
      {children}
      <ArrowUpRight className="editorial-arrow h-4 w-4" aria-hidden />
    </Link>
  )
}

function BlogShell({ children }: { children: ReactNode }) {
  return (
    <section id="blog" aria-labelledby="blog-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 pb-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <div>
            <p className="section-kicker">Writing</p>
            <h2 id="blog-title" className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Notes from the work.</h2>
          </div>
          <p className="max-w-2xl leading-7 text-muted-foreground lg:justify-self-end lg:text-lg">
            Practical thoughts on mobile development, engineering decisions, and building better product experiences.
          </p>
        </div>
        {children}
      </div>
    </section>
  )
}

export async function BlogSection() {
  let posts: BlogPost[] = []
  try {
    posts = await getMediumPosts(6)
  } catch {
    return (
      <BlogShell>
        <div className="flex flex-col items-start gap-5 border-y border-destructive/40 py-8">
          <p className="inline-flex items-center gap-2 text-sm text-destructive"><AlertCircle className="h-4 w-4" aria-hidden />Unable to load posts right now.</p>
          <MediumLink>Visit Medium profile</MediumLink>
        </div>
      </BlogShell>
    )
  }

  if (posts.length === 0) {
    return (
      <BlogShell>
        <div className="flex flex-col items-start gap-5 border-y border-border py-8">
          <p className="text-muted-foreground">No blog posts found.</p>
          <MediumLink>Visit Medium profile</MediumLink>
        </div>
      </BlogShell>
    )
  }

  return <BlogShell><BlogPostGrid posts={posts} /></BlogShell>
}
