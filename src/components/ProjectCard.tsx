import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
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

export default function ProjectCard({ project }: ProjectCardProps) {
  const faviconUrl = getFaviconUrl(project.websiteUrl);

  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <div className="bg-[#111118] border border-[#1f1f2e] rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30">
        {/* Icon */}
        <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
          {faviconUrl ? (
            <Image
              src={faviconUrl}
              alt={`${project.title} icon`}
              width={64}
              height={64}
              className="w-full h-full object-contain"
              unoptimized
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white">
              {project.title.charAt(0)}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-gray-400 text-sm line-clamp-2 mb-4">
          {project.tagline}
        </p>

        {/* Tech stack preview */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs text-gray-500 bg-[#0a0a0f] px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
