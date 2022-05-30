import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { userLogout } from '../store/user/user.action'

export const AppHeader = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const loggedUser = useSelector((storeState) => storeState.userModule.user)

  const onLogout = () => {
    dispatch(userLogout())
    console.log('logged out successfuly')
  }

  return (
    <>
      {location.pathname !== '/preview' && (
        <header className='app-header flex justify-between align-center'>
          <Link to='/' className='clean-link logo'>
            <p className='logo'>webify</p>
          </Link>
          <div className='navbar flex justify-between gap-20'>
            <Link to='/templates' className='clean-link'>
              Templates
            </Link>
            <Link to='/editor' className='clean-link'>
              Editor
            </Link>
            {(!loggedUser) ? <Link to='/login' className='clean-link'>
              Login
            </Link>
            :
            <>
            <p>Welcome, {loggedUser.fullname}!</p>
            <Link to='/profile' className='clean-link'>
              Profile
            </Link>
            <Link to='/' onClick={onLogout} className='clean-link'>
              Logout
            </Link>
            </>}
          </div>
        </header>
      )}
    </>
  )
}
