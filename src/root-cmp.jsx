import { AppHeader } from './js/cmps/app-header.jsx'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { socketService } from './js/services/socket.service.js'
import { toast } from 'react-toastify'

export function App() {
  const { user } = useSelector((storeState) => storeState.userModule)

  useEffect(() => {
    if (user) {
      socketService.setup()
      socketService.emit('user_logged', user._id)
      socketService.on('new_subscriber', () => {
        toast.success('You got a new subscriber!')
      })
    }
  }, [user])

  return (
    <div className='app'>
      <AppHeader />
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme={'dark'}
      />
    </div>
  )
}
