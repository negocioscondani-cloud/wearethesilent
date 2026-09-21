
import { MetadataRoute } from 'next';

const BASE_URL = 'https://thesilent.studioboom.online';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/dashboard/', 
        '/the-silent-studio-guide/', 
        '/secret-access-portal/',
        '/the-hidden-gate/',
        '/bingo-control-7788/',
        '/bingo/organizador-7788.html'
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
