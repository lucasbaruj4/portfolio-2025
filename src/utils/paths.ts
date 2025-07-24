// Utility function to get the correct asset path for both development and production
export function getAssetPath(path: string): string {
  // Check if we're in production build
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (isProduction) {
    // In production, always include the base path for GitHub Pages
    return `/portfolio-2025${path}`;
  }
  
  // In development, use the path as-is
  return path;
} 