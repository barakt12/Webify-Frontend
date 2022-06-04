import { v4 as uuidv4 } from 'uuid'

export const SectionCmp4 = {
  type: 'container',
  name: 'section-cmp-4',
  themePalette: 'secondary',
  category: 'section',
  thumbnail: 'https://res.cloudinary.com/dnv7wszu3/image/upload/v1654340129/wap-section-4_mpcsk3.jpg',
  id: uuidv4(),
  style: {},
  cmps: [
    {
      type: 'container',
      id: uuidv4(),
      name: 'parallax-container',
      cmps: [],
    },
    {
      type: 'container',
      id: uuidv4(),
      name: 'side-text',
      cmps: [
        {
          type: 'txt',
          name: 'title',
          id: uuidv4(),
          info: {
            txt: 'THIS IS MY STORY',
          },
        },
        {
          type: 'txt',
          name: 'desc',
          id: uuidv4(),
          info: {
            txt: 'Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.',
          },
        },
        {
          type: 'btn',
          name: 'btn',
          id: uuidv4(),
          info: {
            txt: 'Follow Me',
          },
        },
      ],
    },
  ],
}
