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
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, molestias? Neque ullam, voluptate in nihil saepe animi perspiciatis? Officia, nulla voluptate quibusdam dolores adipisci dolorem veniam corporis vitae est vel?',
          },
          style: {
            fontWeight: '400',
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
