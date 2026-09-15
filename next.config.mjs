/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/founder',
        destination: '/#team',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/#pricing',
        permanent: true,
      },
      {
        source: '/demo',
        destination: '/',
        permanent: true,
      },
      {
        source: '/generator',
        destination: '/',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
