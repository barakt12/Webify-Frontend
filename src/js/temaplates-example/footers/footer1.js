export const footer1 = {
  name: 'footer1',
  type: 'container',
  id: 'f101',
  thumbnail: null,
  style: {
    color: 'white',
    padding: '1rem',
    backgroundColor: 'tomato',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cmps: [
    {
      type: 'txt',
      content: 'Logo',
      style: {
        fontSize: '2rem',
        marginBottom: '0.5rem',
      },
      cmps: [],
    },
    {
      type: 'container',
      style: {
        display: 'flex',
        gap: '0.25rem',
      },
      cmps: [
        {
          type: 'icon',
          iconName: 'facebook',
          cmps: [],
        },
        {
          type: 'icon',
          iconName: 'instagram',
          cmps: [],
        },
        {
          type: 'icon',
          iconName: 'linkedin',
          cmps: [],
        },
      ],
    },
  ],
}
