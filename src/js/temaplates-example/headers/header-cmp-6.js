import { v4 as uuidv4 } from 'uuid'

export const headerCmp6 = {
  name: 'header-cmp-6',
  type: 'container',
  category: 'header',
  themePalette: 'primary',
  id: uuidv4(),
  thumbnail: 'https://res.cloudinary.com/dnv7wszu3/image/upload/v1654340062/wap-header-6_ep2hyj.jpg',
  style: {},
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      name: 'logo',
      info: {
        txt: 'Ashly.',
      },
    },
    {
      type: 'container',
      id: uuidv4(),
      name: 'nav-bar',
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Home',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'My Vlog',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'My Story',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Follow Me',
          },
        },
      ],
    },
    {
      type: 'txt',
      name: 'hamburger',
      id: uuidv4(),
      info: {
        txt: '☰',
      },
    },
  ],
}
