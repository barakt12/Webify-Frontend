import { v4 as uuidv4 } from 'uuid'

export const wapFAQ1 = {
  type: 'container',
  name: 'wap-faq-1',
  themePalette: 'secondary',
  category: 'faq',
  id: uuidv4(),
  thumbnail: 'https://i.postimg.cc/wT59Ppcc/wap-faq-1.png',
  cmps: [
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'Frequently Asked Questions',
      },
      style: {
        fontSize: '3rem',
        marginBottom: '1rem',
        fontWeight: '700',
      },
    },
    {
      type: 'txt',
      id: uuidv4(),
      info: {
        txt: 'Need to know more?',
      },
      style: {
        fontSize: '1.5rem',
        color: 'gray',
        fontWeight: '700',
        marginBottom: '3rem',
      },
    },
    {
      type: 'faq',
      id: uuidv4(),
      themePalette: 'third',
      info: {
        questions: [
          {
            question: 'Is it really unlimited requests?',
            answer:
              "Yes! Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will delivered one by one.",
          },
          {
            question: 'How long does it take for you to complete a task?',
            answer:
              "Most design tasks are completed within 3 days or less however more complex requests such as landing pages or integration can take longer. We always add a delivery date once marked 'active'.",
          },
          {
            question: 'What is an "active" task?',
            answer:
              'This is the number of tasks we will work on at one given time. For example, if you need a new landing page - first we will design it in Figma (1), gain your approval then prcoeed to developing it in Webflow (2). We\'ve found the queue in & queue out approach works well. We will let you know a timeframe to deliver upon setting the task as "active".',
          },
          {
            question:
              'Do you offer one-time web design or tasks? How much for?',
            answer:
              'Yes we do - We calculate our prices based on the project scope, timeline, and deliverables. We will give you a detailed proposal after learning as much as we can about your project.',
          },
        ],
      },
    },
  ],
}
