export const wapFooter1 = {
  name: 'wap-footer-1',
  type: 'container',
  id: 'wf101',
  thumbnail: null,
  style: {},
  cmps: [
    {
      type: 'txt',
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
      style: {
        display: 'flex',
        gap: '0.25rem',
      },
      cmps: [
        {
          type: 'icon',
          info: {
            iconName: 'facebook',
          },
          cmps: [],
        },
        {
          type: 'icon',
          info: {
            iconName: 'instagram',
          },
          cmps: [],
        },
        {
          type: 'icon',
          info: {
            iconName: 'linkedin',
          },
          cmps: [],
        },
      ],
    },
  ],
}
