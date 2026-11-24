import { MetadataRoute } from 'next';

const BASE_URL = 'https://wearethesilent.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin',
        '/admin/',
        '/audios/admin',
        '/audios/admin/',
        '/dashboard/',
        '/the-silent-studio-guide/',
        '/secret-access-portal/',
        '/the-hidden-gate/',
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
