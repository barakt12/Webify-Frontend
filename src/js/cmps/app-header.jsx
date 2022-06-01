import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { userLogout } from '../store/user/user.action'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout'

export const AppHeader = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const loggedUser = useSelector((storeState) => storeState.userModule.user)

  const onLogout = () => {
    dispatch(userLogout())
  }

  return (
    <>
      {location.pathname !== '/preview' && (
        <header className='app-header flex justify-between align-center'>
          <Link to='/' className='clean-link logo'>
            <p className='logo'>webify</p>
          </Link>
          <MenuIcon className='menu-icon' />
          {/* <section className="main-menu-container">
            <h1>test1</h1>
            <h1>test2</h1>
            <h1>test3</h1>
          </section> */}
          <div className='navbar flex justify-between gap-20'>
            <Link to='/templates' className='clean-link'>
              Templates
            </Link>
            <Link to='/editor' className='clean-link'>
              Editor
            </Link>
            {!loggedUser ? (
              <Link to='/login' className='clean-link'>
                Login
              </Link>
            ) : (
              <>
                <Link to='/profile' className='clean-link'>
                  Profile
                </Link>
                <p>Welcome, {loggedUser.fullname.split(' ')[0]}!</p>
                <Link
                  to='/'
                  onClick={onLogout}
                  className='clean-link logout-icon'
                >
                  <LogoutIcon className='logout-svg' />
                </Link>
              </>
            )}
          </div>
        </header>
      )}
    </>
  )
}
