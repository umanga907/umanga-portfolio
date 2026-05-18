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
  title: "Umanga Deep Shrestha | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 9+ years building production React applications, design systems, and SCSS architecture. Specializing in React.js, TypeScript, and scalable frontend systems.",
  keywords: [
    "Senior Frontend Engineer",
    "React Developer",
    "Frontend Developer Nepal",
    "Freelance React Developer",
    "Design Systems Engineer",
    "TypeScript Developer",
    "SCSS Architecture",
    "React Component Library",
    "Frontend Consultant",
  ],
  authors: [{ name: "Umanga Deep Shrestha" }],
  creator: "Umanga Deep Shrestha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umangashrestha.com.np",
    siteName: "Umanga Deep Shrestha",
    title: "Umanga Deep Shrestha | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 9+ years building production React applications, design systems, and SCSS architecture.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umanga Deep Shrestha | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 9+ years building production React applications, design systems, and SCSS architecture.",
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
      jobTitle: "Senior Frontend Engineer",
      url: "https://umangashrestha.com.np",
      sameAs: [
        "https://www.linkedin.com/in/umangadeepshrestha/",
        "https://github.com/umanga907",
        "https://www.upwork.com/freelancers/~umanga907",
      ],
      knowsAbout: [
        "React.js",
        "TypeScript",
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
        "Senior Frontend Engineer with 9+ years building production React applications, design systems, and SCSS architecture.",
    },
    {
      "@type": "WebSite",
      name: "Umanga Deep Shrestha",
      url: "https://umangashrestha.com.np",
      description:
        "Portfolio of Umanga Deep Shrestha, Senior Frontend Engineer specializing in React, TypeScript, and scalable design systems.",
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
