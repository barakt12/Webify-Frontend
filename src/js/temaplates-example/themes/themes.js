import { v4 as uuidv4 } from 'uuid'

export const themes = [
  {
    id: uuidv4(),
    name: 'Calming',
    description: 'Calm & easy-going',
    colors: {
      primary: {
        background: '#92B4EC',
        color: '#484848',
      },
      secondary: {
        background: '#FFFFFF',
        color: '#000',
      },
    },
  },
  {
    id: uuidv4(),
    name: 'Warm',
    description: 'Modern & pleasant',
    colors: {
      primary: {
        background: '#C6CCCA',
        color: '#000',
      },
      secondary: {
        background: '#F8F4F1',
        color: '#000',
      },
      third: {
        background: '#A34A21',
        color: '#fff',
      },
    },
  },
  {
    id: uuidv4(),
    name: 'Retro Vibrant',
    description: 'Hip, mod & stylish',
    colors: {
      primary: {
        background: '#035772',
        color: '#fff',
      },
      secondary: {
        background: '#EBE079',
        color: '#000',
      },
      third: {
        background: '#fff',
        color: '#000',
      },
    },
  },
  {
    id: uuidv4(),
    name: 'Business',
    description: 'Nifty & sophisticated',
    colors: {
      secondary: {
        background: '#5b2f2c',
        color: '#fff',
      },
      primary: {
        background: '#cdaf8c',
        color: '#fff',
      },
      third: {
        background: '#f1e4de',
        color: '#000',
      },
    },
  },
  {
    id: uuidv4(),
    name: 'Sporty',
    description: 'Pungent & zesty',
    colors: {
      primary: {
        background: 'black',
        color: 'white',
      },
      secondary: {
        background: '#c2ffb0',
        // background: '#EC994B',
        color: '#000',
      },
    },
  },
]
