import { FC, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEME_KAY, Theme, ThemeContext } from "../lib/ThemeContext"

const defaulTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KAY) as Theme || Theme.LIGTH

const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaulTheme)

  const toggleTheme = () => {
    setTheme(Theme.DARK ? Theme.LIGTH : Theme.DARK)
  }

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider