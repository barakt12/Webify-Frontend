import { v4 as uuidv4 } from 'uuid'

export const galleryCmp3 = {
  name: 'gallery-cmp-3',
  type: 'container',
  category: 'gallery',
  themePalette: 'secondary',
  id: uuidv4(),
  thumbnail: null,
  style: {},
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      style: { fontSize: '3rem', fontWeight: '400', fontFamily: 'PT Sans Narrow' },

      info: {
        txt: 'MY VLOG',
      },
    },
    {
      type: 'gallery-mini-thumbnails',
      name: 'gallery',
      id: uuidv4(),
      info: {
        images: [
          'https://images-vod.wixmp.com/84770f67-ecbd-44b6-b35a-584f2dc15af1/images/e6631608e9474cda878045e43ad00be3~mv2/v1/fill/w_920,h_518,q_85,usm_0.66_1.00_0.01/file.webp',
          'https://images-vod.wixmp.com/84770f67-ecbd-44b6-b35a-584f2dc15af1/images/677d156c0cd5490b8e51ba27c2f29ffa~mv2/v1/fill/w_920,h_518,q_85,usm_0.66_1.00_0.01/file.webp',
          'https://images-vod.wixmp.com/84770f67-ecbd-44b6-b35a-584f2dc15af1/images/e47052a038c9451daf8e0cc79909cdc7~mv2/v1/fill/w_920,h_518,q_85,usm_0.66_1.00_0.01/file.webp',
          'https://images-vod.wixmp.com/84770f67-ecbd-44b6-b35a-584f2dc15af1/images/e1406a1b0f86401a8d60e08ce96db437~mv2/v1/fill/w_920,h_518,q_85,usm_0.66_1.00_0.01/file.webp',
          'https://images-vod.wixmp.com/84770f67-ecbd-44b6-b35a-584f2dc15af1/images/d8b4d49b6b55467b8a63e015c659cf2c~mv2/v1/fill/w_920,h_518,q_85,usm_0.66_1.00_0.01/file.webp',
        ],
      },
    },
    {
      type: 'btn',
      name: 'btn',
      id: uuidv4(),
      info: {
        txt: 'For More Videos',
      },
    },
  ],
}
