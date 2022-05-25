export const wapHero2 = {
  name: 'wap-hero-2',
  id: 'he102',
  type: 'container',
  style: {},
  cmps: [
    {
      type: 'container',
      name: 'wap-hero-2-container',
      style: {
        color: 'white',
      },
      cmps: [
        {
          type: 'txt',
          name: 'wap-hero-2-main-hero-header',
          info: {
            txt: 'Momentum',
          },
          style: {},
        },
        {
          type: 'txt',
          name: 'wap-hero-2-sec-hero-header',
          info: {
            txt: 'Launch your product — and savor the momentum',
          },
          style: {},
        },
        {
          type: 'btn',
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
      style: {},
      name: 'wap-hero-2-img-container',
      cmps: [
        {
          type: 'img',
          info: {
            imgUrl: 'https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b10d0ee7f483cdf4e9ca8f8_img-top.png',
          },
        },
        {
          type: 'img',
          name: 'wap-hero-2-arrow-img',
          info: {
            imgUrl: 'https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b1437cbda3c5c3369fe4460_arrow.svg',
          },
        }
      ]
    }
  ],
}
