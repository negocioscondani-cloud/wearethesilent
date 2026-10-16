import { MetadataRoute } from 'next';
import { posts } from '@/lib/blog';

const BASE_URL = 'https://wearethesilent.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const highPriorityRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/oferta', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/influencer-ia', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/vivianne-wolski', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/domingo', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    { route: '/galeria', priority: 0.8, changeFrequency: 'weekly' as const },
  ];

  const secondaryRoutes = [
    '/the-silent-studio',
    '/mentorship',
    '/editorial-resources',
    '/contact',
    '/luxe-prompt-studio',
    '/the-oracle-luxe-agency',
    '/the-ugc-society',
    '/neuro-scoring',
    '/alpha-content',
    '/cine-ai-visual-director',
    '/resources',
    '/tutorials',
    '/brand-accelerator',
    '/support-ai-film',
  ];

  const legalRoutes = [
    '/terms-of-service',
    '/privacy-policy',
    '/cookie-policy',
    '/refund-policy',
    '/legal-notice',
  ];

  const now = new Date().toISOString();

  const primaryEntries: MetadataRoute.Sitemap = highPriorityRoutes.map((item) => ({
    url: `${BASE_URL}${item.route}`,
    lastModified: now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const secondaryEntries: MetadataRoute.Sitemap = secondaryRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const legalEntries: MetadataRoute.Sitemap = legalRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.4,
  }));

  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...primaryEntries, ...blogPosts, ...secondaryEntries, ...legalEntries];
}
