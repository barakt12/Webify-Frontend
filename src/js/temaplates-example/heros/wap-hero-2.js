import { v4 as uuidv4 } from 'uuid'


export const wapHero2 = {
  name: 'wap-hero-2',
  id: 'he102',
  type: 'container',
  style: {},
  cmps: [
    {
      type: 'container',
      id: uuidv4(),
      name: 'wap-hero-2-container',
      style: {
        color: 'white',
      },
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          name: 'wap-hero-2-main-hero-header',
          info: {
            txt: 'Momentum',
          },
          style: {},
        },
        {
          type: 'txt',
          id: uuidv4(),
          name: 'wap-hero-2-sec-hero-header',
          info: {
            txt: 'Launch your product — and savor the momentum',
          },
          style: {},
        },
        {
          type: 'btn',
          id: uuidv4(),
          name: 'wap-hero-2-hero-btn',
          info: {
            txt: 'Get the App',
          },
          style: {},
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
          info: {
            imgUrl: 'https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b10d0ee7f483cdf4e9ca8f8_img-top.png',
          },
        },
        {
          type: 'img',
          id: uuidv4(),
          name: 'wap-hero-2-arrow-img',
          info: {
            imgUrl: 'https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b1437cbda3c5c3369fe4460_arrow.svg',
          },
        }
      ]
    }
  ],
}
