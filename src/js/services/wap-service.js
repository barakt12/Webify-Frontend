import { wapTemplate1 } from '../temaplates-example/wap-template-1'
import { wapTemplate2 } from '../temaplates-example/wap-template-2'

export const wapService = {
  //   getTemplates,
  //   getCmpById,
  //   getFooters,
  getTemplateById,
  // getTemplate,
}
const wapTemplates = [wapTemplate1,wapTemplate2]

// const templates = [
//   {
//     name: 'header1',
//     type: 'container',
//     id: 'h101',
//     //change to cloudinary
//     thumbnail: 'https://i.postimg.cc/vmFf4mMv/header1.png',
//     //each component will have his own css file
//     style: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       padding: '0.5rem 1rem',
//       alignItems: 'center',
//       backgroundColor: 'tomato',
//       color: 'white',
//     },
//     cmps: [
//       {
//         type: 'txt',
//         content: 'Header1',
//         id: 'u38jg',
//         style: {
//           fontSize: '2rem',
//           fontWeight: '700',
//         },
//         cmps: [],
//       },
//       {
//         type: 'nav-bar',
//         id: 'fsrgsdrthge',
//         style: {
//           display: 'flex',
//           gap: '0.5rem',
//         },
//         cmps: [
//           {
//             type: 'txt',
//             content: 'Home',
//             id: 'u38jgfw4gfw4gwg',
//             style: {},
//             cmps: [],
//           },
//           {
//             type: 'txt',
//             content: 'Page1',
//             id: 'u38j43434ff34f3g',
//             style: {},
//             cmps: [],
//           },
//           {
//             type: 'txt',
//             content: 'Page2',
//             id: 'u34tf34f33845g43jg',
//             style: {},
//             cmps: [],
//           },
//           {
//             type: 'txt',
//             content: 'About',
//             id: 'u3345g34f3434f8jg',
//             style: {},
//             cmps: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'header2',
//     type: 'container',
//     id: 'h102',
//     thumbnail: 'https://i.postimg.cc/g0VR8P2b/header2.png',
//     style: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       padding: '0.5rem 1rem',
//       alignItems: 'center',
//       backgroundColor: 'dodgerblue',
//       color: 'white',
//     },
//     cmps: [
//       {
//         type: 'txt',
//         content: 'Header1',
//         style: {
//           fontSize: '2rem',
//           fontWeight: '700',
//         },
//         cmps: [],
//       },
//       {
//         type: 'nav-bar',
//         style: {
//           display: 'flex',
//           gap: '0.5rem',
//         },
//         cmps: [
//           {
//             type: 'txt',
//             content: 'Home',
//             style: {},
//             cmps: [],
//           },
//           {
//             type: 'txt',
//             content: 'Page1',
//             style: {},
//             cmps: [],
//           },
//           {
//             type: 'txt',
//             content: 'Page2',
//             style: {},
//             cmps: [],
//           },
//           {
//             type: 'txt',
//             content: 'About',
//             style: {},
//             cmps: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'header3',
//     type: 'container',
//     id: 'h103',
//     thumbnail: 'https://i.postimg.cc/Y9tFxyvG/header3.png',
//     style: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       padding: '0.5rem 1rem',
//       alignItems: 'center',
//       backgroundColor: 'gray',
//       color: 'lightgray',
//     },
//     cmps: [
//       {
//         type: 'txt',
//         content: 'Header1',
//         style: {
//           fontSize: '2rem',
//           fontWeight: '700',
//         },
//         cmps: [],
//       },
//       {
//         type: 'nav-bar',
//         style: {
//           display: 'flex',
//           gap: '0.5rem',
//         },
//         cmps: [
//           {
//             type: 'txt',
//             content: 'Home',
//             style: {},
//             cmps: [],
//           },
//           {
//             type: 'txt',
//             content: 'Page1',
//             style: {},
//             cmps: [],
//           },
//           {
//             type: 'txt',
//             content: 'Page2',
//             style: {},
//             cmps: [],
//           },
//           {
//             type: 'txt',
//             content: 'About',
//             style: {},
//             cmps: [],
//           },
//         ],
//       },
//     ],
//   },
// ]

// const footers = [
//   {
//     name: 'footer1',
//     type: 'container',
//     id: 'f101',
//     thumbnail: null,
//     style: {
//       color: 'white',
//       padding: '1rem',
//       backgroundColor: 'tomato',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     cmps: [
//       {
//         type: 'txt',
//         content: 'Logo',
//         style: {
//           fontSize: '2rem',
//           marginBottom: '0.5rem',
//         },
//         cmps: [],
//       },
//       {
//         type: 'container',
//         style: {
//           display: 'flex',
//           gap: '0.25rem',
//         },
//         cmps: [
//           {
//             type: 'icon',
//             iconName: 'facebook',
//             cmps: [],
//           },
//           {
//             type: 'icon',
//             iconName: 'instagram',
//             cmps: [],
//           },
//           {
//             type: 'icon',
//             iconName: 'linkedin',
//             cmps: [],
//           },
//         ],
//       },
//     ],
//   },
// ]

// function getFooters() {
//   return footers
// }

// function getCmpById(id) {
//   return templates.find((header) => header.id === id)
// }
// function getTemplates() {
//   return templates
// }

// function getTemplate() {
//   return wapTemplate2
// }
function getTemplateById(id) {
  return wapTemplates.find((template) => template._id === id)
}
