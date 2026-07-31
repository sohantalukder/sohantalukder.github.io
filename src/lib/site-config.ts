export const siteConfig = {
  url: "https://sohantalukder.github.io/",
  name: "Sohan Talukder Portfolio",
  primaryName: "Md. Sohan Talukder",
  title: "Md. Sohan Talukder | Software Engineer & Mobile Developer",
  description:
    "Md. Sohan Talukder is a software engineer in Dhaka specializing in React Native and Flutter mobile apps. Explore his projects, experience, and writing.",
  locale: "en_US",
  language: "en-US",
  email: "mdtalukder.sohan@gmail.com",
  images: {
    openGraph: "/og-image.png",
    portrait: "/sohan-editorial.webp",
  },
  social: {
    github: "https://github.com/sohantalukder",
    linkedin: "https://linkedin.com/in/sohantalukder",
    medium: "https://sohantalukder.medium.com",
    twitter: "https://twitter.com/sohantalukder0",
    twitterHandle: "@sohantalukder0",
  },
} as const

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString()
}
