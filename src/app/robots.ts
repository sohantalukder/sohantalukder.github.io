import { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site-config'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: absoluteUrl('/sitemap.xml'),
  }
}
