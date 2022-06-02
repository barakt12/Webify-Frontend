import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { userLogout } from '../store/user/user.action'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout'
import { toast } from 'react-toastify'

export const AppHeader = ({ isCopy }) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const loggedUser = useSelector((storeState) => storeState.userModule.user)

  const [isNavMenuShown, setisNavMenuShown] = useState(false)
  useEffect(() => {
    if (location.pathname === '/') {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (!entries[0]?.isIntersecting) {
            document.querySelector('.home-header-copy').classList.add('fixed')
          } else {
            document.querySelector('.home-header-copy').classList.remove('fixed')
          }
        },
        { threshold: 0.1 }
      )

      intersectionObserver.observe(document.querySelector('.home-page-hero-container'))
    }
  }, [])

  const onLogout = () => {
    dispatch(userLogout())
    toast.success('Logged Out Successfully')
  }

  const onOpenNavMenu = () => {
    setisNavMenuShown(!isNavMenuShown)
  }
  const editorClass = location.pathname.includes('/editor') ? 'in-editor' : ''
  const copyClass = isCopy ? 'home-header-copy' : ''
  if (location.pathname.includes('/preview') || location.pathname.includes('/publish')) return <></>
  return (
    <header className={copyClass}>
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
              <Link to="/login" className="clean-link" onClick={onOpenNavMenu}>
                Login
              </Link>
            ) : (
              <>
                <Link to="/dashboard" className="clean-link" onClick={onOpenNavMenu}>
                  Dashboard
                </Link>
                <Link to="/" onClick={onLogout} className="clean-link" style={{ gap: '10px' }} onClick={onOpenNavMenu}>
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
              <p className="welcome-msg">
                {loggedUser?.username && <p>Hello {loggedUser.fullname.split(' ')[0]}</p>}
                <Link to="/" onClick={onLogout} className="clean-link logout-icon">
                  <LogoutIcon className="logout-svg" titleAccess="Logout" />
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
