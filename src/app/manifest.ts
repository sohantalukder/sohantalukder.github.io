import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Md. Sohan Talukder Akash — React Native & Flutter Portfolio',
    short_name: 'Sohan Portfolio',
    description:
      'Portfolio of Md. Sohan Talukder Akash: React Native and Flutter developer, mobile app developer in Bangladesh.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffb80d',
    icons: [
      {
        src: '/thumbnail.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/sohan.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['portfolio', 'developer', 'technology'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
} 