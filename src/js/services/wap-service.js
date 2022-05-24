import { template1 } from '../temaplates-example/template1'

export const wapService = {
  getHeaders,
  getCmpById,
  getFooters,
  getTemplate,
  getCmpByIdAndType,
}

const headers = [
  {
    name: 'header1',
    type: 'container',
    id: 'h101',
    thumbnail: 'https://i.postimg.cc/vmFf4mMv/header1.png',
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.5rem 1rem',
      alignItems: 'center',
      backgroundColor: 'tomato',
      color: 'white',
    },
    cmps: [
      {
        type: 'txt',
        content: 'Header1',
        style: {
          fontSize: '2rem',
          fontWeight: '700',
        },
        cmps: [],
      },
      {
        type: 'nav-bar',
        style: {
          display: 'flex',
          gap: '0.5rem',
        },
        cmps: [
          {
            type: 'txt',
            content: 'Home',
            style: {},
            cmps: [],
          },
          {
            type: 'txt',
            content: 'Page1',
            style: {},
            cmps: [],
          },
          {
            type: 'txt',
            content: 'Page2',
            style: {},
            cmps: [],
          },
          {
            type: 'txt',
            content: 'About',
            style: {},
            cmps: [],
          },
        ],
      },
    ],
  },
  {
    name: 'header2',
    type: 'container',
    id: 'h102',
    thumbnail: 'https://i.postimg.cc/g0VR8P2b/header2.png',
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.5rem 1rem',
      alignItems: 'center',
      backgroundColor: 'dodgerblue',
      color: 'white',
    },
    cmps: [
      {
        type: 'txt',
        content: 'Header1',
        style: {
          fontSize: '2rem',
          fontWeight: '700',
        },
        cmps: [],
      },
      {
        type: 'nav-bar',
        style: {
          display: 'flex',
          gap: '0.5rem',
        },
        cmps: [
          {
            type: 'txt',
            content: 'Home',
            style: {},
            cmps: [],
          },
          {
            type: 'txt',
            content: 'Page1',
            style: {},
            cmps: [],
          },
          {
            type: 'txt',
            content: 'Page2',
            style: {},
            cmps: [],
          },
          {
            type: 'txt',
            content: 'About',
            style: {},
            cmps: [],
          },
        ],
      },
    ],
  },
  {
    name: 'header3',
    type: 'container',
    id: 'h103',
    thumbnail: 'https://i.postimg.cc/Y9tFxyvG/header3.png',
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.5rem 1rem',
      alignItems: 'center',
      backgroundColor: 'gray',
      color: 'lightgray',
    },
    cmps: [
      {
        type: 'txt',
        content: 'Header1',
        style: {
          fontSize: '2rem',
          fontWeight: '700',
        },
        cmps: [],
      },
      {
        type: 'nav-bar',
        style: {
          display: 'flex',
          gap: '0.5rem',
        },
        cmps: [
          {
            type: 'txt',
            content: 'Home',
            style: {},
            cmps: [],
          },
          {
            type: 'txt',
            content: 'Page1',
            style: {},
            cmps: [],
          },
          {
            type: 'txt',
            content: 'Page2',
            style: {},
            cmps: [],
          },
          {
            type: 'txt',
            content: 'About',
            style: {},
            cmps: [],
          },
        ],
      },
    ],
  },
]

const footers = [
  {
    name: 'footer1',
    type: 'container',
    id: 'f101',
    thumbnail: null,
    style: {
      color: 'white',
      padding: '1rem',
      backgroundColor: 'tomato',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    cmps: [
      {
        type: 'txt',
        content: 'Logo',
        style: {
          fontSize: '2rem',
          marginBottom: '0.5rem',
        },
        cmps: [],
      },
      {
        type: 'container',
        style: {
          display: 'flex',
          gap: '0.25rem',
        },
        cmps: [
          {
            type: 'icon',
            iconName: 'facebook',
            cmps: [],
          },
          {
            type: 'icon',
            iconName: 'instagram',
            cmps: [],
          },
          {
            type: 'icon',
            iconName: 'linkedin',
            cmps: [],
          },
        ],
      },
    ],
  },
]

function getHeaders() {
  return headers
}

function getFooters() {
  return footers
}

function getCmpById(id) {
  return headers.find((header) => header.id === id)
}

function getCmpByIdAndType(type, id) {
  switch (type) {
    case 'header':
      return headers.find((header) => header.id === id)
    case 'footer':
      return footers.find((footer) => footer.id === id)
  }
  return
}

function getTemplate() {
  return template1
}
