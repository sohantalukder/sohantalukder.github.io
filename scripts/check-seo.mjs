import assert from "node:assert/strict"
import { existsSync, readFileSync, statSync } from "node:fs"
import { join } from "node:path"

const outDir = join(process.cwd(), "out")
const expectedTitle = "Md. Sohan Talukder | Software Engineer & Mobile Developer"
const expectedDescription =
  "Md. Sohan Talukder is a software engineer in Dhaka specializing in React Native and Flutter mobile apps. Explore his projects, experience, and writing."
const canonicalUrl = "https://sohantalukder.github.io/"
const expectedSocialImage = `${canonicalUrl}og-image.png`

function requiredFile(relativePath) {
  const filePath = join(outDir, relativePath)
  assert.ok(existsSync(filePath), `Missing exported file: ${relativePath}`)
  return filePath
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
}

function pngDimensions(filePath) {
  const image = readFileSync(filePath)
  const signature = image.subarray(0, 8).toString("hex")
  assert.equal(signature, "89504e470d0a1a0a", `${filePath} is not a PNG`)
  return {
    width: image.readUInt32BE(16),
    height: image.readUInt32BE(20),
  }
}

const html = readFileSync(requiredFile("index.html"), "utf8")
const titleMatch = html.match(/<title>(.*?)<\/title>/)
assert.ok(titleMatch, "Missing page title")
assert.equal(decodeHtml(titleMatch[1]), expectedTitle, "Unexpected page title")

assert.ok(
  html.includes(`<meta name="description" content="${expectedDescription}"`),
  "Missing expected meta description",
)
assert.ok(
  html.includes(`<link rel="canonical" href="${canonicalUrl}"`),
  "Missing trailing-slash canonical URL",
)
assert.ok(
  html.includes(`<meta property="og:image" content="${expectedSocialImage}"`),
  "Missing expected Open Graph image",
)
assert.ok(
  html.includes('<meta name="robots" content="index, follow"'),
  "Homepage is not explicitly indexable",
)
assert.ok(!html.toLowerCase().includes("noindex"), "Homepage contains noindex")

const h1Matches = [...html.matchAll(/<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/g)]
assert.equal(h1Matches.length, 1, "Homepage must contain exactly one h1")
const h1Text = decodeHtml(
  h1Matches[0][1]
    .replaceAll(/<!--[\s\S]*?-->/g, "")
    .replaceAll(/<[^>]+>/g, " ")
    .replaceAll(/\s+/g, " ")
    .trim(),
)
assert.ok(h1Text.startsWith("Md. Sohan Talukder"), "H1 must begin with the primary name")

const jsonLdMatches = [
  ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
]
assert.equal(jsonLdMatches.length, 1, "Homepage must contain one linked JSON-LD graph")
const jsonLd = JSON.parse(jsonLdMatches[0][1])
assert.ok(Array.isArray(jsonLd["@graph"]), "JSON-LD must contain an @graph")
const schemaTypes = new Set(jsonLd["@graph"].map((item) => item["@type"]))
for (const expectedType of ["ProfilePage", "Person", "WebSite"]) {
  assert.ok(schemaTypes.has(expectedType), `Missing ${expectedType} schema`)
}
assert.ok(!jsonLdMatches[0][1].includes("Freelancer"), "Schema contains stale employer data")

const sitemap = readFileSync(requiredFile("sitemap.xml"), "utf8")
assert.ok(sitemap.includes(`<loc>${canonicalUrl}</loc>`), "Sitemap URL is incorrect")
assert.ok(!sitemap.includes("<lastmod>"), "Sitemap must not invent a build-time lastmod")

const robots = readFileSync(requiredFile("robots.txt"), "utf8")
assert.ok(robots.includes("Allow: /"), "robots.txt does not allow the homepage")
assert.ok(
  robots.includes(`Sitemap: ${canonicalUrl}sitemap.xml`),
  "robots.txt sitemap URL is incorrect",
)

requiredFile("googlea6ac3e97486aa9e2.html")
requiredFile(".nojekyll")
requiredFile("404.html")

assert.deepEqual(pngDimensions(requiredFile("og-image.png")), { width: 1200, height: 630 })
assert.deepEqual(pngDimensions(requiredFile("icon-192.png")), { width: 192, height: 192 })
assert.deepEqual(pngDimensions(requiredFile("icon-512.png")), { width: 512, height: 512 })

const optimizedPortrait = requiredFile("sohan-editorial.webp")
const originalPortrait = join(process.cwd(), "assets/source/sohan-editorial.png")
assert.ok(existsSync(originalPortrait), "Missing original portrait source asset")
assert.equal(
  existsSync(join(outDir, "sohan-editorial.png")),
  false,
  "Original portrait must not be included in the production export",
)
assert.ok(
  statSync(optimizedPortrait).size < statSync(originalPortrait).size * 0.4,
  "Optimized portrait is not materially smaller than the original",
)

console.log("SEO export verification passed")
