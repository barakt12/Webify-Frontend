import { v4 as uuidv4 } from 'uuid'

export const HeroCmp7 = {
  name: 'wap-hero-7',
  id: uuidv4(),
  type: 'container',
  // themePalette: 'primary',
  category: 'hero',
  thumbnail: require('../../../assets/img/thumbnails/hero/wap-hero-5.JPG'),
  style: {
    backgroundColor: '#f9db79',
  },
  cmps: [ 
    {
      type: 'img',
      id: uuidv4(),
      info: {
        imgUrl: 'https://static.wixstatic.com/media/84770f_bdcc40e3b5ce45f4b672692e83f4917b~mv1.png/v1/fill/w_294,h_577,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_bdcc40e3b5ce45f4b672692e83f4917b~mv1.png',
      },
      style: {},
    },
    {
      type: 'container',
      name: 'main-hero-container',
      id: uuidv4(),
      style: {},
      cmps: [
        {
          type: 'txt',
          name: 'sub-header',
      id: uuidv4(),
      info: {
        txt: 'HAND CRAFTED',
      },
      style: {
        color: 'white',
        fontSize: '2.375rem',
        fontWeight: '600',
      },
    },
    {
      type: 'txt',
      id: uuidv4(),
      name: 'main-header',
      info: {
        txt: 'ICE CREAM',
      },
      style: {
        color: 'white',
        fontSize: '7.1875rem',
        fontWeight: '800',
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
    // {
    //   type: 'img',
    //   id: uuidv4(),
    //   info: {
    //     imgUrl:
    //       'https://res.cloudinary.com/dnv7wszu3/image/upload/v1654000516/constuctionSite2_niz3dm.jpg',
    //   },
    // },
  ],
}
  ]
}
