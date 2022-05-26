import { v4 as uuidv4 } from 'uuid'

export const wapFooter3 = {
  type: 'container',
  name: 'wap-footer-3',
  category: 'footer',
  themePalette: 'primary',
  id: uuidv4(),
  thumbnail: '',
  cmps: [
    {
      type: 'img',
      id: uuidv4(),
      style: {
      },
      info: {
        imgUrl: 'https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b149b03d0d5fe3279f270f1_icon-footer.png',
      },
    },
  {
    type: 'container',
    name: 'wap-footer-3-links-container',
    id: uuidv4(),
    style: {},
    cmps: [
      {
        type: 'txt',
        id: uuidv4(),
        info: {
          txt: 'Email',
        },
        style: {},
      },
      {
        type: 'txt',
        id: uuidv4(),
        info: {
          txt: 'Instagram',
        },
        style: {},
      },
      {
        type: 'txt',
        id: uuidv4(),
        info: {
          txt: 'Facebook',
        },
        style: {},
      },
      {
        type: 'txt',
        id: uuidv4(),
        info: {
          txt: 'Twitter',
        },
        style: {},
      },
      {
        type: 'txt',
        id: uuidv4(),
        info: {
          txt: 'Image License Info',
        },
        style: {},
      },
      {
        type: 'txt',
        id: uuidv4(),
        info: {
          txt: 'Powered by Webify',
        },
        style: {},
      },
    ]
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
