import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "LodenLabs - Digital Alchemy",
  description: "Digital Alchemy — Web and mobile apps crafted by Jason Loden Ganub. Turning ideas into polished products.",
  keywords: ["Jason Loden Ganub", "LodenLabs", "Digital Alchemy", "web development", "mobile apps", "games", "indie developer"],
  authors: [{ name: "Jason Loden Ganub" }],
  creator: "Jason Loden Ganub",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "LodenLabs - Digital Alchemy",
    description: "Web and mobile apps crafted by Jason Loden Ganub.",
    url: "https://lodenlabs.com",
    siteName: "LodenLabs",
    type: "website",
    images: [
      {
        url: "https://lodenlabs.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "LodenLabs - Digital Alchemy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LodenLabs - Digital Alchemy",
    description: "Web and mobile apps crafted by Jason Loden Ganub.",
    creator: "@jason_ganub",
    images: ["https://lodenlabs.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
