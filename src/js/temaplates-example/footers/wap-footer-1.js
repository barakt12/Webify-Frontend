import { v4 as uuidv4 } from 'uuid'

export const wapFooter1 = {
  name: 'wap-footer-1',
  type: 'container',
  category: 'footer',
  id: uuidv4(),
  thumbnail: null,
  style: {},
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'Logo',
      },
      style: {
        fontSize: '2rem',
        marginBottom: '0.5rem',
      },
      cmps: [],
    },
    {
      type: 'container',
      id: uuidv4(),
      style: {
        display: 'flex',
        gap: '0.25rem',
      },
      cmps: [
        {
          type: 'icon',
          id: uuidv4(),
          info: {
            iconName: 'facebook',
          },
          cmps: [],
        },
        {
          type: 'icon',
          id: uuidv4(),
          info: {
            iconName: 'instagram',
          },
          cmps: [],
        },
        {
          type: 'icon',
          id: uuidv4(),
          info: {
            iconName: 'linkedin',
          },
          cmps: [],
        },
      ],
    },
  ],
}
