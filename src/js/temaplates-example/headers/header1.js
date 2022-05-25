export const header1 = {
  //not mongodb id
  id: 'h101',
  type: 'container',
  //change to cloudinary
  imgUrl: 'https://i.postimg.cc/vmFf4mMv/header1.png',
  //each component will have his own css file
  style: {
    // display: 'flex',
    // justifyContent: 'space-between',
    // padding: '0.5rem 1rem',
    // alignItems: 'center',
    // backgroundColor: 'tomato',
    // color: 'white',
  },
  cmps: [
    {
      type: 'txt',
      info: {
        txt: 'Header1'
      },
      style: {
        // fontSize: '2rem',
        // fontWeight: '700',
      },
    },
    {
      type: 'container',
      style: {
        // display: 'flex',
        // gap: '0.5rem',
      },
      cmps: [
        {
          type: 'txt',
          content: 'Home',
          style: {}
        },
        {
          type: 'txt',
          content: 'Page1',
          style: {}
        },
        {
          type: 'txt',
          content: 'Page2',
          style: {}
        },
        {
          type: 'txt',
          content: 'About',
          style: {}
        },
      ],
    },
  ],
}
