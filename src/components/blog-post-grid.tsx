"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/lib/medium-rss"
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  TiltCard,
} from "@/components/motion"

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
      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <StaggerItem key={post.guid || String(index)}>
            <TiltCard className="h-full">
              <Card className="group hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
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

                <CardContent className="space-y-3 px-4 pb-4 flex-1 flex flex-col">
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

                  <Link
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-auto"
                  >
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
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScrollReveal className="text-center mt-8" delay={0.06}>
        <Link
          href="https://sohantalukder.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="default" className="px-6 text-sm">
            <ExternalLink className="mr-2 h-4 w-4" />
            View All Posts on Medium
          </Button>
        </Link>
      </ScrollReveal>
    </>
  )
}
