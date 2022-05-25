export const cards1 = {
  type: 'container',
  name: 'cards1',
  thumbnail: null,
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    flexWrap: 'wrap',
    gap: '1rem',
    color: '#333',
    width: '100%',
    minHeight: '300px',
    alignContent: 'center',
    padding: '1rem 1rem',
  },
  cmps: [
    {
      type: 'container',
      style: {
        textAlign: 'center',
      },
      cmps: [
        {
          type: 'icon',
          iconName: 'speed',
        },
        {
          type: 'txt',
          content: 'Speed',
          style: {
            fontSize: '1.5rem',
            fontWeight: '700',
          },
        },
        {
          type: 'txt',
          content:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, consequuntur est! Eveniet eaque facere nemo id, porro possimus tempore eum blanditiis, esse ipsum nostrum accusantium quis nisi dolorem quo beatae.',
        },
      ],
    },
    {
      type: 'container',
      style: {
        textAlign: 'center',
      },
      cmps: [
        {
          type: 'icon',
          iconName: 'energy',
        },
        {
          type: 'txt',
          content: 'Efficiency',
          style: {
            fontSize: '1.5rem',
            fontWeight: '700',
          },
        },
        {
          type: 'txt',
          content:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, consequuntur est! Eveniet eaque facere nemo id, porro possimus tempore eum blanditiis, esse ipsum nostrum accusantium quis nisi dolorem quo beatae.',
        },
      ],
    },
    {
      type: 'container',
      style: {
        textAlign: 'center',
      },
      cmps: [
        {
          type: 'icon',
          iconName: 'car',
        },
        {
          type: 'txt',
          content: 'Style',
          style: {
            fontSize: '1.5rem',
            fontWeight: '700',
          },
        },
        {
          type: 'txt',
          content:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, consequuntur est! Eveniet eaque facere nemo id, porro possimus tempore eum blanditiis, esse ipsum nostrum accusantium quis nisi dolorem quo beatae.',
        },
      ],
    },
  ],
}
