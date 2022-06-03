import { v4 as uuidv4 } from 'uuid'

export const heroCmp4 = {
  name: 'hero-cmp-4',
  type: 'container',
  category: 'hero',
  themePalette: 'primary',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/hero/wap-hero-3.JPG'),
  style: {},

  cmps: [
    {
      type: 'container',
      name: 'parallax-container',
      id: uuidv4(),
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          name: 'title',
          info: {
            txt: 'ASHLEY',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          name: 'sub-title',
          info: {
            txt: 'Vlogging About Beauty, Fashion, Life Hacks & My Life!',
          },
        },
      ],
    },
  ],
}
