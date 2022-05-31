import { v4 as uuidv4 } from 'uuid'

export const HeroCmp5 = {
  name: 'wap-hero-5',
  id: uuidv4(),
  type: 'container',
  themePalette: 'primary',
  category: 'hero',
  thumbnail: require('../../../assets/img/thumbnails/hero/wap-hero-5.JPG'),
  style: {
    color: 'white',
  },
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'LEADERS IN QUALITY CONSTRUCTION AND INFRASTRUCTURE',
      },
      style: {
        fontSize: '3rem',
        fontWeight: '700',
      },
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
