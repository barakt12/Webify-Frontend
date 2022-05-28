import { v4 as uuidv4 } from 'uuid'

export const wapVideo1 = {
  type: 'container',
  name: 'wap-video-1',
  category: 'video',
  themePalette: 'primary',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/video/wap-video-1.jpg'),
  style: {},
  cmps: [
    {
      type: 'container',
      name: 'video-description',
      id: uuidv4(),
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Next course: July 2022',
            fontWeight: '500',
            fontSize: '1.5rem',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'A "First Look" zoom at may 31st',
          },
          style: {
            color: '#ebb811',
            fontWeight: '700',
            fontSize: '1.7rem',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Webify Academy has transferred all courses to LIVE. The same instructors, the same practitioners, the same personal attitude now using the ZOOM app in your home. Hundreds of students have already chosen to make the most of these days and learn to program in the leading and well-known programming course in the country. Intensive 12 weeks of programming studies followed by rapid integration into the high-tech industry.',
          },
          style: {
            fontWeight: '400',
            fontSize: '1.4rem',
          },
        },
        {
          type: 'btn',
          id: uuidv4(),
          info: {
            txt: 'Contact us',
          },
          style: {},
        },
      ],
    },
    {
      type: 'video',
      id: uuidv4(),
      info: {
        videoUrl: 'https://www.youtube.com/watch?v=Z3TIhMGQ_8k',
      },
    },
  ],
}
