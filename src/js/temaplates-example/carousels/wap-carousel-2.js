import { v4 as uuidv4 } from "uuid";

export const wapCarousel2 = {
  type: "container",
  id: uuidv4(),
  name: "wap-carousel-2",
  thumbnail: null,
  category: "carousel",
  themePalette: "primary",
  cmps: [
    {
      type: "carousel-lg",
      id: uuidv4(),
      info: {
        images: [
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
          "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWNhZGVteXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000",
          "https://images.unsplash.com/photo-1563394867331-e687a36112fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWNhZGVteXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        ],
      },
    },
  ],
};
