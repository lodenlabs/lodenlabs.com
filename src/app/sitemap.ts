import { MetadataRoute } from 'next';
import { getAllProjectIds } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectIds = getAllProjectIds().filter(id => !id.startsWith('upcoming'));

  const projectUrls = projectIds.map((id) => ({
    url: `https://lodenlabs.com/projects/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://lodenlabs.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectUrls,
  ];
}
