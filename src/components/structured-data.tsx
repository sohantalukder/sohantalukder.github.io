export function StructuredData() {
  const siteUrl = "https://sohantalukder.github.io";
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Md. Sohan Talukder",
    "alternateName": ["Sohan Talukder", "Sohan", "Md. Sohan Talukder Akash", "Md. Sohan Talukder", "Sohan Talukder Akash", "Akash", "sohantalukder"],
    "url": siteUrl,
    "image": `${siteUrl}/thumbnail.png`,
    "jobTitle": "React Native & Flutter Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelancer"
    },
    "description":
      "Md. Sohan Talukder Akash (Sohan Talukder) is a mobile app developer in Dhaka, Bangladesh, building apps with React Native, Flutter, and modern web stacks.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    },
    "nationality": "Bangladeshi",
    "knowsAbout": [
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
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Software Engineering"
    ],
    "sameAs": [
      "https://github.com/sohantalukder",
      "https://linkedin.com/in/sohantalukder",
      "https://twitter.com/sohantalukder0",
      "https://sohantalukder.medium.com"
    ],
    "email": "mailto:mdtalukder.sohan@gmail.com"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sohan Talukder Portfolio",
    "alternateName": "Sohan Portfolio",
    "url": siteUrl,
    "description":
      "Official portfolio of Md. Sohan Talukder Akash—React Native and Flutter developer, Mobile App Developer Bangladesh.",
    "author": {
      "@type": "Person",
      "name": "Md. Sohan Talukder"
    },
    "inLanguage": "en-US",
    "copyrightHolder": {
      "@type": "Person", 
      "name": "Md. Sohan Talukder"
    },
    "copyrightYear": "2026",
    "genre": "Portfolio",
    "keywords":
      "Md. Sohan Talukder Akash, Sohan Talukder, React Native Developer Bangladesh, Mobile App Developer Bangladesh, Flutter Developer, React Native, Bangladesh"
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sohan Talukder — Mobile & Web Development",
    "description":
      "React Native, Flutter, and full-stack web development for clients in Bangladesh and worldwide.",
    "provider": {
      "@type": "Person",
      "name": "Md. Sohan Talukder"
    },
    "areaServed": [
      { "@type": "Country", "name": "Bangladesh" },
      { "@type": "Place", "name": "Worldwide" }
    ],
    "serviceType": [
      "React Native Development",
      "Flutter Development",
      "Mobile App Development",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "TypeScript Development",
      "React Development"
    ],
    "url": siteUrl
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
    </>
  );
} 