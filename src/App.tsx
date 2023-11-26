import { Route, Routes, Link } from "react-router-dom"
import Counter from "./components/Counter"
import './styles/index.scss'
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { Suspense } from "react"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change color</button>
      <br />
      <Link to={'/'}>Main</Link> 
      <br />
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageAsync />} />
          <Route path={'/about'} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App