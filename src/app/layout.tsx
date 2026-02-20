import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lodenlabs.com"),
    title: "LodenLabs - Digital Alchemy",
  description: "LodenLabs by Jason Loden Ganub — Digital Alchemy. Web and mobile apps crafted with care. Loden Labs builds beautiful software products.",
  keywords: ["LodenLabs", "Loden Labs", "lodenlabs", "Jason Loden Ganub", "Jason Ganub", "Digital Alchemy", "web development", "mobile apps", "games", "indie developer", "software developer"],
  authors: [{ name: "Jason Loden Ganub" }],
  creator: "Jason Loden Ganub",
  alternates: {
    canonical: "https://lodenlabs.com",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "LodenLabs - Digital Alchemy",
    description: "Loden Labs — Web and mobile apps crafted by Jason Loden Ganub. Digital Alchemy.",
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
