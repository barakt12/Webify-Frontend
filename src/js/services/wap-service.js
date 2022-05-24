export const wapService = {
  getHeaders,
  getCmpById,
}

const headers = [
  {
    name: 'header1',
    type: 'header',
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
    type: 'header',
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
    type: 'header',
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

function getHeaders() {
  return headers
}

function getCmpById(id) {
  return headers.find((header) => header.id === id)
}
