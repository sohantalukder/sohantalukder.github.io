export function StructuredData() {
  const siteUrl = "https://sohantalukder.github.io";
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Md. Sohan Talukder",
    "alternateName": ["Sohan Talukder", "Sohan", "Md. Sohan Talukder Akash", "Md. Sohan Talukder", "Sohan Talukder Akash", "Akash", "sohantalukder"],
    "url": siteUrl,
    "image": `${siteUrl}/thumbnail.png`,
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelancer"
    },
    "description": "Passionate Full Stack Developer from Bangladesh with expertise in TypeScript, React, Next.js, and modern web development.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    },
    "nationality": "Bangladeshi",
    "knowsAbout": [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Web Development",
      "Mobile App Development",
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
    "email": "mailto:sohantalukder007@gmail.com"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sohan Talukder Portfolio",
    "alternateName": "Sohan Portfolio",
    "url": siteUrl,
    "description": "Personal portfolio website of Sohan Talukder, a Full Stack Developer from Bangladesh",
    "author": {
      "@type": "Person",
      "name": "Md. Sohan Talukder"
    },
    "inLanguage": "en-US",
    "copyrightHolder": {
      "@type": "Person", 
      "name": "Md. Sohan Talukder"
    },
    "copyrightYear": "2024",
    "genre": "Portfolio",
    "keywords": "Sohan Talukder, Full Stack Developer, TypeScript, React, Portfolio, Bangladesh Developer"
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sohan Talukder - Web Development Services",
    "description": "Professional web and mobile app development services specializing in TypeScript, React, and modern web technologies",
    "provider": {
      "@type": "Person",
      "name": "Md. Sohan Talukder"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Web Development",
      "Mobile App Development", 
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