export const header1 = {
  name: 'header1',
  type: 'container',
  id: 'h101',
  //change to cloudinary
  thumbnail: 'https://i.postimg.cc/vmFf4mMv/header1.png',
  //each component will have his own css file
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 1rem',
    alignItems: 'center',
    backgroundColor: 'tomato',
    color: 'white',
  },
  cmps: [
    {
      type: 'txt',
      content: 'Header1',
      style: {
        fontSize: '2rem',
        fontWeight: '700',
      },
      cmps: [],
    },
    {
      type: 'nav-bar',
      style: {
        display: 'flex',
        gap: '0.5rem',
      },
      cmps: [
        {
          type: 'txt',
          content: 'Home',
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          content: 'Page1',
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          content: 'Page2',
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          content: 'About',
          style: {},
          cmps: [],
        },
      ],
    },
  ],
}
