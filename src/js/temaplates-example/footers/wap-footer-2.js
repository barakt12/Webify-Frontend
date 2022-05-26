import { v4 as uuidv4 } from 'uuid'

export const wapFooter2 = {
  type: 'container',
  name: 'wap-footer-2',
  themePalette: 'primary',
  category: 'footer',
  id: uuidv4(),
  thumbnail: 'https://i.postimg.cc/ryrV1WDH/wap-footer-1.png',
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'Logo',
      },
      style: {
        fontSize: '2.5rem',
        fontWeight: '700',
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
