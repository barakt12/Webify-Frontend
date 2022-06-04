import { v4 as uuidv4 } from 'uuid'

export const formCmp2 = {
  name: 'form-cmp-2',
  type: 'container',
  category: 'section',
  themePalette: 'secondary',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/form/wap-form-2.JPG'),
  style: {},
  cmps: [
    {
      type: 'container',
      name: 'side-text',
      id: uuidv4(),
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          style: { fontSize: '3rem', fontWeight: 400, fontFamily: 'Forum' },
          info: {
            txt: 'Be the First to Know about Available Bookings',
          },
        },
      ],
    },
    {
      type: 'container',
      name: 'form-container',
      id: uuidv4(),
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          name: 'form-heading',
          style: { fontSize: '2rem', fontWeight: 400, fontFamily: 'Forum' },

          info: {
            txt: 'Subscribe for Updates',
          },
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
                type: 'number',
                name: 'phone',
                label: 'Phone',
                placeholder: 'Enter Your Phone number',
              },
            ],
          },
        },
      ],
    },
  ],
}
