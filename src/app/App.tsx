import { Route, Routes, Link } from "react-router-dom"
import 'app/styles/index.scss'
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { Suspense } from "react"
import { classNames } from "shared/lib/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "./providers/router"

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change color</button>
      <br />
      <Link to={'/'}>Main</Link> 
      <br />
      <Link to={'/about'}>About</Link>
      <AppRouter />
    </div>
  )
}

export default App