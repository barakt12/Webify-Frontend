import { v4 as uuidv4 } from 'uuid'

export const SectionCmp5 = {
  type: 'container',
  name: 'wap-section-5',
  themePalette: 'secondary',
  category: 'cards',
  thumbnail: require('../../../assets/img/thumbnails/section/wap-section-5.JPG'),
  id: uuidv4(),
  style: {},
  cmps: [
    {
      type: 'container',
      id: uuidv4(),
      name: 'cards-container',
      cmps: [
        {
          type: 'txt',
          name: 'wap-main-txt-5',
          id: uuidv4(),
          info: {
            txt: 'ABOUT',
          },
          style: {
            fontSize: '3.4375rem',
            color: '#1e2d3b',
            fontWeight: 700,
            textDecoration: 'underline rgb(237, 205, 31)',
          },
        },
        {
          type: 'txt',
          name: 'wap-sub-txt-5',
          id: uuidv4(),
          info: {
            txt: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.`,
          },
          style: {
            fontSize: '1.0625rem',
            fontFamily: 'open-sans',
            fontWeight: 100,
          },
        },
      ],
    },
    {
      type: 'container',
      name: 'wap-card-5-img-container',
      id: uuidv4(),
      style: {},
      cmps: [],
    },
  ],
}
