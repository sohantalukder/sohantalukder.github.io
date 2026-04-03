import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sohantalukder.github.io";
const thumbnailUrl = `${siteUrl}/thumbnail.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sohan Talukder - Full Stack Developer | TypeScript Expert",
    template: "%s | Sohan Talukder"
  },
  description: "Sohan Talukder is a passionate Full Stack Developer from Bangladesh with 3+ years of experience in TypeScript, React, Next.js, and modern web development. Specializing in building impactful web and mobile applications.",
  applicationName: "Sohan Talukder Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Sohan Talukder",
    "Md. Sohan Talukder",
    "Sohan",
    "Full Stack Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Bangladesh Developer",
    "Dhaka Developer",
    "Portfolio",
    "Web Development",
    "Mobile App Development",
    "React Native",
    "Node.js",
    "Software Engineer"
  ],
  authors: [{ name: "Md. Sohan Talukder", url: siteUrl }],
  creator: "Md. Sohan Talukder",
  publisher: "Md. Sohan Talukder",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sohan Talukder Portfolio",
    title: "Sohan Talukder - Full Stack Developer | TypeScript Expert",
    description: "Passionate Full Stack Developer from Bangladesh with expertise in TypeScript, React, Next.js. Building innovative web and mobile applications with modern technologies.",
    images: [
      {
        url: thumbnailUrl,
        width: 1200,
        height: 630,
        alt: "Sohan Talukder - Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sohantalukder",
    creator: "@sohantalukder",
    title: "Sohan Talukder - Full Stack Developer | TypeScript Expert",
    description: "Passionate Full Stack Developer from Bangladesh with expertise in TypeScript, React, Next.js. Building innovative web and mobile applications.",
    images: [thumbnailUrl],
  },
  verification: {
    google: "hTWXbF_598kgXibWYI9PbGiTV07irnhJlxX1Ukg0S1M",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "theme-color": "#ffb80d",
    "color-scheme": "light dark",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Sohan Portfolio",
    "application-name": "Sohan Talukder Portfolio",
    "msapplication-TileColor": "#ffb80d",
    "msapplication-config": "browserconfig.xml",
    "twitter:image": thumbnailUrl,
    "twitter:image:alt": "Sohan Talukder - Full Stack Developer Portfolio",
    "og:image:alt": "Sohan Talukder - Full Stack Developer Portfolio",
    "article:author": "Md. Sohan Talukder",
    "profile:first_name": "Sohan",
    "profile:last_name": "Talukder",
    "profile:username": "sohantalukder",
    "profile:gender": "male",
    "geo.region": "BD-13",
    "geo.position": "23.8103;90.4125",
    "geo.placename": "Dhaka, Bangladesh",
    "ICBM": "23.8103, 90.4125",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
