export const headerWap2 = {
  name: 'wap-header-2',
  type: 'container',
  id: 'h102',
  type: 'container',
  //change to cloudinary
  imgUrl: 'https://i.postimg.cc/vmFf4mMv/header1.png',
  //each component will have his own css file
  style: {},
  cmps: [
    {
      type: 'txt',
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
      name: 'nav-bar',
      style: {},
      cmps: [
        {
          type: 'txt',
          info: {
            txt: 'About',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          info: {
            txt: 'Features',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          info: {
            txt: 'How to Use',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
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
      name: 'hamburger-nav-bar',
      style: {},
      cmps: [
        {
          type: 'img',
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
