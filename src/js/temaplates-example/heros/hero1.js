export const hero1 = {
  name: 'hero1',
  id: 'he101',
  type: 'container',
  style: {
    backgroundImage: 'url("https://www.bmw.co.il/content/dam/bmw/common/all-models/3-series/sedan/2021/highlights/bmw-3series-3er-inspire-sp-xxl.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
  },
  cmps: [
    {
      type: 'container',
      style: {
        color: 'white',
        marginInlineStart: '1.5rem',
      },
      cmps: [
        {
          type: 'txt',
          content: 'B.M.W',
          style: {
            fontSize: '3rem',
            fontWeight: '700',
          },
        },
        {
          type: 'txt',
          content: 'The future of automobile!',
          style: {
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: '700',
            textShadow: '5px 5px 5px gray',
          },
        },
      ],
    },
  ],
}
