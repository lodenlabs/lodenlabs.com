import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "LodenLabs - Web & Mobile App Development",
  description: "LodenLabs builds beautiful, high-quality web apps, mobile apps, and games. Explore our portfolio of projects.",
  keywords: ["web development", "mobile apps", "games", "software development", "LodenLabs"],
  authors: [{ name: "LodenLabs" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "LodenLabs - Web & Mobile App Development",
    description: "LodenLabs builds beautiful, high-quality web apps, mobile apps, and games.",
    url: "https://lodenlabs.com",
    siteName: "LodenLabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LodenLabs - Web & Mobile App Development",
    description: "LodenLabs builds beautiful, high-quality web apps, mobile apps, and games.",
    creator: "@jason_ganub",
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
