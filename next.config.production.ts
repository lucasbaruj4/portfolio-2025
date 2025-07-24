import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static HTML export for GitHub Pages
  basePath: '/lucas-portfolio-fresh', // Repository name for GitHub Pages
  trailingSlash: true, // Required for GitHub Pages
  images: {
    unoptimized: true, // Disable Image Optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig; 