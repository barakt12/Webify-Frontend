import React from 'react'
import { useNavigate } from 'react-router'
// import Computer from '../../../../assets/img/illustrations/Computer.svg'
import Storm from '../../../../assets/img/illustrations/storm.png'
export function Hero() {
  const navigate = useNavigate()
  return (
    <div className='home-page-hero-container'>
      <div className='home-page-hero'>
        <h1>Turning ideas into websites</h1>
        <p>Webify is a simple & elegant platform for creating websites!</p>
        <button onClick={() => navigate('/templates')}>
          Start building your page!
        </button>
      </div>
      <div className='wave2-png'></div>
      <img className='storm-png' src={Storm} alt='' />
      <div className='monk-png'></div>
    </div>
  )
}
