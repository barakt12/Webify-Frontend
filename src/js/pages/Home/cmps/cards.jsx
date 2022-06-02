import { Parallax } from 'react-scroll-parallax'

export const Cards = () => {
  return (
    <div className='home-page-cards'>
      <svg
        className='cards-white-block'
        width='0'
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
        <h1>Introducing</h1>
        <h1>webify</h1>
        <div className='line'></div>
        <div className='cards card1'>
          <div className='card-number-circle'>1</div>
          <div className='cards-left-box-container'>
            <h1>Themes</h1>
            <h1>Themes can change the feeling of your site</h1>
          </div>
          <div className='cards-right-box-container'>
            {/* <Parallax scale={[0.9, 1]}> */}
            <img
              src='https://res.cloudinary.com/do0lvumuv/image/upload/v1654107371/Teaser-webify_iqc8pq.jpg'
              alt=''
            />
            {/* <div className='card-shadow'></div> */}

            {/* </Parallax> */}
          </div>
          <div className='wave2-png'></div>
        </div>
        <div className='cards card2'>
          <div className='card-number-circle'>2</div>
          <div className='cards-left-box-container'>
            {/* <Parallax scale={[0.9, 1]}> */}
            <img
              src='https://res.cloudinary.com/do0lvumuv/image/upload/v1654112005/Screenshot_16_wj1znr.jpg'
              alt=''
            />
            {/* <div className='card-shadow'></div> */}
            {/* </Parallax> */}
          </div>
          <div className='cards-right-box-container'>
            <h1>Elements</h1>
            <h1>Easily add elements to your site by dragging and dropping</h1>
          </div>
        </div>
      </div>
      <div className='cards card3'>
        <div className='card-number-circle'>3</div>
        <div className='cards-left-box-container'>
          <h1>Hello text 3</h1>
        </div>
        <div className='cards-right-box-container'>
          {/* <Parallax scale={[0.9, 1]}> */}
          <img
            src='https://res.cloudinary.com/do0lvumuv/image/upload/v1654107371/Teaser-webify_iqc8pq.jpg'
            alt=''
          />

          {/* <div className='card-shadow'></div> */}

          {/* </Parallax> */}
        </div>
      </div>
      <div className='cards card4'>
        <div className='card-number-circle'>4</div>
        <div className='cards-left-box-container'>
          <img
            src='https://res.cloudinary.com/do0lvumuv/image/upload/v1654112005/Screenshot_16_wj1znr.jpg'
            alt=''
          />
          {/* <div className='card-shadow'></div> */}
        </div>
        <div className='cards-right-box-container'>
          <h1>Hello text 4</h1>
        </div>
      </div>
    </div>
  )
}
