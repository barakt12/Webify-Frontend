import { v4 as uuidv4 } from 'uuid'

export const ThirdCardCmp5 = {
  type: 'container',
  name: 'wap-cards-5-third',
  themePalette: 'primary',
  category: 'cards',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/gallery/wap-gallery-5-second.JPG'),
  style: {},
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'PROJECTS',
      },
      style: {
        fontSize: '3.4375rem',
        fontWeight: '700',
        textAlign: 'center',
        textDecoration: 'underline',
        textDecorationColor: '#edcd1f',
      },
    },
    {
      type: 'container',
      id: uuidv4(),
      name: 'main-cards-container',
      cmps: [
        {
          type: 'container',
          id: uuidv4(),
          name: 'first-cards-container',
          cmps: [
            {
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl:
                  'https://static.wixstatic.com/media/b8f768e092644bc58b303f107f02411d.jpg/v1/fill/w_476,h_521,q_90/b8f768e092644bc58b303f107f02411d.webp',
              },
            },
            {
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl:
                  'https://static.wixstatic.com/media/d69f20184cf54a40a9632c4d33ceb2bb.jpg/v1/fill/w_476,h_521,q_90/d69f20184cf54a40a9632c4d33ceb2bb.webp',
              },
            },
          ],
        },
        {
          type: 'container',
          id: uuidv4(),
          name: 'second-cards-container',
          cmps: [
            {
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl:
                  'https://static.wixstatic.com/media/ef1d7355e0c147dbb86a0ba42f2bff16.jpg/v1/fill/w_476,h_521,q_90/ef1d7355e0c147dbb86a0ba42f2bff16.webp',
              },
            },
            {
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl:
                  'https://static.wixstatic.com/media/ef7ea5acd46045038a8f5e469335fe51.jpg/v1/fill/w_476,h_521,fp_0.54_0.71,q_90/ef7ea5acd46045038a8f5e469335fe51.webp',
              },
            },
          ],
        },
      ],
    },
  ],
}
