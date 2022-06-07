import { v4 as uuidv4 } from 'uuid'

export const headerCmp7 = {
  name: 'wap-header-7',
  type: 'container',
  category: 'header',
  themePalette: 'primary',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/header/wap-header-7.JPG'),
  style: {
    backgroundColor: '#f9db79',
  },
  cmps: [
    {
      type: 'container',
      name: 'first-header-container',
      id: uuidv4(),
      style: {},
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: '500 Terry Francois Street San Francisco, CA 94158  |  Daily 10AM-10PM',
          },
          style: {
            fontSize: '1rem',
          },
        },
      ],
    },
    {
      type: 'container',
      name: 'second-header-container',
      id: uuidv4(),
      style: {},
      cmps: [
        {
          type: 'container',
          name: 'first-nav-bar',
          id: uuidv4(),
          style: {},
          cmps: [
            {
              type: 'svg',
              name: 'hamburger-container',
              id: uuidv4(),
              info: {
                svg: `<svg
                    fill='#000000'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 50 50'
                    width='50px'
                    height='50px'
                  >
                    <path d='M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z' />
                  </svg>`,
                // imgUrl:
                //   require('../../../assets/img/illustrations/menu-icon.svg')
                //     .default,
              },
              style: {},
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'FLAVORS',
              },
              style: {},
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'ORDER ONLINE',
              },
              style: {},
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'BOOK AN EVENT',
              },
              style: {},
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'ABOUT',
              },
              style: {},
            },
          ],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Gelato',
          },
          style: {
            fontSize: '3rem',
          },
        },
        {
          type: 'container',
          name: 'second-nav-bar',
          id: uuidv4(),
          style: {},
          cmps: [
            {
              name: 'instagram-icon',
              type: 'svg',
              id: uuidv4(),
              info: {
                svg: `<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 15 2 C 7.832 2 2 7.832 2 15 C 2 22.168 7.832 28 15 28 C 22.168 28 28 22.168 28 15 C 28 7.832 22.168 2 15 2 z M 11.666016 6 L 18.332031 6 C 21.457031 6 24 8.5420156 24 11.666016 L 24 18.332031 C 24 21.457031 21.457984 24 18.333984 24 L 11.667969 24 C 8.5429688 24 6 21.457984 6 18.333984 L 6 11.667969 C 6 8.5429688 8.5420156 6 11.666016 6 z M 11.666016 8 C 9.6450156 8 8 9.6459688 8 11.667969 L 8 18.333984 C 8 20.354984 9.6459688 22 11.667969 22 L 18.333984 22 C 20.354984 22 22 20.354031 22 18.332031 L 22 11.666016 C 22 9.6450156 20.354031 8 18.332031 8 L 11.666016 8 z M 19.667969 9.6660156 C 20.035969 9.6660156 20.333984 9.9640312 20.333984 10.332031 C 20.333984 10.700031 20.035969 11 19.667969 11 C 19.299969 11 19 10.700031 19 10.332031 C 19 9.9640312 19.299969 9.6660156 19.667969 9.6660156 z M 15 10 C 17.757 10 20 12.243 20 15 C 20 17.757 17.757 20 15 20 C 12.243 20 10 17.757 10 15 C 10 12.243 12.243 10 15 10 z M 15 12 A 3 3 0 0 0 15 18 A 3 3 0 0 0 15 12 z"/></svg>`,
              },
              cmps: [],
            },
            {
              type: 'svg',
              name: 'twitter-icon',
              id: uuidv4(),
              info: {
                svg: '<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21.464,12.535 c0.006,0.133,0.009,0.265,0.009,0.397c0,4.068-3.095,8.756-8.756,8.756c-1.739,0-3.356-0.509-4.717-1.383 c0.241,0.029,0.486,0.042,0.735,0.042c1.443,0,2.769-0.491,3.821-1.318c-1.347-0.025-2.484-0.915-2.875-2.137 c0.188,0.036,0.381,0.055,0.579,0.055c0.281,0,0.554-0.038,0.811-0.108c-1.408-0.282-2.469-1.526-2.469-3.017 c0-0.013,0-0.026,0-0.039c0.415,0.231,0.889,0.369,1.394,0.385c-0.825-0.551-1.369-1.494-1.369-2.561 c0-0.565,0.151-1.094,0.416-1.547c1.518,1.862,3.786,3.088,6.343,3.216c-0.052-0.225-0.079-0.46-0.079-0.701 c0-1.699,1.378-3.078,3.077-3.078c0.885,0,1.685,0.374,2.246,0.972c0.701-0.139,1.36-0.394,1.955-0.747 c-0.23,0.719-0.718,1.321-1.354,1.703c0.622-0.074,1.215-0.239,1.768-0.484C22.588,11.559,22.067,12.1,21.464,12.535z"/></svg>',
              },
              cmps: [],
            },
            {
              id: uuidv4(),
              type: 'svg',
              name: 'facebook-icon',
              info: {
                svg: `<?xml version="1.0"?><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/></svg>`,
              },
              cmps: [],
            },
          ],
        },
      ],
    },
  ],
}
