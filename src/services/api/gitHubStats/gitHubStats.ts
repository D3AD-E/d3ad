import { Project } from "pages/Home/partials/ProjectsSection/ProjectsSection.types";
import {
  CACHE_INVAL_MS,
  GITHUB_API_URL,
  GITHUB_BASE_URL,
} from "./gitHubStats.consts";
import {
  getGithubStats,
  setGitHubStats,
} from "services/localStorage/themeStorage/themeStorage";

export const fetchGitHubStats = async (
  projects: Project[]
): Promise<Project[]> => {
  const cachedData = getGithubStats();
  const now = Date.now();

  return Promise.all(
    projects.map(async (project) => {
      if (!project.githubUrl) return project;

      try {
        const repoPath = project.githubUrl.replace(GITHUB_BASE_URL, "");
        const cacheKey = `gh-${repoPath}`;

        if (cachedData[cacheKey]?.timestamp > now - CACHE_INVAL_MS) {
          return {
            ...project,
            githubStats: cachedData[cacheKey].data,
          };
        }

        const response = await fetch(`${GITHUB_API_URL}repos/${repoPath}`);

        if (response.status === 403) {
          throw new Error("Rate limit exceeded");
        }

        if (!response.ok) throw new Error("GitHub API error");

        const data = await response.json();
        const stats = {
          stars: data.stargazers_count,
          forks: data.forks_count,
        };

        cachedData[cacheKey] = {
          timestamp: now,
          data: stats,
        };
        setGitHubStats(cachedData);

        return { ...project, githubStats: stats };
      } catch (error) {
        console.error("GitHub API error:", error);
        return project;
      }
    })
  );
};
