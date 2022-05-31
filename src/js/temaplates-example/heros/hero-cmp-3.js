import { v4 as uuidv4 } from 'uuid'

export const heroCmp4 = {
  name: 'hero-cmp-3',
  type: 'container',
  category: 'hero',
  themePalette: 'primary',
  id: uuidv4(),
  //change to cloudinary
  thumbnail: null,
  //each component will have his own css file
  style: {},
  cmps: [
    {
      type: 'container',
      name: 'paralax-container',
      id: uuidv4(),
      style: {
        backgroundImage: 'url(https://trichos.pl/wp-content/uploads/2021/03/b795b156c00b6e0e7a4af2a65747d328-1170x658.jpg)',
      },
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          name: 'hero-heading',
          info: {
            txt: 'Contemporary Tattoos For All Bodies and Skin',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          name: 'hero-sub-heading',
          info: {
            txt: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
          },
        },
        {
          type: 'btn',
          id: uuidv4(),
          name: 'btn',
          info: {
            txt: 'Book',
          },
        },
      ],
    },
    {
      type: 'container',
      name: 'social-media-banner',
      id: uuidv4(),
      cmps: [
        {
          type: 'txt',
          id: uuidv4(),
          info: {
            txt: 'Follow me',
          },
        },
        {
          type: 'icon',
          id: uuidv4(),
          info: {
            iconName: 'facebook',
          },
        },
        {
          type: 'icon',
          id: uuidv4(),
          info: {
            iconName: 'instagram',
          },
        },
        {
          type: 'icon',
          id: uuidv4(),
          info: {
            iconName: 'linkedin',
          },
        },
      ],
    },
  ],
}
