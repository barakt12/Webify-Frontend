import { v4 as uuidv4 } from 'uuid'

export const sectionCmp3 = {
  name: 'section-cmp-3',
  type: 'container',
  category: 'section',
  themePalette: 'primary',
  id: uuidv4(),
  thumbnail: require('../../../assets/img/thumbnails/section/wap-section-3.JPG'),
  style: {},
  cmps: [
    {
      type: 'container',
      id: uuidv4(),
      name: 'paralax-container',
      style: {
        backgroundImage:
          'url(https://static.wixstatic.com/media/11062b_7c2f2f83b73446eaa0526b6c88a5177b~mv2.jpg/v1/fill/w_1196,h_1201,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_7c2f2f83b73446eaa0526b6c88a5177b~mv2.jpg)',
      },
    },
    {
      type: 'container',
      name: 'about-me',
      id: uuidv4(),
      cmps: [
        {
          type: 'txt',
          name: 'about-me-heading',
          style: { fontSize: '2rem', fontWeight: '400' },

          id: uuidv4(),
          info: {
            txt: 'About Me',
          },
        },
        {
          type: 'txt',
          id: uuidv4(),
          style: { fontSize: '1.3rem', fontWeight: '400' },

          info: {
            txt: " I am an artist that specializes in simplistic and beautiful designs. My tattoos are filled with meaning, and are often very intricate. My work can be dark, but also light-hearted, depending on what the mood calls for. I do not believe in the 'one size fits all' approach to tattooing, so each piece is designed to fit your likes and personality.",
          },
        },
        // {
        //   type: 'txt',
        //   id: uuidv4(),
        //   style: { fontSize: '1rem', fontWeight: '400' },

        //   info: {
        //     txt: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
        //   },
        // },
      ],
    },
  ],
}
