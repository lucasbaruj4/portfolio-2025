import { Project } from "@/types/project";

const GITHUB_USERNAME = "lucasbaruj4";
const REPOS = [
  "climate_analysis",
  "ecommerce-sales-prediction",
  "freetime"
];

const GITHUB_API_URL = "https://api.github.com/repos/";

export async function getGithubProjects(): Promise<Project[]> {
  const token = process.env.GITHUB_PAT;
  if (!token) {
    console.error("GITHUB_PAT is not set in environment variables.");
    return [];
  }

  const headers = {
    Authorization: `token ${token}`,
    Accept: "application/vnd.github+json",
  };

  const projects: Project[] = [];

  for (const repo of REPOS) {
    try {
      const res = await fetch(`${GITHUB_API_URL}${GITHUB_USERNAME}/${repo}`, {
        headers,
        next: { revalidate: 3600 }, // cache for 1 hour
      });
      if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
      const data = await res.json();

      // Fetch topics (separate endpoint)
      const topicsRes = await fetch(`${GITHUB_API_URL}${GITHUB_USERNAME}/${repo}/topics`, {
        headers: { ...headers, Accept: "application/vnd.github.mercy-preview+json" },
      });
      const topicsData = topicsRes.ok ? await topicsRes.json() : { names: [] };

      projects.push({
        id: data.id,
        title: data.name,
        description: data.description || "No description provided.",
        imageUrl: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo}/main/social-preview.png`,
        tags: Array.isArray(topicsData.names) ? topicsData.names : [],
        liveUrl: data.homepage || "",
        sourceUrl: data.html_url,
      });
    } catch (err) {
      console.error(`Failed to fetch repo '${repo}':`, err);
    }
  }

  return projects;
} 