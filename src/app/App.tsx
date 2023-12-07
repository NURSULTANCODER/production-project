import { Route, Routes, Link } from "react-router-dom"
import 'app/styles/index.scss'
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { Suspense } from "react"
import { classNames } from "shared/lib/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "./providers/router"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"


const App = () => {
  const {theme} = useTheme()

  return (
    <Suspense fallback={""}>
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  )
}

export default App