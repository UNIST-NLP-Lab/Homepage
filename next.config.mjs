/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 정적 사이트로 변환
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
