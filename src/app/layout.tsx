import PagesWrapper from "@/components/sections/pages-wrapper";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

export const metadata: Metadata = {
  title: "Software Engineer Portfolio | Freddy Romero",
  description:
    "Explore the portfolio of Freddy Romero, a passionate Software Engineer specializing in web development, mobile development, React Native, TypeScript, React, and modern technologies.",
  keywords: [
    "Software Engineer",
    "Portfolio",
    "Web Developer",
    "React Native",
    "Android",
    "iOS",
    "TypeScript",
    "React",
    "Software Developer",
    "JavaScript",
    "Next.js",
    "UI/UX",
    "Freddy Romero",
  ],
  authors: [{ name: "Freddy Romero", url: "https://yourdomain.com" }],
  creator: "Freddy Romero",
  openGraph: {
    title: "Software Engineer Portfolio | Freddy Romero",
    description:
      "Showcasing projects, skills, and experience of Freddy Romero, a modern web developer and mobile developer.",
    url: "https://yourdomain.com",
    siteName: "Freddy Romero Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Freddy Romero Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineer Portfolio | Freddy Romero",
    description:
      "Explore the work and skills of Freddy Romero, a software developer specializing in web development, mobile development, React Native, TypeScript, React, and modern technologies.",
    images: ["https://yourdomain.com/og-image.png"],
    creator: "@FreddyRP16",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ViewTransitions>
      <html suppressHydrationWarning lang="en">
        <PagesWrapper children={children} />
      </html>
    </ViewTransitions>
  );
}

