import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.midjourney.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'studioboom.online',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'red-ibex-277532.hostingersite.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  async rewrites() {
    return [
      {
        source: '/bingo',
        destination: '/bingo/index.html',
      },
      {
        source: '/bingo-control-7788',
        destination: '/bingo/organizador-7788.html',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/bingo-control-7788',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet',
          },
        ],
      },
      {
        source: '/bingo/organizador-7788.html',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
