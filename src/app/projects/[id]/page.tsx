import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { getProjectById, getAllProjectIds } from '@/data/projects';
import ProjectLinks from '@/components/ProjectLinks';

interface PageProps {
  params: Promise<{ id: string }>;
}

const categoryColors = {
  web: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  mobile: 'bg-green-500/20 text-green-400 border-green-500/30',
  game: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

const categoryLabels = {
  web: 'Web App',
  mobile: 'Mobile App',
  game: 'Game',
};

export async function generateStaticParams() {
  const ids = getAllProjectIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: 'Project Not Found - LodenLabs',
    };
  }

  return {
    title: `${project.title} - LodenLabs`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} - LodenLabs`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#1f1f2e]">
        <div className="w-full max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <svg className="w-8 h-8" viewBox="0 0 32 32">
              <defs>
                <linearGradient id="nav-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1"/>
                  <stop offset="100%" stopColor="#a855f7"/>
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="6" fill="url(#nav-grad)"/>
              <text x="16" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="700" fill="white" textAnchor="middle">LL</text>
            </svg>
            LodenLabs
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#projects" className="text-gray-400 hover:text-white transition-colors text-sm">
              Projects
            </Link>
            <Link href="/#about" className="text-gray-400 hover:text-white transition-colors text-sm">
              About
            </Link>
            <a
              href="https://twitter.com/jason_ganub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16"></div>

      {/* Hero */}
      <section className="gradient-bg px-6 py-16 md:py-20">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-white shadow-xl">
            {project.title.charAt(0)}
          </div>

          {/* Category badge */}
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium border mb-4 ${categoryColors[project.category]}`}>
            {categoryLabels[project.category]}
          </span>

          {/* Title & Tagline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 mb-2">
            {project.tagline}
          </p>
          <p className="text-gray-500 mb-8">
            Released {project.releaseDate}
          </p>

          {/* Links */}
          <ProjectLinks project={project} />
        </div>
      </section>

      {/* Description */}
      <section className="px-6 py-16">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            {project.description}
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-16 bg-[#111118]/50">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-[#111118] border border-[#1f1f2e] rounded-lg text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-[#111118] border border-[#1f1f2e] rounded-xl"
              >
                <svg className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots placeholder */}
      <section className="px-6 py-16 bg-[#111118]/50">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Screenshots</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 h-48 bg-[#111118] border border-[#1f1f2e] rounded-xl flex items-center justify-center snap-center"
              >
                <span className="text-gray-600">Screenshot {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to try {project.title}?</h2>
          <p className="text-gray-400 mb-8">
            Get started today and see what {project.title} can do for you.
          </p>
          <ProjectLinks project={project} />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[#1f1f2e]">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} LodenLabs by Jason Loden Ganub. All rights reserved.
            </div>
            <a
              href="https://twitter.com/jason_ganub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              @jason_ganub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
