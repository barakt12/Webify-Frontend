export const wapService = {
  getTemplates,
  getCmpById,
}

const templates = [
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
        id: 'u38jg',
        style: {
          fontSize: '2rem',
          fontWeight: '700',
        },
        cmps: [],
      },
      {
        type: 'nav-bar',
        id: 'fsrgsdrthge',
        style: {
          display: 'flex',
          gap: '0.5rem',
        },
        cmps: [
          {
            type: 'txt',
            content: 'Home',
            id: 'u38jgfw4gfw4gwg',
            style: {},
            cmps: [],
          },
          {
            type: 'txt',
            content: 'Page1',
            id: 'u38j43434ff34f3g',
            style: {},
            cmps: [],
          },
          {
            type: 'txt',
            content: 'Page2',
            id: 'u34tf34f33845g43jg',
            style: {},
            cmps: [],
          },
          {
            type: 'txt',
            content: 'About',
            id: 'u3345g34f3434f8jg',
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

function getTemplates() {
  return templates
}

function getCmpById(id) {
  return templates.find((header) => header.id === id)
}
