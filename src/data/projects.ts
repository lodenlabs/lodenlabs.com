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
    id: "taskflow",
    title: "TaskFlow",
    tagline: "Streamline your team's productivity with intelligent task management",
    description: "TaskFlow is a modern project management platform designed for teams of all sizes. With intuitive kanban boards, real-time collaboration, and powerful automation features, TaskFlow helps teams stay organized and deliver projects on time. Built with a focus on simplicity and speed, it integrates seamlessly with your existing tools.",
    icon: "/icons/taskflow.png",
    screenshots: ["/screenshots/taskflow-1.png", "/screenshots/taskflow-2.png", "/screenshots/taskflow-3.png"],
    category: "web",
    websiteUrl: "https://taskflow.app",
    githubUrl: "https://github.com/lodenlabs/taskflow",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    releaseDate: "2024",
    features: [
      "Drag-and-drop kanban boards",
      "Real-time collaboration",
      "Custom workflow automation",
      "Team analytics dashboard"
    ]
  },
  {
    id: "fittrack",
    title: "FitTrack",
    tagline: "Your personal fitness companion for achieving health goals",
    description: "FitTrack is a comprehensive fitness tracking app that helps you monitor workouts, nutrition, and progress. With personalized workout plans, detailed analytics, and integration with popular fitness devices, FitTrack makes it easy to stay motivated and reach your fitness goals.",
    icon: "/icons/fittrack.png",
    screenshots: ["/screenshots/fittrack-1.png", "/screenshots/fittrack-2.png", "/screenshots/fittrack-3.png"],
    category: "mobile",
    appStoreUrl: "https://apps.apple.com/app/fittrack",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lodenlabs.fittrack",
    techStack: ["React Native", "TypeScript", "Firebase", "HealthKit"],
    releaseDate: "2024",
    features: [
      "Personalized workout plans",
      "Nutrition tracking & macros",
      "Progress photos & measurements",
      "Apple Watch & Fitbit sync"
    ]
  },
  {
    id: "weathernow",
    title: "WeatherNow",
    tagline: "Beautiful weather forecasts at a glance",
    description: "WeatherNow provides accurate, hyperlocal weather forecasts with a beautiful, intuitive interface. Get hourly and 10-day forecasts, severe weather alerts, and detailed radar maps. The minimalist design makes checking the weather a delightful experience.",
    icon: "/icons/weathernow.png",
    screenshots: ["/screenshots/weathernow-1.png", "/screenshots/weathernow-2.png", "/screenshots/weathernow-3.png"],
    category: "web",
    websiteUrl: "https://weathernow.io",
    techStack: ["React", "TypeScript", "OpenWeather API", "Mapbox"],
    releaseDate: "2023",
    features: [
      "Hyperlocal forecasts",
      "Interactive radar maps",
      "Severe weather alerts",
      "Beautiful minimal design"
    ]
  },
  {
    id: "stellar-run",
    title: "Stellar Run",
    tagline: "Race through the cosmos in this endless space adventure",
    description: "Stellar Run is an addictive endless runner set in a stunning sci-fi universe. Navigate through asteroid fields, collect power-ups, and unlock new ships as you race to set the highest score. Features procedurally generated levels and daily challenges.",
    icon: "/icons/stellar-run.png",
    screenshots: ["/screenshots/stellar-run-1.png", "/screenshots/stellar-run-2.png", "/screenshots/stellar-run-3.png"],
    category: "game",
    appStoreUrl: "https://apps.apple.com/app/stellar-run",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lodenlabs.stellarrun",
    techStack: ["Unity", "C#", "Firebase", "AdMob"],
    releaseDate: "2024",
    features: [
      "Procedurally generated levels",
      "20+ unlockable ships",
      "Daily challenges & leaderboards",
      "Stunning 3D graphics"
    ]
  },
  {
    id: "quicknotes",
    title: "QuickNotes",
    tagline: "Capture ideas instantly with markdown support",
    description: "QuickNotes is a fast, minimal note-taking app for people who think in markdown. With instant sync across devices, powerful search, and a distraction-free writing experience, QuickNotes helps you capture and organize your thoughts effortlessly.",
    icon: "/icons/quicknotes.png",
    screenshots: ["/screenshots/quicknotes-1.png", "/screenshots/quicknotes-2.png", "/screenshots/quicknotes-3.png"],
    category: "mobile",
    appStoreUrl: "https://apps.apple.com/app/quicknotes",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lodenlabs.quicknotes",
    techStack: ["Flutter", "Dart", "SQLite", "iCloud"],
    releaseDate: "2023",
    features: [
      "Full markdown support",
      "Instant cloud sync",
      "Powerful search",
      "Offline-first design"
    ]
  },
  {
    id: "puzzle-realms",
    title: "Puzzle Realms",
    tagline: "Solve mind-bending puzzles across magical worlds",
    description: "Puzzle Realms takes you on a journey through enchanted lands filled with challenging puzzles. Match gems, solve logic puzzles, and unlock new realms as you progress. With hundreds of levels and weekly events, there's always a new challenge waiting.",
    icon: "/icons/puzzle-realms.png",
    screenshots: ["/screenshots/puzzle-realms-1.png", "/screenshots/puzzle-realms-2.png", "/screenshots/puzzle-realms-3.png"],
    category: "game",
    appStoreUrl: "https://apps.apple.com/app/puzzle-realms",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lodenlabs.puzzlerealms",
    techStack: ["Unity", "C#", "PlayFab", "Unity Ads"],
    releaseDate: "2023",
    features: [
      "500+ unique puzzles",
      "6 magical realms to explore",
      "Weekly events & rewards",
      "No internet required"
    ]
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
