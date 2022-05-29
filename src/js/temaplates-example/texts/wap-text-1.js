import { v4 as uuidv4 } from 'uuid'

export const wapText1 = {
  type: 'container',
  name: 'wap-text-1',
  themePalette: 'primary',
  category: 'text',
  id: uuidv4(),
  thumbnail: 'https://i.postimg.cc/4NRJBdtx/wap-text-1.png',
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'Plenty reasons to join',
      },
      style: {
        fontSize: '3rem',
        fontWeight: '700',
        paddingBottom: '1rem',
        alignSelf: 'center',
      },
    },
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'Unlimited design subscription tasks to scale your business.',
      },
      style: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: 'rgba(249,245,242,0.5)',
        paddingBottom: '2rem',
        alignSelf: 'center',
      },
    },
    {
      type: 'container',
      id: uuidv4(),
      name: 'reasons-to-join',
      cmps: [
        {
          type: 'container',
          id: uuidv4(),
          cmps: [
            {
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl: 'https://assets.website-files.com/61cc561b6b6505a3ab5446e0/61ea7c77246be61543f9fc27_crown%20(3)%201.svg',
              },
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'Lead by a Webflow Expert',
              },
            },
          ],
        },
        {
          type: 'container',
          id: uuidv4(),
          cmps: [
            {
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl: 'https://assets.website-files.com/61cc561b6b6505a3ab5446e0/61ea7c78d5a24b4d37d29e8c_open-24-hours%201.svg',
              },
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'Unlimited design  requests',
              },
            },
          ],
        },
        {
          type: 'container',
          id: uuidv4(),
          cmps: [
            {
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl: 'https://assets.website-files.com/61cc561b6b6505a3ab5446e0/61ea7c787cc6d3185c383aae_folder%201.svg',
              },
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'Designs & code are kept safe',
              },
            },
          ],
        },
        {
          type: 'container',
          name: 'wap-container-text-1',
          id: uuidv4(),
          cmps: [
            {
              type: 'img',
              id: uuidv4(),
              info: {
                imgUrl: 'https://assets.website-files.com/61cc561b6b6505a3ab5446e0/61ea7c7896d2bf26cd23df19_barcode%201.svg',
              },
            },
            {
              type: 'txt',
              id: uuidv4(),
              info: {
                txt: 'Scale at any time to meet demand',
              },
            },
          ],
        },
      ],
    },
  ],
}
