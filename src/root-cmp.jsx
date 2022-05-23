import { AppHeader } from './js/cmps/app-header.jsx'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes.js'
import { Home } from './js/pages/Home/home.jsx'

export function App() {
  return (
    <div className='app'>
      {/* <AppHeader /> */}
      <Home />
      {/* <Routes> */}
      {/* <Route path='/' element={<Home />} /> */}
      {/* </Routes> */}
    </div>
  )
}

{
  /* {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.component />} />
        ))} */
}
