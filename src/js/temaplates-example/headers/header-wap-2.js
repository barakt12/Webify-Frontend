import { v4 as uuidv4 } from 'uuid'

export const headerWap2 = {
  name: 'wap-header-2',
  themePalette: 'primary',
  id: uuidv4(),
  type: 'container',
  //change to cloudinary
  imgUrl: 'https://i.postimg.cc/vmFf4mMv/header1.png',
  //each component will have his own css file
  style: {},
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'Header2',
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
          style: {
            fontSize: '1rem',
          },
          cmps: [],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Features',
          },
          style: {
            fontSize: '1rem',
          },
          cmps: [],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'How to Use',
          },
          style: {
            fontSize: '1rem',
          },
          cmps: [],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Download',
          },
          style: {
            fontSize: '1rem',
          },
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
            imgUrl:
              'https://icon-library.com/images/white-hamburger-menu-icon/white-hamburger-menu-icon-24.jpg',
          },
          style: {},
        },
      ],
    },
  ],
}
