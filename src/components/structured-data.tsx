import { absoluteUrl, siteConfig } from "@/lib/site-config"

export function StructuredData() {
  const websiteId = `${siteConfig.url}#website`
  const profileId = `${siteConfig.url}#profile`
  const personId = `${siteConfig.url}#person`

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": profileId,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.primaryName,
        alternateName: [
          "Sohan Talukder",
          "Md. Sohan Talukder Akash",
          "Sohan Talukder Akash",
          "sohantalukder",
        ],
        url: siteConfig.url,
        image: {
          "@type": "ImageObject",
          url: absoluteUrl(siteConfig.images.portrait),
          width: 768,
          height: 1035,
        },
        jobTitle: "Software Engineer",
        worksFor: {
          "@type": "Organization",
          name: "SELISE Digital Platforms",
        },
        description: siteConfig.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "Bangladesh",
        },
        nationality: "Bangladeshi",
        knowsAbout: [
          "React Native",
          "Flutter",
          "Dart",
          "Mobile App Development",
          "iOS",
          "Android",
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
          "Node.js",
          "Software Engineering",
        ],
        sameAs: [
          siteConfig.social.github,
          siteConfig.social.linkedin,
          siteConfig.social.twitter,
          siteConfig.social.medium,
        ],
        email: `mailto:${siteConfig.email}`,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
