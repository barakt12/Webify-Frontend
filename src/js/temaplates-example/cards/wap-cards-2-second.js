import { v4 as uuidv4 } from 'uuid'

export const wapCards2second = {
  type: 'container',
  name: 'wap-cards-2-second',
  themePalette: 'primary',
  category: 'cards',
  id: uuidv4(),
  thumbnail: '',
  style: {
    backgroundColor: 'white',
    color: 'black'
  },
  cmps: [
  {
    type: 'container',
    name: 'wap-cards-2-second-container',
    id: uuidv4(),
    style: {},
    cmps: [
      {
        type: 'txt',
        id: uuidv4(),
        name: 'wap-cards-2-second-main-header',
        info: {
          txt: 'AENEAN CONSECTETUR',
        },
        style: {},
      },
      {
        type: 'txt',
        id: uuidv4(),
        name: 'wap-cards-2-second-sec-header',
        info: {
          txt: 'Cay sociis nato que penatibus et',
        },
        style: {},
      },
      {
        type: 'txt',
        id: uuidv4(),
        name: 'wap-cards-2-second-third-header',
        info: {
          txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        },
        style: {},
      },
    ]
  },
  {
    type: 'img',
    id: uuidv4(),
    style: {
    },
    info: {
      imgUrl: 'https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5b11c6a9804c1fef0bd52833_app-06.png',
    },
  }
  ]
}
