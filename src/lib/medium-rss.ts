import https from "node:https"

export interface BlogPost {
  title: string
  description: string
  link: string
  pubDate: string
  categories: string[]
  author: string
  guid: string
}

const MEDIUM_RSS_URL = "https://sohantalukder.medium.com/feed"

const RSS_HEADERS = {
  Accept: "application/rss+xml, application/xml, text/xml, */*",
  "User-Agent":
    "Mozilla/5.0 (compatible; SohanPortfolio/1.0; +https://sohantalukder.medium.com)",
}

/** Node https avoids Next.js patched fetch, which often gets 403 from Medium during static export. */
function fetchMediumRssXml(): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = new URL(MEDIUM_RSS_URL)
    const req = https.request(
      {
        hostname: url.hostname,
        path: `${url.pathname}${url.search}`,
        method: "GET",
        headers: RSS_HEADERS,
      },
      (res) => {
        const code = res.statusCode ?? 0
        if (code < 200 || code >= 300) {
          res.resume()
          reject(new Error(`RSS request failed: ${code}`))
          return
        }
        const chunks: Buffer[] = []
        res.on("data", (c: Buffer) => chunks.push(c))
        res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")))
      }
    )
    req.on("error", reject)
    req.end()
  })
}

function decodeBasicEntities(text: string): string {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function stripHtml(html: string): string {
  return decodeBasicEntities(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim()
}

/** Extract first matching tag body; supports CDATA and plain text. */
function extractTag(block: string, tag: string): string {
  const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const cdata = new RegExp(
    `<${escaped}[^>]*>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*</${escaped}>`,
    "i"
  )
  const c = block.match(cdata)
  if (c) return c[1].trim()
  const plain = new RegExp(`<${escaped}[^>]*>([\\s\\S]*?)</${escaped}>`, "i")
  const p = block.match(plain)
  if (p) return stripHtml(p[1])
  return ""
}

function extractCategories(block: string): string[] {
  const out: string[] = []
  const re = /<category[^>]*>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([^<]*))<\/category>/gi
  let m: RegExpExecArray | null
  while ((m = re.exec(block)) !== null) {
    const text = (m[1] ?? m[2] ?? "").trim()
    if (text) out.push(text)
  }
  return out
}

function excerptFromHtml(html: string, maxLen: number): string {
  const plain = stripHtml(html)
  if (plain.length <= maxLen) return plain
  return `${plain.slice(0, maxLen).trim()}...`
}

function parseRssXml(xml: string, limit: number): BlogPost[] {
  const itemRe = /<item>([\s\S]*?)<\/item>/gi
  const posts: BlogPost[] = []
  let match: RegExpExecArray | null

  while ((match = itemRe.exec(xml)) !== null) {
    const block = match[1]
    const title = extractTag(block, "title")
    const link = extractTag(block, "link")
    const pubDate = extractTag(block, "pubDate")
    const guid = extractTag(block, "guid") || link
    const author = extractTag(block, "dc:creator") || "Sohan Talukder"
    const rawBody =
      extractTag(block, "content:encoded") || extractTag(block, "description")
    const description = excerptFromHtml(rawBody, 280)
    const categories = extractCategories(block)

    if (title && link) {
      posts.push({
        title,
        description,
        link,
        pubDate,
        categories: categories.length > 0 ? categories : ["Medium"],
        author,
        guid,
      })
    }
    if (posts.length >= limit) break
  }

  return posts
}

export async function getMediumPosts(limit = 6): Promise<BlogPost[]> {
  const xml = await fetchMediumRssXml()
  return parseRssXml(xml, limit)
}
