import { STORAGE_KEY_THEME } from "./themeStorage.consts";
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
