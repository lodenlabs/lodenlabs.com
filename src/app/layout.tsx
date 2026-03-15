import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lodenlabs.com"),
  title: "Loden Labs",
  description: "Experimental projects by Jason Loden Ganub. Web apps, mobile apps, and games.",
  keywords: ["Loden Labs", "Loden Labs", "lodenlabs", "Jason Loden Ganub", "Jason Ganub", "Digital Alchemy", "web development", "mobile apps", "games", "indie developer", "software developer"],
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
    title: "Loden Labs",
    description: "Experimental projects by Jason Loden Ganub.",
    url: "https://lodenlabs.com",
    siteName: "Loden Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loden Labs",
    description: "Experimental projects by Jason Loden Ganub.",
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
