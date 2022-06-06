import { v4 as uuidv4 } from 'uuid'

export const thirdSectionCmp7 = {
  type: 'container',
  name: 'wap-section-7-third',
  themePalette: 'third',
  category: 'cards',
  thumbnail: require('../../../assets/img/thumbnails/section/wap-section-7-third.JPG'),
  id: uuidv4(),
  style: {},
  cmps: [
    {
      type: 'container',
      id: uuidv4(),
      name: 'txt-container',
      cmps: [
        {
          type: 'container',
          id: uuidv4(),
          name: 'txt-sub-container',
          cmps: [
            {
              type: 'txt',
              name: 'main-header',
              id: uuidv4(),
              info: {
                txt: 'OUR PLACE',
              },
              style: {
                fontSize: '2.375rem',
                fontFamily: 'Roboto',
                letterSpacing: '0.05rem',
              },
            },
            {
              type: 'txt',
              name: 'sub-header',
              id: uuidv4(),
              info: {
                txt: `Ice cream by the sea`,
              },
              style: {
                fontSize: '1.5rem',
                fontFamily: 'OpenSans',
              },
            },
            {
              type: 'txt',
              name: 'sub-txt',
              id: uuidv4(),
              info: {
                txt: `We invite you to join us on our adventure. Handmade gelato ice cream that is the perfect treat, any time of year. If you're in town and want a real taste of Italy, stop by our shop by the sea!`,
              },
              style: {
                fontSize: '0.9rem',
                fontFamily: 'Pensum',
                fontWeight: 400,
              },
            },
            {
              type: 'btn',
              id: uuidv4(),
              info: {
                txt: 'READ MORE',
              },
              style: {},
            },
          ],
        },
      ],
    },
    {
      type: 'container',
      name: 'first-container-img',
      id: uuidv4(),
      style: {},
      cmps: [],
    },
  ],
}
