
import { MetadataRoute } from 'next';
import { posts } from '@/lib/blog';

const BASE_URL = 'https://thesilent.studioboom.online';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '/',
    '/mentorship',
    '/the-silent-studio',
    '/blog',
    '/editorial-resources',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/luxe-prompt-studio',
    '/the-oracle-luxe-agency',
    '/the-ugc-society',
    '/neuro-scoring',
    '/alpha-content',
    '/cine-ai-visual-director',
    '/resources',
    '/tutorials',
    '/brand-accelerator',
    '/support-ai-film'
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const blogPosts = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
  }));

  return [...staticPages, ...blogPosts];
}
