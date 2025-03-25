import { STORAGE_GITHUB_STATS, STORAGE_KEY_THEME } from "./themeStorage.consts";
import { Theme } from "./themeStorage.types";

export const getCurrentTheme = (): Theme | null => {
  const theme = localStorage.getItem(STORAGE_KEY_THEME);
  return theme === Theme.Light || theme === Theme.Dark
    ? (theme as Theme)
    : null;
};

export const setCurrentTheme = (theme: Theme) => {
  localStorage.setItem(STORAGE_KEY_THEME, theme);
};

export const getGithubStats = () => {
  const cache = localStorage.getItem(STORAGE_GITHUB_STATS);
  const cachedData = cache ? JSON.parse(cache) : {};
  return cachedData;
};

export const setGitHubStats = (stats: object) => {
  localStorage.setItem(STORAGE_GITHUB_STATS, JSON.stringify(stats));
};
