import { v4 as uuidv4 } from 'uuid'

export const cardCmp7 = {
  type: 'container',
  name: 'wap-cards-7',
  themePalette: 'primary',
  category: 'cards',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/gallery/wap-gallery-7.JPG'),
  style: {},
  cmps: [
    {
      type: 'img',
      id: uuidv4(),
      info: {
        imgUrl:
          'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Ice%20Cream%20Parlor/01.jpg',
      },
    },
    {
      type: 'img',
      id: uuidv4(),
      info: {
        imgUrl:
          'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Ice%20Cream%20Parlor/02.jpg',
      },
    },
    {
      type: 'img',
      id: uuidv4(),
      info: {
        imgUrl:
          'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Ice%20Cream%20Parlor/03.jpg',
      },
    },
    {
      type: 'img',
      id: uuidv4(),
      info: {
        imgUrl:
          'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Ice%20Cream%20Parlor/04.jpg',
      },
    },
  ],
}
