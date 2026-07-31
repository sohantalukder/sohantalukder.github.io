import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
    },
  ]
}
