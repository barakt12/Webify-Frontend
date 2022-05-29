import { v4 as uuidv4 } from 'uuid'

export const wapHero2 = {
  name: 'wap-hero-2',
  themePalette: 'secondary',
  id: uuidv4(),
  type: 'container',
  thumbnail: require('../../../assets/img/thumbnails/hero/wap-hero-2.jpg'),
  style: {},
  cmps: [
    {
      type: 'container',
      id: uuidv4(),
      name: 'wap-hero-2-container',
      style: {},
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          name: 'wap-hero-2-main-hero-header',
          info: {
            txt: 'Momentum',
          },
          style: {
            fontSize: '5.75rem',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          name: 'wap-hero-2-sec-hero-header',
          info: {
            txt: 'Launch your product — and savor the momentum',
          },
          style: {
            fontSize: '1.875rem',
          },
        },
        {
          type: 'btn',
          id: uuidv4(),
          name: 'wap-hero-2-hero-btn',
          info: {
            txt: 'Get the App',
          },
          style: {
            fontSize: '1rem',
          },
        },
      ],
    },
    {
      type: 'container',
      id: uuidv4(),
      style: {},
      name: 'wap-hero-2-img-container',
      cmps: [
        {
          type: 'img',
          id: uuidv4(),
          name: 'wap-hero-2-hero-img',
          info: {
            imgUrl:
              'https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b10d0ee7f483cdf4e9ca8f8_img-top.png',
          },
        },
        {
          type: 'container',
          id: uuidv4(),
          style: {},
          name: 'wap-hero-2-arrow-img-container',
          cmps: [
            {
              type: 'img',
              id: uuidv4(),
              name: 'wap-hero-2-arrow-img',
              info: {
                imgUrl:
                  'https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b1437cbda3c5c3369fe4460_arrow.svg',
              },
            },
          ],
        },
      ],
    },
  ],
}
