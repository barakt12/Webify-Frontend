import { v4 as uuidv4 } from 'uuid'

export const galleryCmp2 = {
  name: 'gallery-cmp-3',
  type: 'container',
  category: 'gallery',
  themePalette: 'secondary',
  id: uuidv4(),
  //change to cloudinary
  thumbnail: null,
  //each component will have his own css file
  style: {},
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'My Work',
      },
    },
    {
      type: 'gallery-paged-slider',
      name: 'gallery',
      id: uuidv4(),
      info: {
        images: [
          'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Tattoo%20Artist/07.jpg',
          'https://static.wixstatic.com/media/ad420a_807504554dce46a7be1185f8f625cdb2~mv2.jpg/v1/fit/w_492,h_716,q_90/ad420a_807504554dce46a7be1185f8f625cdb2~mv2.webp',
          'https://static.wixstatic.com/media/ad420a_63051523a8b84fd6a8da684f6f80bbba~mv2_d_5184_3456_s_4_2.jpg/v1/fit/w_492,h_716,q_90/ad420a_63051523a8b84fd6a8da684f6f80bbba~mv2_d_5184_3456_s_4_2.webp',
          'https://static.wixstatic.com/media/ad420a_a8ad29de80e648aab1bba417897e00bb~mv2_d_3000_2000_s_2.jpg/v1/fit/w_492,h_716,q_90/ad420a_a8ad29de80e648aab1bba417897e00bb~mv2_d_3000_2000_s_2.webp',
          'https://static.wixstatic.com/media/ad420a_4f28664f4c95478daceec070a80d6ac1~mv2_d_2257_2286_s_2.jpg/v1/fit/w_492,h_716,q_90/ad420a_4f28664f4c95478daceec070a80d6ac1~mv2_d_2257_2286_s_2.webp',
          'https://static.wixstatic.com/media/ad420a_643b75efb51146cfb4663ed975b02ed5~mv2_d_1925_2258_s_2.jpg/v1/fit/w_492,h_716,q_90/ad420a_643b75efb51146cfb4663ed975b02ed5~mv2_d_1925_2258_s_2.webp',
        ],
      },
    },
  ],
}
