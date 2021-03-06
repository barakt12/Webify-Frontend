import { v4 as uuidv4 } from 'uuid'

export const footerCmp4 = {
  name: 'footer-cmp-3',
  type: 'container',
  category: 'section',
  themePalette: 'secondary',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/footer/wap-footer-4.JPG'),
  style: {},
  cmps: [
    {
      type: 'container',
      name: 'social-media-links',
      id: uuidv4(),

      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          style: { fontSize: '3rem', fontWeight: 400, fontFamily: 'Forum' },

          info: {
            txt: 'Instagram',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          style: { fontSize: '3rem', fontWeight: 400, fontFamily: 'Forum' },

          info: {
            txt: 'Twitter',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          style: { fontSize: '3rem', fontWeight: 400, fontFamily: 'Forum' },

          info: {
            txt: 'Facebook',
          },
        },
      ],
    },
    {
      type: 'txt',
      id: uuidv4(),
      style: { fontSize: '1rem', fontWeight: 400, fontFamily: 'Forum' },

      info: {
        txt: '© 2022 by ELLIE PAGE. Proudly created with Webify',
      },
    },
  ],
}
