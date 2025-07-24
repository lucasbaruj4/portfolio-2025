// Utility function to get the correct asset path for both development and production
export function getAssetPath(path: string): string {
  // In production (GitHub Pages), we need to include the base path
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    if (isGitHubPages) {
      // Extract the repository name from the path
      const pathSegments = window.location.pathname.split('/');
      const repoName = pathSegments[1]; // e.g., "portfolio-2025"
      return `/${repoName}${path}`;
    }
  }
  
  // In development or other environments, use the path as-is
  return path;
} 