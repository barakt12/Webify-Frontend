import { v4 as uuidv4 } from 'uuid'

export const headerCmp4 = {
  name: 'header-cmp-4',
  type: 'container',
  category: 'header',
  themePalette: 'primary',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/header/wap-header-4.JPG'),
  style: {},
  cmps: [
    {
      type: 'container',
      id: uuidv4(),
      name: 'logo',
      cmps: [
        {
          type: 'img',
          id: uuidv4(),
          info: {
            imgUrl: 'https://res.cloudinary.com/dnv7wszu3/image/upload/v1654029430/tattoo-shop-logo_en0luz.svg',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'ELLIE PAGE',
          },
        },
      ],
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
            txt: 'About',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Contact',
          },
        },
      ],
    },
  ],
}
