import { v4 as uuidv4 } from 'uuid'

export const CardCmp5 = {
  type: 'container',
  name: 'wap-cards-5',
  themePalette: 'primary',
  category: 'cards',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/gallery/wap-gallery-5.JPG'),
  style: {
    backgroundColor: '#fff',
  },
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'SERVICES',
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
      name: 'cards-container',
      cmps: [
        {
          type: 'container',
          id: uuidv4(),
          name: 'card',
          cmps: [
            {
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl:
                  'https://static.wixstatic.com/media/c19c76_22d8ec47d1484b09a9c333e4141a12a0.jpg/v1/fill/w_300,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c19c76_22d8ec47d1484b09a9c333e4141a12a0.jpg',
              },
            },
            {
              type: 'container',
              id: uuidv4(),
              name: 'card-text',
              cmps: [
                {
                  type: 'txt',
                  id: uuidv4(),
                  info: {
                    txt: 'Preconstruction Planning',
                  },
                  style: {
                    fontSize: '1.375rem',
                    color: '#3d5975',
                    fontWeight: '700',
                  },
                },
                {
                  type: 'txt',
                  id: uuidv4(),
                  info: {
                    txt: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`,
                  },
                  style: {
                    fontSize: '0.9rem',
                    fontWeight: '500',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'container',
          id: uuidv4(),
          name: 'card',
          cmps: [
            {
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl:
                  'https://static.wixstatic.com/media/b31d0e84cb714761b2b1f06c305023c7.jpg/v1/fill/w_300,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b31d0e84cb714761b2b1f06c305023c7.jpg',
              },
            },
            {
              type: 'container',
              id: uuidv4(),
              name: 'card-text',
              cmps: [
                {
                  type: 'txt',
                  id: uuidv4(),
                  info: {
                    txt: 'Architectural Modelling',
                  },
                  style: {
                    fontSize: '1.375rem',
                    color: '#3d5975',
                    fontWeight: '700',
                  },
                },
                {
                  type: 'txt',
                  id: uuidv4(),
                  info: {
                    txt: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`,
                  },
                  style: {
                    fontSize: '0.9rem',
                    fontWeight: '500',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'container',
          id: uuidv4(),
          name: 'card',
          cmps: [
            {
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl:
                  'https://static.wixstatic.com/media/9e456adff0ee4a2c847cfd67a62454a3.jpg/v1/fill/w_300,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9e456adff0ee4a2c847cfd67a62454a3.jpg',
              },
            },
            {
              type: 'container',
              id: uuidv4(),
              name: 'card-text',
              cmps: [
                {
                  type: 'txt',
                  id: uuidv4(),
                  info: {
                    txt: 'Construction Management',
                  },
                  style: {
                    fontSize: '1.375rem',
                    color: '#3d5975',
                    fontWeight: '700',
                  },
                },
                {
                  type: 'txt',
                  id: uuidv4(),
                  info: {
                    txt: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`,
                  },
                  style: {
                    fontSize: '0.9rem',
                    fontWeight: '500',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
