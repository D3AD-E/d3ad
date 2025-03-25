import { GitHubRepoData } from "services/api/gitHubStats/gitHubStats.types";

export type Project = {
  title: string;
  description: string;
  tech: React.ReactNode[];
  achievements: string[];
  technologyUsed?: string[];
  githubUrl?: string;
  githubStats?: GitHubRepoData;
};
