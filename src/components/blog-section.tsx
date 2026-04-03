import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"
import { getMediumPosts, type BlogPost } from "@/lib/medium-rss"

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

function BlogError({ message }: { message: string }) {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and technology
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-destructive/50">
            <CardContent className="flex items-center gap-3 p-6">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <div>
                <p className="text-sm text-destructive font-medium">Unable to load posts</p>
                <p className="text-xs text-muted-foreground mt-1">{message}</p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <Link href="https://sohantalukder.medium.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Medium Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function BlogPostGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <Card
            key={post.guid || index}
            className="group hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-base leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(post.pubDate)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{calculateReadTime(post.description)}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-3 px-4 pb-4">
              {post.description ? (
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
              ) : null}

              <div className="flex flex-wrap gap-1">
                {post.categories.slice(0, 2).map((category, catIndex) => (
                  <Badge
                    key={catIndex}
                    variant="secondary"
                    className="text-[10px] px-1.5 py-0.5 font-medium"
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              <Link href={post.link} target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full h-7 text-xs cursor-pointer transition-colors group-hover:bg-primary group-hover:text-primary-foreground hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground"
                >
                  <ExternalLink className="mr-1.5 h-3 w-3" />
                  Read on Medium
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="https://sohantalukder.medium.com/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="default" className="px-6 text-sm">
            <ExternalLink className="mr-2 h-4 w-4" />
            View All Posts on Medium
          </Button>
        </Link>
      </div>
    </>
  )
}

export async function BlogSection() {
  let posts: BlogPost[] = []
  try {
    posts = await getMediumPosts(6)
  } catch {
    return (
      <BlogError message="Failed to load blog posts. Please try again later." />
    )
  }

  if (posts.length === 0) {
    return (
      <section id="blog" className="py-16 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">Latest Blog Posts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Thoughts, tutorials, and insights about web development and technology
            </p>
          </div>
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-6">No blog posts found.</p>
            <Link href="https://sohantalukder.medium.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Medium Profile
              </Button>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="blog" className="py-16 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Latest Blog Posts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Thoughts, tutorials, and insights about web development and technology
          </p>
        </div>

        <BlogPostGrid posts={posts} />
      </div>
    </section>
  )
}
