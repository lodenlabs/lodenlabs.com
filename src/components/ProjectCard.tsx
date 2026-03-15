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

function getCategoryLabel(category: Project['category']) {
  switch (category) {
    case 'web': return 'Web';
    case 'mobile': return 'Mobile';
    case 'game': return 'Game';
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const faviconUrl = getFaviconUrl(project.websiteUrl);
  const iconUrl = project.icon || faviconUrl;
  const isUpcoming = project.id.startsWith('upcoming');

  const cardContent = (
    <div className="experiment-card bg-[#111] border border-[#222] rounded-2xl p-6 h-full">
      <div className="flex items-start justify-between mb-5">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-[#222]">
          {iconUrl ? (
            <Image
              src={iconUrl}
              alt={`${project.title} icon`}
              width={48}
              height={48}
              className="w-full h-full object-contain"
              unoptimized
            />
          ) : (
            <span className="text-lg font-bold text-[#666]">
              {isUpcoming ? (project.category === 'game' ? 'G' : 'W') : project.title.charAt(0)}
            </span>
          )}
        </div>

        {/* Category pill */}
        <span className="pill">
          {getCategoryLabel(project.category)}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-1.5 tracking-tight">
        {project.title}
      </h3>

      {/* Tagline */}
      <p className="text-sm text-[#666] line-clamp-2 mb-5 leading-relaxed">
        {project.tagline}
      </p>

      {/* Tech stack */}
      {project.techStack.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs text-[#555] font-mono bg-[#0a0a0a] px-2 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Status for upcoming */}
      {isUpcoming && (
        <div className="flex items-center gap-2 mt-auto pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <span className="text-xs text-[#666] font-mono">In development</span>
        </div>
      )}

      {/* Arrow for active projects */}
      {!isUpcoming && (
        <div className="flex items-center justify-end mt-4 pt-4 border-t border-[#222]">
          <svg className="w-4 h-4 text-[#444] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      )}
    </div>
  );

  if (isUpcoming) {
    return <div className="block">{cardContent}</div>;
  }

  return (
    <Link href={`/projects/${project.id}`} className="group block">
      {cardContent}
    </Link>
  );
}
