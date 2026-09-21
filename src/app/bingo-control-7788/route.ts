import { organizadorHtml } from '@/lib/organizador-html';

export const dynamic = 'force-static';

export async function GET() {
  return new Response(organizadorHtml, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet',
    },
  });
}
