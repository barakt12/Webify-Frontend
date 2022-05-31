import { v4 as uuidv4 } from 'uuid'

export const formCmp3 = {
  name: 'form-cmp-3',
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
                label: 'Full Name',
                placeholder: 'Enter Your Full name',
              },
              {
                type: 'input',
                label: 'Email *',
                placeholder: 'Enter Your Email',
              },
              {
                type: 'number',
                label: 'Phone',
                placeholder: 'Enter Your Phone number',
              },
            ],
          },
        },
        {
          type: 'btn',
          name: 'btn',
          id: uuidv4(),
          info: {
            txt: 'Submit',
          },
        },
      ],
    },
  ],
}
