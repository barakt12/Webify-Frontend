import { v4 as uuidv4 } from 'uuid'

export const wapHero1 = {
  name: 'wap-hero-1',
  id: uuidv4(),
  type: 'container',
  themePalette: 'primary',
  category: 'hero',
  thumbnail: 'https://i.postimg.cc/CxmShs2R/wap-hero-1.png',
  cmps: [
    {
      type: 'container',
      id: uuidv4(),
      style: {
        width: '100%',
        color: 'white',
        padding: '20px',
      },
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Unlimited Webflow Design for Startups',
          },
          style: {
            fontSize: '3rem',
            fontWeight: '700',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Superb design tasks to scale your business.',
          },
          style: {
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'rgba(249,245,242,0.5)',
          },
        },
        {
          type: 'img',
          id: uuidv4(),
          info: {
            imgUrl:
              'https://assets.website-files.com/61cc561b6b6505a3ab5446e0/61d42f234794b55be16be19c_5fdb4052dec20f5608465259_hero-illustration-2%201.svg',
          },
        },
      ],
    },
  ],
}
