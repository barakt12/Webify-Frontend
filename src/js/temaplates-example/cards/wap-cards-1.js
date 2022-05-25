export const wapCards1 = {
  type: 'container',
  name: 'wap-cards-1',
  thumbnail: 'https://i.postimg.cc/7h0qq8v4/wap-cards-1.png',
  style: {},
  cmps: [
    {
      type: 'txt',
      info: {
        txt: 'Latest Projects',
      },
      style: {
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: '700',
        marginBottom: '1rem',
      },
    },
    {
      type: 'container',
      name: 'cards-container',
      cmps: [
        {
          type: 'container',
          name: 'card',
          cmps: [
            {
              type: 'img',
              info: {
                imgUrl: 'https://assets.website-files.com/61ea6abd5724fb064ae5cd40/61ea6bc00c46710f0c92b5a5_image%2016.png',
              },
            },
            {
              type: 'txt',
              info: {
                txt: 'NFT Marketplace app & website design',
              },
              style: {
                fontSize: '1.5rem',
                fontWeight: '700',
              },
            },
          ],
        },
        {
          type: 'container',
          name: 'card',
          cmps: [
            {
              type: 'img',
              info: {
                imgUrl: 'https://assets.website-files.com/61ea6abd5724fb064ae5cd40/61ea6b7272d92a3dbe255cf6_image%2015.png',
              },
            },
            {
              type: 'txt',
              info: {
                txt: 'A British charity providing critical veterinary support.',
              },
              style: {
                fontSize: '1.5rem',
                fontWeight: '700',
              },
            },
          ],
        },
        {
          type: 'container',
          name: 'card',
          cmps: [
            {
              type: 'img',
              info: {
                imgUrl: 'https://assets.website-files.com/61ea6abd5724fb064ae5cd40/61ea6acaa592544ef133dd30_altruistiq.png',
              },
            },
            {
              type: 'txt',
              info: {
                txt: 'An environmental tech company reducing Co2 worldwide',
              },
              style: {
                fontSize: '1.5rem',
                fontWeight: '700',
              },
            },
          ],
        },
      ],
    },
  ],
}
