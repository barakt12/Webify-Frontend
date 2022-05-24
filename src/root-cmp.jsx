import { AppHeader } from './js/cmps/app-header.jsx'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes.js'
import './assets/styles/main.css'

export function App() {
  return (
    <div className='app'>
      <AppHeader />
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </div>
  )
}
