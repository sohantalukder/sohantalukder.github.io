import { ArrowUpRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/lib/medium-rss"

function formatDate(dateString: string) {
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  } catch {
    return "Recent"
  }
}

function calculateReadTime(description: string) {
  const wordsPerMinute = 200
  const wordCount = description.split(" ").length
  const readTime = Math.ceil(wordCount / wordsPerMinute)
  return `${Math.max(1, readTime)} min read`
}

export function BlogPostGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <div className="border-t border-border">
        {posts.map((post, index) => (
          <article key={post.guid || String(index)} className="group border-b border-border py-7 sm:py-9">
            <Link
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="grid gap-5 rounded-sm outline-none sm:grid-cols-[4rem_1fr_auto] sm:items-start"
            >
              <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="max-w-3xl text-xl font-medium leading-snug tracking-tight transition-colors duration-200 group-hover:text-orange-600 group-focus-within:text-orange-600 sm:text-2xl">
                  {post.title}
                </h3>
                {post.description ? (
                  <p className="mt-3 line-clamp-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                    {post.description}
                  </p>
                ) : null}
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" aria-hidden />{formatDate(post.pubDate)}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" aria-hidden />{calculateReadTime(post.description)}</span>
                  {post.categories.slice(0, 2).map((category) => (
                    <span key={category} className="font-mono uppercase tracking-[0.08em]">{category}</span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="editorial-arrow mt-0.5 h-5 w-5 text-muted-foreground group-hover:text-orange-500 group-focus-within:text-orange-500" aria-hidden />
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <Link href="https://sohantalukder.medium.com/" target="_blank" rel="noopener noreferrer" className="editorial-link">
          View all posts on Medium
          <ArrowUpRight className="editorial-arrow h-4 w-4" aria-hidden />
        </Link>
      </div>
    </>
  )
}
