import { v4 as uuidv4 } from 'uuid'

export const wapFooter2 = {
  type: 'container',
  name: 'wap-footer-2',
  themePalette: 'primary',
  category: 'footer',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/footer/wap-footer-2.jpg'),
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'Techflow',
      },
      style: {
        fontSize: '2rem',
        fontWeight: '700',
        margin: 0,
      },
    },
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: '©2022. Webify Ltd – All Rights Reserved',
      },
      style: {
        fontWeight: '700',
        color: 'lightgray',
      },
    },
  ],
}
