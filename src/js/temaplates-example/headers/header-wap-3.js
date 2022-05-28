import { v4 as uuidv4 } from 'uuid'

export const headerWap3 = {
  type: 'container',
  name: 'wap-header-3',
  themePalette: 'secondary',
  id: uuidv4(),
  imgUrl: null,
  style: {},
  cmps: [
    {
      type: 'container',
      id: uuidv4(),
      name: 'wap-template-3-logo',
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          style: {
            marginBottom: 0,
            padding: '5px 0',
            fontSize: '1.7rem',
            fontWeight: '700',
            lineHeight: '0.5',
          },
          info: {
            txt: 'webify',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          style: {
            margin: 0,
            fontSize: '1.7rem',
            fontWeight: '700',
            color: '#fecd11',
          },
          info: {
            txt: 'academy',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          style: {
            fontSize: '0.7rem',
            marginTop: '0',
            marginInlineStart: '1.5rem',
          },
          info: {
            txt: 'by MisterToy and MissBug',
          },
        },
      ],
    },
    {
      type: 'container',
      name: 'nav-bar',
      id: uuidv4(),
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Home',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'About our Course',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Contact Us',
          },
        },
      ],
    },
  ],
}
