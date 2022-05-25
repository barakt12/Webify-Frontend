export const headerWap1 = {
  name: 'wap-header-1',
  type: 'container',
  id: 'h101',
  //change to cloudinary
  thumbnail: 'https://i.postimg.cc/vmFf4mMv/header1.png',
  //each component will have his own css file
  style: {},
  cmps: [
    {
      type: 'txt',
      info: {
        txt: 'Header1',
      },
      style: {
        fontSize: '2rem',
        fontWeight: '700',
      },
      cmps: [],
    },
    {
      type: 'container',
      style: {
        display: 'flex',
        gap: '0.5rem',
      },
      cmps: [
        {
          type: 'txt',
          info: {
            txt: 'Home',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          info: {
            txt: 'Page1',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          info: {
            txt: 'Page2',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
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
