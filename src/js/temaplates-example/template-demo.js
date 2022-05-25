export const template1 = {
  _id: 'ahlaid',
  cmps: [
    {
      type: 'container',
      id: 'h101',
      //change to cloudinary
      imgUrl: 'https://i.postimg.cc/vmFf4mMv/header1.png',
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
        },
        {
          type: 'container',
          style: {},
          cmps: [
            {
              type: 'txt',
              info: { txt: 'Home' },
              style: {},
            },
            {
              type: 'txt',
              info: { txt: 'Page1' },
              style: {},
            },
            {
              type: 'txt',
              info: { txt: 'Page2' },
              style: {},
            },
            {
              type: 'txt',
              info: { txt: 'About' },
              style: {},
            },
          ],
        },
      ],
    },
    {
      id: 'he101',
      type: 'container',
      style: {
        //Change to cloudinary
        backgroundImage:
          'url("https://www.bmw.co.il/content/dam/bmw/common/all-models/3-series/sedan/2021/highlights/bmw-3series-3er-inspire-sp-xxl.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      cmps: [
        {
          type: 'container',
          style: {},
          cmps: [
            {
              type: 'txt',
              info: { txt: 'B.M.W' },
              style: {
                fontSize: '3rem',
                fontWeight: '700',
              },
            },
            {
              type: 'txt',
              info: { txt: 'The future of automobile!' },
              style: {
                fontSize: '1.5rem',
                fontWeight: '700',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'container',
      name: 'cards1',
      imgUrl: null,
      style: {
        color: '#333',
      },
      cmps: [
        {
          type: 'container',
          style: {},
          cmps: [
            {
              type: 'icon',
              iconName: 'speed',
            },
            {
              type: 'txt',
              info: { txt: 'Speed' },
              style: {
                fontSize: '1.5rem',
                fontWeight: '700',
              },
            },
            {
              type: 'txt',
              info: {
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, consequuntur est! Eveniet eaque facere nemo id, porro possimus tempore eum blanditiis, esse ipsum nostrum accusantium quis nisi dolorem quo beatae.',
              },
            },
          ],
        },
        {
          type: 'container',
          style: {
            textAlign: 'center',
          },
          cmps: [
            {
              type: 'icon',
              iconName: 'energy',
            },
            {
              type: 'txt',
              info: { txt: 'Efficiency' },
              style: {
                fontSize: '1.5rem',
                fontWeight: '700',
              },
            },
            {
              type: 'txt',
              info: {
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, consequuntur est! Eveniet eaque facere nemo id, porro possimus tempore eum blanditiis, esse ipsum nostrum accusantium quis nisi dolorem quo beatae.',
              },
            },
          ],
        },
        {
          type: 'container',
          style: {
            textAlign: 'center',
          },
          cmps: [
            {
              type: 'icon',
              iconName: 'car',
            },
            {
              type: 'txt',
              info: { txt: 'Style' },
              style: {
                fontSize: '1.5rem',
                fontWeight: '700',
              },
            },
            {
              type: 'txt',
              info: {
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, consequuntur est! Eveniet eaque facere nemo id, porro possimus tempore eum blanditiis, esse ipsum nostrum accusantium quis nisi dolorem quo beatae.',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'container',
      id: 'f101',
      imgUrl: null,
      style: {
        color: 'white',
        backgroundColor: 'tomato',
      },
      cmps: [
        {
          type: 'txt',
          info: { txt: 'Logo' },
          style: {
            fontSize: '2rem',
          },
        },
        {
          type: 'container',
          style: {},
          cmps: [
            {
              type: 'icon',
              iconName: 'facebook',
            },
            {
              type: 'icon',
              iconName: 'instagram',
            },
            {
              type: 'icon',
              iconName: 'linkedin',
            },
          ],
        },
      ],
    },
  ],
}
