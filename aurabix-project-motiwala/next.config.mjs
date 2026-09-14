/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85, 100],
    minimumCacheTTL: 2678400, // 31 days
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
