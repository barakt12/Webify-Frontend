import { v4 as uuidv4 } from 'uuid'

export const wapHero1 = {
  name: 'wap-hero-1',
  id: uuidv4(),
  type: 'container',
  themePalette: 'primary',
  category: 'hero',
  thumbnail: 'https://i.postimg.cc/CxmShs2R/wap-hero-1.png',
  style: {
    width: '100%', // remove
    color: 'white',
    padding: '20px', // remove
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
        imgUrl: 'https://res.cloudinary.com/dgxe7pqxa/image/upload/v1653852763/hero1_vbtxkf.svg',
      },
    },
  ],
}
