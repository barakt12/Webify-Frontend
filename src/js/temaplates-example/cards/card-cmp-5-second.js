import { v4 as uuidv4 } from 'uuid'

export const SecondCardCmp5 = {
  type: 'container',
  name: 'wap-cards-5-second',
  themePalette: 'third',
  category: 'cards',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/section/wap-section-5-second.JPG'),
  style: {
    color: '#3d5975',
  },
  cmps: [
    {
      type: 'container',
      id: uuidv4(),
      name: 'cards-container',
      style: {
        width: '100%',
      },
      cmps: [
        {
          type: 'container',
          id: uuidv4(),
          name: 'card',
          cmps: [
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: '2023',
              },
              style: {
                fontSize: '3.75rem',
                fontWeight: '700',
              },
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'Year Established',
              },
              style: {
                fontSize: '1.375rem',
                fontWeight: '700',
              },
            },
          ],
        },
        {
          type: 'container',
          id: uuidv4(),
          name: 'card',
          cmps: [
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: '206',
              },
              style: {
                fontSize: '3.75rem',
                fontWeight: '700',
              },
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'Projects Completed',
              },
              style: {
                fontSize: '1.375rem',
                fontWeight: '700',
              },
            },
          ],
        },
        {
          type: 'container',
          id: uuidv4(),
          name: 'card',
          cmps: [
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: '870',
              },
              style: {
                fontSize: '3.75rem',
                fontWeight: '700',
              },
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'Contractors Appointed',
              },
              style: {
                fontSize: '1.375rem',
                fontWeight: '700',
              },
            },
          ],
        },
        {
          type: 'container',
          id: uuidv4(),
          name: 'card',
          cmps: [
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: '26',
              },
              style: {
                fontSize: '3.75rem',
                fontWeight: '700',
              },
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'Awards Won',
              },
              style: {
                fontSize: '1.375rem',
                fontWeight: '700',
              },
            },
          ],
        },
      ],
    },
  ],
}
