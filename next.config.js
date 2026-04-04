/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'd2xsxph8kpxj0f.cloudfront.net' },
    ],
  },
};
module.exports = nextConfig;
