import { v4 as uuidv4 } from 'uuid'

export const formCmp3 = {
  name: 'form-cmp-3',
  type: 'container',
  category: 'form',
  themePalette: 'secondary',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/form/wap-form-2.JPG'),
  style: {},
  cmps: [
    {
      type: 'container',
      name: 'form-header',
      id: uuidv4(),
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          style: {},
          info: {
            txt: 'NEVER MISS A THING',
          },
        },
        {
          type: 'container',
          name: 'social-media-icons',
          id: uuidv4(),
          cmps: [
            {
              type: 'icon',
              id: uuidv4(),
              info: {
                iconName: 'facebook',
              },
            },
            {
              type: 'icon',
              id: uuidv4(),
              info: {
                iconName: 'instagram',
              },
            },
            {
              type: 'icon',
              id: uuidv4(),
              info: {
                iconName: 'linkedin',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'container',
      name: 'form-container',
      id: uuidv4(),
      cmps: [
        {
          type: 'container',
          id: uuidv4(),
          name: 'form-side-text',
          style: {},
          cmps: [
            {
              type: 'txt',
              id: uuidv4(),
              name: 'heading',
              info: {
                txt: "I'D LOVE TO HEAR FROM YOU",
              },
            },
            {
              type: 'txt',
              id: uuidv4(),
              name: 'heading',
              info: {
                txt: 'Email for contact: info@mysite.com',
              },
            },
          ],
        },
        {
          type: 'form',
          id: uuidv4(),
          info: {
            formFields: [
              {
                type: 'input',
                name: 'fullName',
                label: 'Full Name',
                placeholder: 'Enter Your Full name',
              },
              {
                type: 'input',
                name: 'email',
                label: 'Email *',
                placeholder: 'Enter Your Email',
              },
              {
                type: 'textarea',
                rows: '8',
                name: 'msg',
                label: 'Message',
                placeholder: 'Enter Your message here',
              },
            ],
          },
        },
      ],
    },
  ],
}
