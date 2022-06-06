import { v4 as uuidv4 } from 'uuid'

export const sectionCmp7 = {
  type: 'container',
  name: 'wap-section-7',
  themePalette: 'third',
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
                fontFamily: 'Roboto',
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
                fontFamily: 'OpenSans',
              },
            },
            {
              type: 'txt',
              name: 'sub-txt',
              id: uuidv4(),
              info: {
                txt: `Established in 2013, Gelato is a hand-crafted gelato shop by the sea. Our philosophy is to offer an original, amazing and delicious ice cream experience to our customers. We pride ourselves on using fresh and natural ingredients that are responsibly sourced from farmers around the world.`,
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
