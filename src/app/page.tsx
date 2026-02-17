import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
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
            <Link href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">
              Projects
            </Link>
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
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

      {/* Hero Section */}
      <section className="gradient-bg px-6 py-24 md:py-32">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Building
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> digital </span>
            experiences
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            LodenLabs crafts beautiful web apps, mobile apps, and games.
            Turning ideas into polished products that people love to use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#projects"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors text-center"
            >
              View Projects
            </Link>
            <a
              href="mailto:hello@lodenlabs.com"
              className="px-8 py-3 bg-transparent border border-gray-700 hover:border-gray-500 text-white font-medium rounded-xl transition-colors text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A collection of web apps, mobile apps, and games I&apos;ve built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-[#111118]/50">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About LodenLabs
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I&apos;m a solo developer passionate about building great software.
                From concept to launch, I focus on creating products that are
                both beautiful and functional.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether it&apos;s a web application, mobile app, or game, I bring the
                same level of care and attention to detail to everything I build.
              </p>
              <a
                href="mailto:hello@lodenlabs.com"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Get in touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#111118] border border-[#1f1f2e] rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-1">6+</div>
                <div className="text-gray-500 text-sm">Projects</div>
              </div>
              <div className="bg-[#111118] border border-[#1f1f2e] rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-1">3</div>
                <div className="text-gray-500 text-sm">Platforms</div>
              </div>
              <div className="bg-[#111118] border border-[#1f1f2e] rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-gray-500 text-sm">Passion</div>
              </div>
              <div className="bg-[#111118] border border-[#1f1f2e] rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-gray-500 text-sm">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[#1f1f2e]">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} LodenLabs. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="mailto:hello@lodenlabs.com"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                hello@lodenlabs.com
              </a>
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
        </div>
      </footer>
    </div>
  );
}
