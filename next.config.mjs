/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: '*.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-lostark.game.onstove.com',
      },
      {
        protocol: 'https',
        hostname: 'img.lostark.co.kr',
      },
    ],
  },
};

export default nextConfig;
