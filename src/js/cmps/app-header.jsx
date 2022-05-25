import React from 'react'
import { Link } from 'react-router-dom'

export const AppHeader = () => {
  return (
    <header className='app-header flex justify-between align-center'>
      <Link to='/' className='clean-link'>
        <img src='' alt='Logo' />
      </Link>
      <div className='navbar flex justify-between gap-20'>
        <Link to='/templates' className='clean-link'>
          Templates
        </Link>
        <Link to='/editor' className='clean-link'>
          Editor
        </Link>
        <Link to='/profile' className='clean-link'>
          Profile
        </Link>
      </div>
      <button>Login</button>
    </header>
  )
}