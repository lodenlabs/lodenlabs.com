import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getProjectById, getAllProjectIds } from '@/data/projects';
import ProjectLinks from '@/components/ProjectLinks';
import MobileMenu from '@/components/MobileMenu';
import logo from '@public/flask-logo.png';

interface PageProps {
  params: Promise<{ id: string }>;
}

function getFaviconUrl(websiteUrl: string | undefined): string | null {
  if (!websiteUrl) return null;
  try {
    const domain = new URL(websiteUrl).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const ids = getAllProjectIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: 'Project Not Found - Loden Labs',
    };
  }

  return {
    title: `${project.title} - Loden Labs`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} - Loden Labs`,
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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="nav-aurora fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-[#222]">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Left — Hamburger on mobile, links on desktop */}
          <MobileMenu links={[
            { href: '/#about', label: 'About' },
            { href: '/#experiments', label: 'Experiments' },
          ]} />
          <div className="hidden md:flex items-center gap-6">
            <Link href="/#about" className="text-base text-white hover:text-[#999] transition-colors">
              About
            </Link>
            <Link href="/#experiments" className="text-base text-white hover:text-[#999] transition-colors">
              Experiments
            </Link>
          </div>

          {/* Center — Logo (left-aligned on mobile, centered on desktop) */}
          <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center gap-1">
            <Image alt="" className="h-5 w-auto" src={logo} />
            <span className="text-lg font-medium tracking-tight leading-none">Loden Labs</span>
          </Link>

          {/* Right — Social icons */}
          <div className="flex items-center gap-4 md:gap-5">
            <a
              href="https://twitter.com/jason_ganub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#999] transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/jasonganub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#999] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/jasonganub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#999] transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20" />

      {/* Back link */}
      <div className="w-full max-w-3xl mx-auto px-6 pt-8">
        <Link href="/#experiments" className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          All experiments
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 pt-10 pb-12">
        <div className="w-full max-w-3xl mx-auto">
          <div className="flex items-start gap-5 mb-8">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden bg-[#111] border border-[#222] flex-shrink-0">
              {getFaviconUrl(project.websiteUrl) ? (
                <Image
                  src={getFaviconUrl(project.websiteUrl)!}
                  alt={`${project.title} icon`}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              ) : (
                <span className="text-2xl font-bold text-[#666]">
                  {project.title.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
                {project.title}
              </h1>
              <p className="text-[#666] text-lg">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-8">
            <span className="pill">{project.category === 'web' ? 'Web' : project.category === 'mobile' ? 'Mobile' : 'Game'}</span>
            <span className="text-xs text-[#666] font-mono">{project.releaseDate}</span>
          </div>

          {/* Links */}
          <ProjectLinks project={project} />
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-3xl mx-auto border-t border-[#222]" />

      {/* Description */}
      <section className="px-6 py-12">
        <div className="w-full max-w-3xl mx-auto">
          <span className="text-xs font-mono text-[#666] uppercase tracking-widest block mb-4">About</span>
          <p className="text-[#999] leading-relaxed text-lg">
            {project.description}
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      {project.techStack.length > 0 && (
        <>
          <div className="w-full max-w-3xl mx-auto border-t border-[#222]" />
          <section className="px-6 py-12">
            <div className="w-full max-w-3xl mx-auto">
              <span className="text-xs font-mono text-[#666] uppercase tracking-widest block mb-6">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-[#111] border border-[#222] rounded-full text-sm text-[#999] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Features */}
      {project.features.length > 0 && (
        <>
          <div className="w-full max-w-3xl mx-auto border-t border-[#222]" />
          <section className="px-6 py-12">
            <div className="w-full max-w-3xl mx-auto">
              <span className="text-xs font-mono text-[#666] uppercase tracking-widest block mb-6">Key Features</span>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-[#111] border border-[#222] rounded-xl"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                    <span className="text-sm text-[#999]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[#222] mt-12">
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#666] font-mono">
            &copy; {new Date().getFullYear()} Loden Labs
          </span>
          <div className="flex items-center gap-5">
            <a
              href="https://twitter.com/jason_ganub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/jasonganub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/jasonganub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
