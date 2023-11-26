import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KAY, Theme, ThemeContext } from "./ThemeContext"

interface useThemeResult {
  theme: Theme,
  toggleTheme: () => void;
}

export function useTheme(): useThemeResult {
  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGTH ? Theme.DARK : Theme.LIGTH
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KAY, newTheme)
  }

  return {theme, toggleTheme}
}