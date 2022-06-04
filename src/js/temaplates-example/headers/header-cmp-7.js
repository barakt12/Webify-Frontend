import { v4 as uuidv4 } from 'uuid'

export const headerCmp7 = {
  name: 'wap-header-7',
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
      type: 'container',
      name: 'first-header-container',
      id: uuidv4(),
      style: {},
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: '500 Terry Francois Street San Francisco, CA 94158  |  Daily 10AM-10PM',
          },
          style: {},
        },
      ],
    },
    {
      type: 'container',
      name: 'second-header-container',
      id: uuidv4(),
      style: {},
      cmps: [
        {
          type: 'container',
          name: 'first-nav-bar',
          id: uuidv4(),
          style: {},
          cmps: [
            // {
            //   type: 'img',
            //   id: uuidv4(),
            //   info: {
            //     imgUrl:
            //       'https://icon-library.com/images/hamburger-menu-icon-png/hamburger-menu-icon-png-29.jpg',
            //   },
            //   style: {},
            // },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'FLAVORS',
              },
              style: {},
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'ORDER ONLINE',
              },
              style: {},
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'BOOK AN EVENT',
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
          ],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Gelato',
          },
          style: {},
        },
        {
          type: 'container',
          name: 'second-nav-bar',
          id: uuidv4(),
          style: {},
          cmps: [
            {
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl:
                  'https://static.wixstatic.com/media/4057345bcf57474b96976284050c00df.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4057345bcf57474b96976284050c00df.png',
              },
              cmps: [],
            },
            {
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl:
                  'https://static.wixstatic.com/media/870f97661ed14a5bb2d96ecbddec0aed.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/870f97661ed14a5bb2d96ecbddec0aed.png',
              },
              cmps: [],
            },
            {
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl:
                  'https://static.wixstatic.com/media/e1aa082f7c0747168d9cf43e77046142.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e1aa082f7c0747168d9cf43e77046142.png',
              },
              cmps: [],
            },
          ],
        },
      ],
    },
  ],
}
