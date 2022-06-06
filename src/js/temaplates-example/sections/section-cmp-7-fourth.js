import { v4 as uuidv4 } from 'uuid'

export const fourthSectionCmp7 = {
  type: 'container',
  name: 'wap-section-7-fourth',
  themePalette: 'primary',
  category: 'cards',
  thumbnail: require('../../../assets/img/thumbnails/section/wap-section-7-fourth.JPG'),
  id: uuidv4(),
  style: {
    backgroundColor: '#b5e8d5',
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
            txt: '#DOUBLE TAP',
          },
          style: {
            fontFamily: 'sans-serif',
            fontSize: '2.375rem',
            color: '#2f2e2e',
            fontWeight: 600
          },
        },
      ],
    },
  ],
}
