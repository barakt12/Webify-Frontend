import { v4 as uuidv4 } from 'uuid'

export const headerCmp5 = {
  name: 'wap-header-5',
  type: 'container',
  category: 'header',
  themePalette: 'primary',
  id: uuidv4(),
  //change to cloudinary
  thumbnail:
    'https://res.cloudinary.com/do0lvumuv/image/upload/v1654111393/Screenshot_12_re7jme.jpg',
  //each component will have his own css file
  style: {},
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'SPHERE',
      },
      style: {
        fontSize: '2rem',
        fontWeight: '700',
        margin: 0,
      },
    },
    {
      type: 'container',
      name: 'nav-bar',
      id: uuidv4(),
      style: {},
      cmps: [
        {
          type: 'img',
          id: uuidv4(),
          info: {
            imgUrl:
              'https://icon-library.com/images/hamburger-menu-icon-png/hamburger-menu-icon-png-29.jpg',
          },
          style: {},
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'HOME',
          },
          style: {},
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'SERVICES',
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
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'PROJECTS',
          },
          style: {},
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'CONTACT',
          },
          style: {},
        },
      ],
    },
  ],
}
