import { v4 as uuidv4 } from 'uuid'

export const wapSection1 = {
  type: 'container',
  name: 'wap-cards-2',
  themePalette: 'secondary',
  category: 'cards',
  thumbnail: require('../../../assets/img/thumbnails/section/wap-section-1.jpg'),
  id: uuidv4(),
  style: {
    backgroundColor: '#1b1b1b',
    color: 'white',
  },
  cmps: [
    {
      type: 'txt',
      name: 'wap-cards-2-sub-header',
      id: uuidv4(),
      info: {
        txt: 'AENEAN CONSECTETUR PORTA',
      },
      style: {},
    },
    {
      type: 'txt',
      name: 'wap-cards-2-main-header',
      id: uuidv4(),
      info: {
        txt: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
      },
      style: {},
    },
    {
      type: 'img',
      name: 'wap-cards-2-img-container',
      id: uuidv4(),
      style: {},
      info: {
        imgUrl: 'https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5afa1b861bc189407c1a9b2c_dash-device.png',
      },
    },
  ],
}
