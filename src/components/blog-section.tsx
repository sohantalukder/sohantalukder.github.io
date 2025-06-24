"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  title: string
  description: string
  link: string
  pubDate: string
  categories: string[]
  author: string
  guid: string
}

const MEDIUM_RSS_URL = "https://sohantalukder.medium.com/feed"
const CORS_PROXY = "https://api.allorigins.win/get?url="

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMediumPosts()
  }, [])

  const fetchMediumPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Using CORS proxy to fetch Medium RSS feed
      const response = await fetch(`${CORS_PROXY}${encodeURIComponent(MEDIUM_RSS_URL)}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(data.contents, "text/xml")
      
      // Check for parsing errors
      const parseError = xmlDoc.querySelector("parsererror")
      if (parseError) {
        throw new Error("Failed to parse RSS feed")
      }
      
      const items = xmlDoc.querySelectorAll("item")
      const blogPosts: BlogPost[] = []
      
      items.forEach((item) => {
        const title = item.querySelector("title")?.textContent || ""
        const description = item.querySelector("description")?.textContent || ""
        const link = item.querySelector("link")?.textContent || ""
        const pubDate = item.querySelector("pubDate")?.textContent || ""
        const author = item.querySelector("dc\\:creator, creator")?.textContent || "Sohan Talukder"
        const guid = item.querySelector("guid")?.textContent || link
        
        // Extract categories from Medium RSS
        const categoryElements = item.querySelectorAll("category")
        const categories: string[] = []
        categoryElements.forEach((cat) => {
          const categoryText = cat.textContent
          if (categoryText) {
            categories.push(categoryText)
          }
        })
        
        // Clean up description (remove HTML tags)
        const cleanDescription = description
          .replace(/<[^>]*>/g, '') // Remove HTML tags
          .replace(/&nbsp;/g, ' ') // Replace &nbsp; with spaces
          .replace(/&amp;/g, '&') // Replace &amp; with &
          .replace(/&lt;/g, '<') // Replace &lt; with <
          .replace(/&gt;/g, '>') // Replace &gt; with >
          .trim()
          .substring(0, 200) + (description.length > 200 ? '...' : '')
        
        if (title && link) {
          blogPosts.push({
            title,
            description: cleanDescription,
            link,
            pubDate,
            categories: categories.length > 0 ? categories : ['Medium'],
            author,
            guid
          })
        }
      })
      
      setPosts(blogPosts.slice(0, 6)) // Show latest 6 posts
      
    } catch (err) {
      console.error("Error fetching Medium posts:", err)
      setError("Failed to load blog posts. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    } catch {
      return "Recent"
    }
  }

  const calculateReadTime = (description: string) => {
    const wordsPerMinute = 200
    const wordCount = description.split(' ').length
    const readTime = Math.ceil(wordCount / wordsPerMinute)
    return `${Math.max(1, readTime)} min read`
  }

  if (error) {
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
                  <p className="text-xs text-muted-foreground mt-1">{error}</p>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center mt-6">
              <Link href="https://sohantalukder.medium.com/" target="_blank">
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
  console.log(posts)

  return (
    <section id="blog" className="py-16 bg-muted/30">
      <div className="container  max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Latest Blog Posts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Thoughts, tutorials, and insights about web development and technology
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader className="space-y-2 py-4">
                  <div className="h-4 bg-muted rounded w-4/5"></div>
                  <div className="flex gap-3">
                    <div className="h-3 bg-muted rounded w-16"></div>
                    <div className="h-3 bg-muted rounded w-14"></div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pt-0 pb-4">
                  <div className="space-y-1.5">
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-3/4"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-5 bg-muted rounded-full w-14"></div>
                    <div className="h-5 bg-muted rounded-full w-16"></div>
                  </div>
                  <div className="h-8 bg-muted rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : posts.length > 0 ? (
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
                    
                    <Link href={post.link} target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full h-7 text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
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
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-6">No blog posts found.</p>
            <Link href="https://sohantalukder.medium.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Medium Profile
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}