import { v4 as uuidv4 } from "uuid";

export const wapGallery1 = {
  type: "container",
  name: "wap-gallery-1",
  id: uuidv4(),
  category: "gallery",
  themePalette: "primary",
  imgUrl: null,
  style: {},
  cmps: [
    {
      type: "txt",
      id: uuidv4(),
      name: "gallery-header",
      info: {
        txt: "What will you learn?",
      },
    },
    {
      type: "gallery-1",
      id: uuidv4(),
      name: "gallery",
      info: {
        images: [
          "https://www.coding-academy.org/images/icons/tools/css3.png",
          "https://www.coding-academy.org/images/icons/tools/js.png",
          "https://www.coding-academy.org/images/icons/tools/html5.png",
          "https://www.coding-academy.org/images/icons/tools/git.png",
          "https://www.coding-academy.org/images/icons/tools/sass.png",
          "https://www.coding-academy.org/images/icons/tools/output-onlinepngtools.png",
          "https://www.coding-academy.org/images/icons/tools/ng.png",
          "https://www.coding-academy.org/images/icons/tools/vue.png",
          "https://www.coding-academy.org/images/icons/tools/npm.png",
          "https://www.coding-academy.org/images/icons/tools/es6.png",
          "https://www.coding-academy.org/images/icons/tools/webpack.png",
          "https://www.coding-academy.org/images/icons/tools/nodejs.png",
        ],
      },
    },
    {
      type: "txt",
      id: uuidv4(),
      info: {
        txt: "In Webify Academy you will learn Intro to web, HTML, CSS, Algorithmic thinking, Programming with JavaScript, Object Oriented Programming, SASS, jQuery, mongoDB, git, AJAX, Working with APIs, REST server, Vue.js, Angular, React, Social network integration, Cyber defence, Responsiveness, Pixel-perfect design, Scoring a job interview, and much more!",
      },
    },
  ],
};
