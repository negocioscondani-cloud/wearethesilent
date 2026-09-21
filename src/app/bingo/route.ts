import { bingoHtml } from '@/lib/bingo-html';

export const dynamic = 'force-static';

export async function GET() {
  return new Response(bingoHtml, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
