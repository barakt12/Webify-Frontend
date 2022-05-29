import React from 'react'
import { useNavigate } from 'react-router'

export function Hero() {
  const navigate = useNavigate()
  return (
    <div className='home-page-hero'>
      <h1>Turning ideas into websites</h1>
      <p>Webify is a simple & elegant platform for creating websites!</p>
      <button onClick={() => navigate('/templates')}>
        Start building your page!
      </button>
    </div>
  )
}
