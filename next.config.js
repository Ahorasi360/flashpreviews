/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'flashpreviewsconsultinggroup.com' }],
        destination: 'https://www.flashpreviewsconsultinggroup.com/:path*',
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
