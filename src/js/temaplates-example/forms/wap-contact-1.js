import { v4 as uuidv4 } from 'uuid'

export const wapContact1 = {
  name: 'wap-contact-1',
  id: uuidv4(),
  type: 'container',
  themePalette: 'secondary',
  category: 'form',
  thumbnail: require('../../../assets/img/thumbnails/form/wap-form-1.jpg'),
  cmps: [
    {
      type: 'txt',
      name: 'form-header',
      id: uuidv4(),
      info: {
        txt: 'For more details please leave us a message',
      },
    },
    {
      type: 'form',
      id: uuidv4(),
      info: {
        formFields: [
          {
            type: 'input',
            name: 'fullname',
            label: '',
            placeholder: 'Full name',
          },
          {
            type: 'input',
            name: 'email',
            label: '',
            placeholder: 'Email',
          },
          {
            type: 'number',
            name: 'phone',
            label: '',
            placeholder: 'Phone number',
          },
          {
            type: 'textarea',
            name: 'desc',
            label: '',
            rows: '5',
            placeholder: 'Tell us a bit about yourself',
          },
        ],
      },
    },
  ],
}
