import { v4 as uuidv4 } from 'uuid'

export const headerWap2 = {
  name: 'wap-header-2',
  themePalette: 'primary',
  id: uuidv4(),
  type: 'container',
  //change to cloudinary
  thumbnail: require('../../../assets/img/thumbnails/header/wap-header-2.jpg'),
  //each component will have his own css file
  style: {},
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'Webify',
      },
      style: {
        fontSize: '2rem',
        fontWeight: '700',
      },
    },
    {
      type: 'container',
      id: uuidv4(),
      name: 'nav-bar',
      style: {},
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'About',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Features',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'How to Use',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Download',
          },
          style: {},
          cmps: [],
        },
      ],
    },
    {
      type: 'container',
      id: uuidv4(),
      name: 'hamburger-nav-bar',
      style: {},
      cmps: [
        {
          type: 'img',
          id: uuidv4(),
          info: {
            imgUrl: 'https://icon-library.com/images/white-hamburger-menu-icon/white-hamburger-menu-icon-24.jpg',
          },
          style: {},
        },
      ],
    },
  ],
}
