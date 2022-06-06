import { v4 as uuidv4 } from 'uuid'

export const themes = [
  {
    id: uuidv4(),
    name: 'Calming',
    description: 'Calm & easy-going',
    fontFamily: 'Arial',
    colors: {
      primary: {
        backgroundColor: '#92B4EC',
        color: '#484848',
      },
      secondary: {
        backgroundColor: '#FFFFFF',
        color: '#000',
      },
    },
  },
  {
    id: uuidv4(),
    name: 'Warm',
    description: 'Modern & pleasant',
    fontFamily: 'Roboto',
    colors: {
      primary: {
        backgroundColor: '#C6CCCA',
        color: '#000',
      },
      secondary: {
        backgroundColor: '#F8F4F1',
        color: '#000',
      },
      third: {
        backgroundColor: '#A34A21',
        color: '#fff',
      },
    },
  },
  {
    id: uuidv4(),
    name: 'Retro Vibrant',
    description: 'Hip, mod & stylish',
    fontFamily: 'Oswald',
    colors: {
      primary: {
        backgroundColor: 'rgb(11 122 157 / 63%)',
        color: '#fff',
      },
      // rgb(11 122 157 / 63%)
      secondary: {
        backgroundColor: '#ebe079bd',
        color: '#000',
      },
      third: {
        backgroundColor: '#fff',
        color: '#000',
      },
    },
  },
  {
    id: uuidv4(),
    name: 'Business',
    description: 'Nifty & sophisticated',
    colors: {
      primary: {
        backgroundColor: '#11999E',
        color: '#fff',
      },
      secondary: {
        backgroundColor: '#40514E',
        color: '#fff',
      },
      third: {
        backgroundColor: '#E4F9F5',
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
        backgroundColor: '#c2ffb0',
        color: '#000',
      },
      secondary: {
        backgroundColor: '#1f1f1f',
        // backgroundColor: '#EC994B',
        color: 'white',
      },
    },
  },
]
