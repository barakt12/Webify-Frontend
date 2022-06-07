import { v4 as uuidv4 } from 'uuid'

export const themes = [
  {
    id: uuidv4(),
    name: 'Business',
    description: 'Nifty & sophisticated',
    fontFamily: 'Forum',
    colors: {
      primary: {
        backgroundColor: '#11999E',
        color: '#fff',
        fill: '#fff',
      },
      secondary: {
        backgroundColor: '#40514E',
        color: '#fff',
        fill: '#fff',
      },
      third: {
        backgroundColor: '#E4F9F5',
        color: '#000',
        fill: '#000',
      },
    },
  },
  {
    id: uuidv4(),
    name: 'Vivid',
    description: 'Bright & Expressive',
    fontFamily: 'Playfair',
    colors: {
      primary: {
        backgroundColor: '#F47C7C',
        color: '#fff',
        fill: '#fff',
      },
      secondary: {
        backgroundColor: '#EF9F9F',
        color: '#000',
        fill: '#000',
      },
      third: {
        backgroundColor: '#FAD4D4',
        color: '#000',
        fill: '#000',
      },
    },
  },
  {
    id: uuidv4(),
    name: 'Earthy',
    description: 'Subtle & Natural',
    fontFamily: 'Playfair',
    colors: {
      primary: {
        backgroundColor: '#F8ECD1',
        // backgroundColor: '#EC994B',
        color: '#000',
        fill: '#000',
      },
      secondary: {
        backgroundColor: '#DEB6AB',
        color: '#000',
        fill: '#000',
      },
      third: {
        backgroundColor: '#AC7D88',
        color: '#fff',
        fill: '#fff',
      },
    },
  },
  {
    id: uuidv4(),
    name: 'Creamy',
    description: 'Neutral & Serene',
    fontFamily: 'Oswald',
    colors: {
      primary: {
        backgroundColor: '#628C67',
        color: '#fff',
        fill: '#fff',
      },
      secondary: {
        backgroundColor: '#FDEBC9',
        color: '#000',
        fill: '#000',
      },
      third: {
        backgroundColor: '#ED6C5C',
        color: '#fff',
        fill: '#fff',
      },
    },
  },
  {
    id: uuidv4(),
    name: 'Laid Back',
    description: 'Pungent & zesty',
    colors: {
      primary: {
        backgroundColor: '#014235',
        // backgroundColor: '#EC994B',
        color: '#fff',
        fill: '#fff',
      },
      secondary: {
        backgroundColor: '#C7C7C7',
        color: '#000',
        fill: '#000',
      },
      third: {
        backgroundColor: '#97ADED',
        color: '#000',
        fill: '#000',
      },
    },
  },
  {
    id: uuidv4(),
    name: 'Calming',
    description: 'Calm & easy-going',
    fontFamily: 'Arial',
    colors: {
      primary: {
        backgroundColor: '#92B4EC',
        color: '#484848',
        fill: '#484848',
      },
      secondary: {
        backgroundColor: '#FFFFFF',
        color: '#000',
        fill: '#000',
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
        fill: '#000',
      },
      secondary: {
        backgroundColor: '#F8F4F1',
        color: '#000',
        fill: '#000',
      },
      third: {
        backgroundColor: '#A34A21',
        color: '#fff',
        fill: '#fff',
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
        fill: '#fff',
      },
      // rgb(11 122 157 / 63%)
      secondary: {
        backgroundColor: '#ebe079bd',
        color: '#000',
        fill: '#000',
      },
      third: {
        backgroundColor: '#fff',
        color: '#000',
        fill: '#000',
      },
    },
  },
]
