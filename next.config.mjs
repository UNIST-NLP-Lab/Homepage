/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // GitHub Pages에 필요한 경로 형식
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
