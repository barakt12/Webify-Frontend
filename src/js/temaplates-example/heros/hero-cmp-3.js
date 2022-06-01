import { v4 as uuidv4 } from 'uuid'

export const heroCmp4 = {
  name: 'hero-cmp-3',
  type: 'container',
  category: 'hero',
  themePalette: 'primary',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/hero/wap-hero-3.JPG'),
  style: {},
  cmps: [
    {
      type: 'container',
      name: 'paralax-container',
      id: uuidv4(),
      style: {
        backgroundImage:
          'url(https://static.wixstatic.com/media/84770f_92972b392a4f499185503c585f31e793~mv2_d_2594_1675_s_2.jpg/v1/fill/w_1118,h_897,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_92972b392a4f499185503c585f31e793~mv2_d_2594_1675_s_2.jpg)',
      },
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          name: 'hero-heading',
          style: { fontSize: '3.75rem' },
          info: {
            txt: 'Contemporary Tattoos For All Bodies and Skin',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          name: 'hero-sub-heading',
          style: { fontSize: '1rem' },

          info: {
            txt: ' We pride ourselves on a beautiful and simplistic design that focuses on the art of tattooing. We also believe in quality work and are always striving to be better.',
          },
        },
        {
          type: 'btn',
          id: uuidv4(),
          name: 'btn',
          info: {
            txt: 'Book',
          },
        },
      ],
    },
    {
      type: 'container',
      name: 'social-media-banner',
      id: uuidv4(),
      cmps: [
        {
          type: 'txt',

          id: uuidv4(),
          style: { fontSize: '1.1rem' },

          info: {
            txt: 'Follow me',
          },
        },
        {
          type: 'icon',
          id: uuidv4(),
          info: {
            iconName: 'facebook',
          },
        },
        {
          type: 'icon',
          id: uuidv4(),
          info: {
            iconName: 'instagram',
          },
        },
        {
          type: 'icon',
          id: uuidv4(),
          info: {
            iconName: 'linkedin',
          },
        },
      ],
    },
  ],
}
