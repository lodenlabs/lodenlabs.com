import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';
import logo from '@public/flask-logo.png'

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://lodenlabs.com/#person",
      "name": "Jason Loden Ganub",
      "url": "https://lodenlabs.com",
      "sameAs": [
        "https://twitter.com/jason_ganub"
      ],
      "jobTitle": "Software Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "LodenLabs"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://lodenlabs.com/#organization",
      "name": "LodenLabs",
      "url": "https://lodenlabs.com",
      "founder": {
        "@id": "https://lodenlabs.com/#person"
      },
      "description": "LodenLabs builds beautiful web apps, mobile apps, and games."
    },
    {
      "@type": "WebSite",
      "name": "LodenLabs",
      "url": "https://lodenlabs.com",
      "author": {
        "@id": "https://lodenlabs.com/#person"
      }
    }
  ]
};

export default function Home() {
  const activeProjects = projects.filter(p => !p.id.startsWith('upcoming'));
  const upcomingProjects = projects.filter(p => p.id.startsWith('upcoming'));

  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#222]">
        <div className="w-full max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left — Nav links */}
          <div className="flex items-center gap-6">
            <Link href="#about" className="text-base text-[#999] hover:text-white transition-colors">
              About
            </Link>
            <Link href="#experiments" className="text-base text-[#999] hover:text-white transition-colors">
              Experiments
            </Link>
          </div>

          {/* Center — Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
            <Image alt="" className="h-5 w-auto" src={logo} />
            <span className="text-lg font-medium tracking-tight leading-none">Loden Labs</span>
          </Link>

          {/* Right — Social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://twitter.com/jason_ganub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999] hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/jasonganub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999] hover:text-white transition-colors"
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
              className="text-[#999] hover:text-white transition-colors"
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

      {/* Hero */}
      <section className="pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="w-full max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-mono text-[#666] uppercase tracking-widest">Active experiments</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            Loden Labs
          </h1>
          <p className="text-lg md:text-xl text-[#666] max-w-xl mx-auto leading-relaxed mb-10">
            Experimental projects by Jason Loden Ganub
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="#experiments"
              className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-[#e0e0e0] transition-colors"
            >
              View experiments
            </Link>
            <a
              href="https://twitter.com/jason_ganub"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[#333] text-sm font-medium rounded-full hover:border-[#555] hover:text-white text-[#999] transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-7xl mx-auto px-6"><div className="border-t border-[#222]" /></div>

      {/* Experiments Section */}
      <section id="experiments" className="py-20 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono text-[#666] uppercase tracking-widest block mb-3">Projects</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experiments</h2>
            </div>
            <span className="text-sm text-[#666] font-mono">{projects.length} total</span>
          </div>

          {/* Active Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Upcoming */}
          {upcomingProjects.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="text-xs font-mono text-[#666] uppercase tracking-widest">Coming soon</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {upcomingProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-7xl mx-auto px-6"><div className="border-t border-[#222]" /></div>

      {/* About */}
      <section id="about" className="py-20 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-[#666] uppercase tracking-widest block mb-3">About</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              The Lab
            </h2>
            <p className="text-[#999] leading-relaxed mb-4">
              I&apos;m Jason Loden Ganub, a solo developer building software experiments.
              From concept to launch, I focus on creating products that are
              both well-designed and functional.
            </p>
            <p className="text-[#999] leading-relaxed mb-8">
              Whether it&apos;s a web application, mobile app, or game; each project
              is an experiment in building something useful.
            </p>
            <a
              href="https://twitter.com/jason_ganub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white hover:text-[#999] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @jason_ganub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#222]">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
