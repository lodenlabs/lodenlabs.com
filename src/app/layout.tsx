import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "LodenLabs by Jason Ganub - Web & Mobile App Development",
  description: "LodenLabs by Jason Ganub builds beautiful, high-quality web apps, mobile apps, and games. Explore the portfolio of a passionate solo developer.",
  keywords: ["Jason Ganub", "LodenLabs", "web development", "mobile apps", "games", "software development", "indie developer"],
  authors: [{ name: "Jason Ganub" }],
  creator: "Jason Ganub",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "LodenLabs by Jason Ganub - Web & Mobile App Development",
    description: "Jason Ganub builds beautiful web apps, mobile apps, and games at LodenLabs.",
    url: "https://lodenlabs.com",
    siteName: "LodenLabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LodenLabs by Jason Ganub",
    description: "Jason Ganub builds beautiful web apps, mobile apps, and games at LodenLabs.",
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
