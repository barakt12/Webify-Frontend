import { v4 as uuidv4 } from 'uuid'

export const wapMap1 = {
  type: 'container',
  name: 'wap-map-1',
  themePalette: 'secondary',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/map/wap-map-1.JPG'),
  style: {
    height: '80vh',
    width: '100%',
    display: 'flex'
  },
  cmps: [
    {
      type: 'map',
      id: uuidv4(),
      style: {},
      info: {
        markers: [
          {
            lat: 32.109333,
            lng: 34.855499,
            title: 'Tel Aviv',
          },
          {
            lat: 51.507351,
            lng: -0.127758,
            title: 'London',
          },
        ],
      },
    },
    {
      type: 'container',
      name: 'txt-container',
      id: uuidv4(),
      style: {},
      cmps: [
        {
          type: 'txt',
          name: 'main-header',
          id: uuidv4(),
          info: {
            txt: 'Our stores',
          },
          style: {
            fontSize: '3rem',
            fontWeight: '700',
          },
        },
        {
          type: 'txt',
          name: 'sub-header',
          id: uuidv4(),
          info: {
            txt: 'Find the nearest Momentum store near you!',
          },
          style: {
            fontSize: '2rem',
            fontWeight: '700',
          },
        },
      ],
    },
  ],
}
