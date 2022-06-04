import { v4 as uuidv4 } from 'uuid'

export const sectionCmp7 = {
  type: 'container',
  name: 'wap-section-7',
  themePalette: 'secondary',
  category: 'cards',
  thumbnail: require('../../../assets/img/thumbnails/section/wap-section-7.JPG'),
  id: uuidv4(),
  style: {},
  cmps: [
    {
      type: 'container',
      name: 'first-container-img',
      id: uuidv4(),
      style: {},
      cmps: [],
    },
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
                txt: 'OUR FLAVORS',
              },
              style: {
                fontSize: '2.375rem',
                fontFamily: 'monospace',
                letterSpacing: '0.05rem',
              },
            },
            {
              type: 'txt',
              name: 'sub-header',
              id: uuidv4(),
              info: {
                txt: `Fresh n' Tasty!`,
              },
              style: {
                fontSize: '1.5rem',
                fontFamily: 'cursive',
              },
            },
            {
              type: 'txt',
              name: 'sub-txt',
              id: uuidv4(),
              info: {
                txt: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. `,
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
                color: 'white',
                txt: 'MENU',
              },
              style: {},
            },
          ],
        },
      ],
    },
  ],
}
