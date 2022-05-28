import { v4 as uuidv4 } from 'uuid'

export const wapCarousel1 = {
  type: 'container',
  name: 'wap-carousel-1',
  themePalette: 'secondary',
  category: 'carousel',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/carousel/wap-carousel-1.jpg'),
  style: {
    backgroundColor: 'white',
    color: 'black',
  },
  cmps: [
    {
      type: 'carosuel',
      id: uuidv4(),
      //WARNING! If you dont put 100% width on the carousel container -
      //you will face strange behavior on dragging the component!!!!
      style: {
        width: '100%',
      },
      info: {
        carosuelContent: [
          {
            label: 'Parturient Tortor',
            imgPath: 'https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5afa506095815377cd097a34_img-002-p-500.jpeg',
          },
          {
            label: 'Sem Risus Elit Vestibulum',
            imgPath: 'https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5afa50601bc189f92b1ad1f1_img-003-p-500.jpeg',
          },
        ],
      },
    },
  ],
}
