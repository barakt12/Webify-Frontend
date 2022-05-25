import { v4 as uuidv4 } from 'uuid'

export const headerWap1 = {
  name: 'wap-header-1',
  type: 'container',
  category: 'header',
  id: 'h101',
  //change to cloudinary
  imgUrl: 'https://i.postimg.cc/vmFf4mMv/header1.png',
  //each component will have his own css file
  style: {},
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'Header1',
      },
      style: {
        fontSize: '2rem',
        fontWeight: '700',
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
            txt: 'Home',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Page1',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Page2',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'About',
          },
          style: {},
          cmps: [],
        },
      ],
    },
  ],
}
