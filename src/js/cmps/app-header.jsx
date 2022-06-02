import React, { useState } from 'react'
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

  const [isNavMenuShown, setisNavMenuShown] = useState(false)

  const onLogout = () => {
    dispatch(userLogout())
  }

  const onOpenNavMenu = () => {
    setisNavMenuShown(!isNavMenuShown)
  }

  const fixedClass = location.pathname === '/' ? 'fixed' : ''

  const editorClass = location.pathname.includes('/editor') ? 'in-editor' : ''

  if (
    // location.pathname === '/preview' ||
    location.pathname.includes('/publish')
  )
    return <></>
  return (
    <header className={fixedClass}>
      <div
        className={`
         ${isNavMenuShown ? 'header-nav-menu-open app-header flex justify-between align-center' : 'app-header flex justify-between align-center'} ${editorClass}`}
      >
        <Link to="/" className="clean-link logo">
          <p className="logo">webify</p>
        </Link>
        <MenuIcon className="menu-icon" onClick={onOpenNavMenu} />
        {isNavMenuShown && (
          <section className="main-menu-container">
            <Link to="/templates" className="clean-link" onClick={onOpenNavMenu}>
              Templates
            </Link>
            <Link to="/editor" className="clean-link" onClick={onOpenNavMenu}>
              Editor
            </Link>
            {!loggedUser ? (
            <Link to="/login" className="clean-link">
              Login
            </Link>
          ) : (
            <>
              <Link to="/dashboard" className="clean-link">
                Dashboard
              </Link>
              <Link to="/" onClick={onLogout} className="clean-link" style={{gap: '10px'}}>
                <LogoutIcon className="logout-svg" />
                Logout
              </Link>
            </>
          )}
          </section>
        )}
        <div className="navbar flex justify-between gap-20">
          <Link to="/templates" className="clean-link">
            Templates
          </Link>
          <Link to="/editor" className="clean-link">
            Editor
          </Link>
          {!loggedUser ? (
            <Link to="/login" className="clean-link">
              Login
            </Link>
          ) : (
            <>
              <Link to="/dashboard" className="clean-link">
                Dashboard
              </Link>
              <Link to="/" onClick={onLogout} className="clean-link logout-icon">
                <LogoutIcon className="logout-svg" />
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
