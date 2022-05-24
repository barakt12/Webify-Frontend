import { Home } from './js/pages/Home/home.jsx'
import { Editor } from './js/pages/Editor/editor.jsx'
import { WebTemplate1 } from './js/cmps/web-templates/WebTemplate1.jsx'
import { WebTemplate2 } from './js/cmps/web-templates/WebTemplate2.jsx'

export const routes = [
  {},
  {
    path: '/editor',
    component: Editor,
  },
  {
    path: '/Template1',
    component: WebTemplate1,
  },
  {
    path: '/Template1',
    component: WebTemplate2,
  },
  {
    path: '/',
    component: Home,
  },
]
