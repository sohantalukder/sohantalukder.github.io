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
    default:
      "Md. Sohan Talukder Akash | React Native & Flutter Developer | Mobile App Developer Bangladesh",
    template: "%s | Sohan Talukder",
  },
  description:
    "Md. Sohan Talukder Akash (Sohan Talukder) is a React Native and Flutter app developer based in Dhaka, Bangladesh. Portfolio of mobile and web apps—React Native Developer Bangladesh, Mobile App Developer Bangladesh.",
  applicationName: "Sohan Talukder Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Md. Sohan Talukder Akash",
    "Sohan Talukder",
    "Md. Sohan Talukder",
    "Sohan",
    "Akash",
    "Sohan Talukder React Native Developer",
    "App Developer",
    "Flutter Developer",
    "React Native Developer",
    "React Native Developer Bangladesh",
    "Mobile App Developer Bangladesh",
    "Full Stack Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer",
    "Bangladesh Developer",
    "Dhaka Developer",
    "Portfolio",
    "Mobile App Development",
    "React Native",
    "Flutter",
    "Node.js",
    "Software Engineer",
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
    title:
      "Md. Sohan Talukder Akash | React Native & Flutter Developer | Mobile App Developer Bangladesh",
    description:
      "React Native and Flutter developer in Dhaka, Bangladesh. Md. Sohan Talukder Akash builds mobile apps for iOS and Android—portfolio, projects, and contact.",
    images: [
      {
        url: thumbnailUrl,
        width: 1200,
        height: 630,
        alt: "Md. Sohan Talukder Akash — React Native and Flutter developer, Bangladesh",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sohantalukder0",
    creator: "@sohantalukder0",
    title:
      "Md. Sohan Talukder Akash | React Native & Flutter Developer | Mobile App Developer Bangladesh",
    description:
      "React Native and Flutter developer in Dhaka, Bangladesh. Mobile apps, web projects, and open-source work.",
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
    "twitter:image:alt": "Md. Sohan Talukder Akash — React Native and Flutter developer, Bangladesh",
    "og:image:alt": "Md. Sohan Talukder Akash — React Native and Flutter developer, Bangladesh",
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
