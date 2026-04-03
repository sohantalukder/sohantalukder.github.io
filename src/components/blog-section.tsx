import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, AlertCircle } from "lucide-react"
import Link from "next/link"
import { getMediumPosts, type BlogPost } from "@/lib/medium-rss"
import { BlogPostGrid } from "@/components/blog-post-grid"
import { ScrollReveal } from "@/components/motion"

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
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Latest Blog Posts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Thoughts, tutorials, and insights about web development and technology
          </p>
        </ScrollReveal>

        <BlogPostGrid posts={posts} />
      </div>
    </section>
  )
}
