import React from 'react'

export const Loader = ({ displayMsg }) => {
  return (
    <div className='screen flex justify-center align-center'>
      <h2>{displayMsg}</h2>
      <div className='wrapper'>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='shadow'></div>
        <div className='shadow'></div>
        <div className='shadow'></div>
      </div>
    </div>
  )
}
