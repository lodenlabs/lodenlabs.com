export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  screenshots: string[];
  category: 'web' | 'mobile' | 'game';
  appStoreUrl?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
  githubUrl?: string;
  techStack: string[];
  releaseDate: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "inklist",
    title: "InkList",
    tagline: "Where Art Meets Skin",
    description: "InkList is a global platform designed to connect people with tattoo artists and studios worldwide. Browse artist portfolios, discover different tattoo styles, and book appointments. The platform offers verified artists, detailed portfolios, and streamlined booking capabilities across the tattoo community.",
    icon: "/icons/inklist.png",
    screenshots: [],
    category: "web",
    websiteUrl: "https://inklist.io",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    releaseDate: "2025",
    features: [
      "Browse artist portfolios",
      "Discover tattoo styles",
      "Book appointments",
      "Verified artists & studios"
    ]
  },
  {
    id: "tixvalidator",
    title: "TixValidator",
    tagline: "Verify Ticketmaster Tickets Instantly",
    description: "TixValidator protects ticket buyers from counterfeit Ticketmaster tickets. Upload your PDF ticket for instant authenticity verification using advanced analysis technology. Never get scammed buying tickets again.",
    icon: "/icons/tixvalidator.png",
    screenshots: [],
    category: "web",
    websiteUrl: "https://tixvalidator.com",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    releaseDate: "2025",
    features: [
      "Instant ticket verification",
      "PDF analysis technology",
      "Secure & private processing",
      "Global Ticketmaster support"
    ]
  },
  {
    id: "upcoming",
    title: "Upcoming",
    tagline: "A mobile game is brewing...",
    description: "Something fun is in the works. Stay tuned!",
    icon: "",
    screenshots: [],
    category: "game",
    techStack: [],
    releaseDate: "Coming Soon",
    features: []
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(project => project.category === category);
}
