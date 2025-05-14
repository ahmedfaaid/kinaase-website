import type { MetadataRoute } from 'next';
import { kinaaseUrl } from '../lib/constants';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url:
        process.env.NODE_ENV === 'production'
          ? kinaaseUrl
          : 'http://localhost:3000',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0
    },
    {
      url: `${process.env.NODE_ENV === 'production' ? kinaaseUrl : 'http://localhost:3000'}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${process.env.NODE_ENV === 'production' ? kinaaseUrl : 'http://localhost:3000'}/corporate-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${process.env.NODE_ENV === 'production' ? kinaaseUrl : 'http://localhost:3000'}/technology-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${process.env.NODE_ENV === 'production' ? kinaaseUrl : 'http://localhost:3000'}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${process.env.NODE_ENV === 'production' ? kinaaseUrl : 'http://localhost:3000'}/leadership`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7
    },
    {
      url: `${process.env.NODE_ENV === 'production' ? kinaaseUrl : 'http://localhost:3000'}/products/invenza`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7
    }
  ];
}
