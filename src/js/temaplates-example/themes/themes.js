import { v4 as uuidv4 } from 'uuid'

export const themes = [
  {
  id: uuidv4(),
  name: 'Business theme',
  description: 'Nifty & sophisticated',
  colors: {
    primary: {
      backgroundColor: '#5b2f2c',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#cdaf8c',
      color: 'white',
    },
  },
},
{
  id: uuidv4(),
  name: 'Sport theme',
  description: 'Pungent & zesty',
  colors: {
    primary: {
      backgroundColor: 'black',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#44912d',
      color: 'white',
    },
  },
}
]
