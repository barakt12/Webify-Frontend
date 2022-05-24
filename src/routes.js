import { Home } from './js/pages/Home/home.jsx'
import { Editor } from './js/pages/Editor/editor-page.jsx'
import { Templates } from './js/pages/Templates/templates-page'

export const routes = [
  {
    path: '/templates',
    component: Templates,
  },
  {
    path: '/editor/:wapId',
    component: Editor,
  },
  {
    path: '/editor',
    component: Editor,
  },
  {
    path: '/editor',
    component: Editor,
  },
  {
    path: '/',
    component: Home,
  },
]
