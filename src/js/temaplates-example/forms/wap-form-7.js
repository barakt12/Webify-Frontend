import { v4 as uuidv4 } from 'uuid'

export const formCmp7 = {
  name: 'wap-footer-7',
  type: 'container',
  category: 'footer',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/form/wap-form-7.JPG'),
  style: {},
  cmps: [
    {
      name: 'first-footer-txt',
      type: 'container',
      category: 'footer',
      id: uuidv4(),
      style: {},
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'ADDRESS',
          },
          style: {
            fontSize: '1.5rem',
            color: 'white',
          },
          cmps: [],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: '500 Terry Francois St. San Francisco, CA 94158',
          },
          style: {
            fontSize: '0.875rem',
            color: 'white',
          },
          cmps: [],
        },
      ],
    },
    {
      name: 'second-footer-txt',
      type: 'container',
      category: 'footer',
      id: uuidv4(),
      style: {},
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'CONTACT',
          },
          style: {
            fontSize: '1.5rem',
            color: 'white',
          },
          cmps: [],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'info@mysite.com Tel: 123-456-7890',
          },
          style: {
            fontSize: '0.875rem',
            color: 'white',
          },
          cmps: [],
        },
      ],
    },
    {
      name: 'third-footer-txt',
      type: 'container',
      category: 'footer',
      id: uuidv4(),
      style: {},
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'HOURS',
          },
          style: {
            fontSize: '1.5rem',
            color: 'white',
          },
          cmps: [],
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'OPEN DAILY 10AM-10PM',
          },
          style: {
            fontSize: '0.875rem',
            color: 'white',
          },
          cmps: [],
        },
      ],
    },
    {
      name: 'fourth-footer-txt',
      type: 'container',
      category: 'footer',
      id: uuidv4(),
      style: {},
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'MAILING LIST',
          },
          style: {
            fontSize: '1.5rem',
            color: 'white',
          },
          cmps: [],
        },
        {
          type: 'form',
          id: uuidv4(),
          info: {
            formFields: [
              {
                type: 'input',
                name: 'email',
                label: 'Email *',
                placeholder: 'Enter Your email here*',
              },
            ],
          },
        },
      ],
    },
  ],
}
