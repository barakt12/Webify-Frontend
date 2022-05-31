import { v4 as uuidv4 } from 'uuid'

export const headerCmp5 = {
  name: 'wap-header-5',
  type: 'container',
  category: 'header',
  themePalette: 'primary',
  id: uuidv4(),
  //change to cloudinary
  thumbnail: require('../../../assets/img/thumbnails/header/wap-header-5.JPG'),
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
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'HOME',
          },
          style: {},
          cmps: [],
        },

        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'SERVICES',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'ABOUT',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'PROJECTS',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'CONTACT',
          },
          style: {},
          cmps: [],
        },
      ],
    },
  ],
}
