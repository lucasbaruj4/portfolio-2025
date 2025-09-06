import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  // Only apply GitHub Pages config in production
  ...(isDevelopment ? {} : {
    output: 'export', // Enables static HTML export for GitHub Pages
    basePath: '/portfolio-2025', // Repository name for GitHub Pages
    assetPrefix: '/portfolio-2025/', // Ensures all assets are prefixed correctly
    trailingSlash: true, // Required for GitHub Pages
  }),
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