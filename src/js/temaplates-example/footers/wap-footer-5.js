import { v4 as uuidv4 } from 'uuid'

export const footerCmp5 = {
  name: 'wap-footer-5',
  type: 'container',
  category: 'footer',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/footer/wap-footer-5.JPG'),
  style: {},
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: '© 2023 by Sphere Constructions. Proudly created with Webify.com',
      },
      style: {
        fontSize: '0.875rem',
        color: '#3B3A3A'
      },
      cmps: [],
    },
    {
      type: 'container',
      name: 'footer-icons-container',
      id: uuidv4(),
      style: {},
      cmps: [
        {
          type: 'img',
          id: uuidv4(),
          info: {
            imgUrl: 'https://static.wixstatic.com/media/4057345bcf57474b96976284050c00df.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4057345bcf57474b96976284050c00df.png',
          },
          cmps: [],
        },
        {
          type: 'img',
          id: uuidv4(),
          info: {
            imgUrl: 'https://static.wixstatic.com/media/aa0402eb9ba2430d9d0620b59556efca.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aa0402eb9ba2430d9d0620b59556efca.png'
          },
          cmps: [],
        },
      ],
    },
  ],
}
