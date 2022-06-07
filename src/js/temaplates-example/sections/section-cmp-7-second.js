import { v4 as uuidv4 } from 'uuid'

export const secondSectionCmp7 = {
  type: 'container',
  name: 'wap-section-7-second',
  themePalette: 'secondary',
  category: 'cards',
  thumbnail: require('../../../assets/img/thumbnails/section/wap-section-7-second.JPG'),
  id: uuidv4(),
  style: {
    backgroundColor: '#b5e8d5',
    color: '#fff',
  },
  cmps: [
    {
      type: 'container',
      id: uuidv4(),
      name: 'txt-container',
      cmps: [
        {
          type: 'txt',
          name: 'main-header',
          id: uuidv4(),
          info: {
            txt: 'ENJOY',
          },
          style: {
            fontSize: '2.175rem',
            letterSpacing: '0.05rem',
            fontWeight: 600,
          },
        },
        {
          type: 'txt',
          name: 'sub-header',
          id: uuidv4(),
          info: {
            txt: `DAIRY FREE`,
          },
          style: {
            fontSize: '5rem',
            letterSpacing: '2rem',
            fontWeight: 800,
          },
        },
        {
          type: 'btn',
          id: uuidv4(),
          info: {
            txt: 'MENU',
          },
          style: {},
        },
      ],
    },
  ],
}
