import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sohan Talukder - Full Stack Developer Portfolio',
    short_name: 'Sohan Portfolio',
    description: 'Personal portfolio of Sohan Talukder, a Full Stack Developer from Bangladesh specializing in TypeScript, React, and modern web development.',
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