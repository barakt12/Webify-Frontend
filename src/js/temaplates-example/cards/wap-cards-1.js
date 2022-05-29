import { v4 as uuidv4 } from 'uuid'

export const wapCards1 = {
  type: 'container',
  name: 'wap-cards-1',
  themePalette: 'primary',
  category: 'cards',
  id: uuidv4(),
  thumbnail: 'https://i.postimg.cc/7h0qq8v4/wap-cards-1.png',
  style: {},
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'Latest Projects',
      },
      style: {
        alignSelf: 'center',
        fontSize: '3rem',
        fontWeight: '700',
        marginBottom: '1rem',
      },
    },
    {
      type: 'container',
      id: uuidv4(),
      name: 'cards-container',
      cmps: [
        {
          type: 'container',
          id: uuidv4(),
          name: 'card',
          cmps: [
            {
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl: 'https://assets.website-files.com/61ea6abd5724fb064ae5cd40/61ea6bc00c46710f0c92b5a5_image%2016.png',
              },
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'NFT Marketplace app & website design',
              },
              style: {
                fontSize: '1rem',
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
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl: 'https://assets.website-files.com/61ea6abd5724fb064ae5cd40/61ea6b7272d92a3dbe255cf6_image%2015.png',
              },
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'A British charity providing critical veterinary support.',
              },
              style: {
                fontSize: '1rem',
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
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl: 'https://assets.website-files.com/61ea6abd5724fb064ae5cd40/61ea6acaa592544ef133dd30_altruistiq.png',
              },
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'An environmental tech company reducing Co2 worldwide',
              },
              style: {
                fontSize: '1rem',
                fontWeight: '700',
              },
            },
          ],
        },
      ],
    },
  ],
}
