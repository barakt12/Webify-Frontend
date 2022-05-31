import React from 'react'

export function Cards() {
  return (
    <div className='home-page-cards'>
      <svg
        className='cards-white-block'
        width='1140'
        height='366'
        viewBox='0 0 1140 366'
        fill='none'
      >
        <g clipPath='url(#clip0)'>
          <path d='M-150 179H1293V427H-150V179Z' fill='white'></path>
          <path
            d='M612.5 27.6721C886.118 -18.7819 1111 0.499931 1290 31.9999V450.5H-150V27.6721C-150 27.6721 171.222 102.591 612.5 27.6721Z'
            fill='white'
          ></path>
        </g>
        <defs>
          <clipPath id='clip0'>
            <rect width='1140' height='365.5' fill='white'></rect>
          </clipPath>
        </defs>
      </svg>
      <div className='cards-bg-wave'>
        {' '}
        <div className='cards-right-wisp'></div>
        <h2>
          Introducing <span>Webify</span>
        </h2>
        <div className='line'></div>
      </div>
    </div>
  )
}
