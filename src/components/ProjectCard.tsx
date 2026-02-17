import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
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

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <div className="bg-[#111118] border border-[#1f1f2e] rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30">
        {/* Icon placeholder */}
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 text-2xl font-bold text-white">
          {project.title.charAt(0)}
        </div>

        {/* Category badge */}
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-3 ${categoryColors[project.category]}`}>
          {categoryLabels[project.category]}
        </span>

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
