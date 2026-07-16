import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://umangashrestha.com.np"),
  title: "Umanga Deep Shrestha | Design Engineer",
  description:
    "Design Engineer — I design in code, from rough sketch to shipped screen. 11 years in frontend: design systems, data-dense product UI, React, TypeScript, Next.js, SCSS.",
  keywords: [
    "Design Engineer",
    "Senior Frontend Engineer",
    "React Developer",
    "Frontend Developer Nepal",
    "Design Systems Engineer",
    "TypeScript Developer",
    "Next.js Developer",
    "SCSS Architecture",
    "React Component Library",
  ],
  authors: [{ name: "Umanga Deep Shrestha" }],
  creator: "Umanga Deep Shrestha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umangashrestha.com.np",
    siteName: "Umanga Deep Shrestha",
    title: "Umanga Deep Shrestha | Design Engineer",
    description:
      "Design Engineer — I design in code, from rough sketch to shipped screen. 11 years: design systems, data-dense product UI, React, TypeScript, Next.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umanga Deep Shrestha | Design Engineer",
    description:
      "Design Engineer — I design in code, from rough sketch to shipped screen. 11 years: design systems, data-dense product UI, React, TypeScript, Next.js.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://umangashrestha.com.np",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Umanga Deep Shrestha",
      jobTitle: "Design Engineer",
      url: "https://umangashrestha.com.np",
      sameAs: [
        "https://www.linkedin.com/in/umangadeepshrestha/",
        "https://github.com/umanga907",
        "https://www.upwork.com/freelancers/~umanga907",
      ],
      knowsAbout: [
        "React.js",
        "TypeScript",
        "Next.js",
        "JavaScript",
        "SCSS/SASS",
        "CSS Custom Properties",
        "Design Systems",
        "Frontend Architecture",
        "Responsive Design",
        "Accessibility",
        "Dark Mode Theming",
      ],
      description:
        "Design Engineer with 11 years in frontend — design systems, data-dense product UI, React, TypeScript, Next.js, SCSS.",
    },
    {
      "@type": "WebSite",
      name: "Umanga Deep Shrestha",
      url: "https://umangashrestha.com.np",
      description:
        "Portfolio of Umanga Deep Shrestha, Design Engineer specializing in React, TypeScript, and scalable design systems.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
