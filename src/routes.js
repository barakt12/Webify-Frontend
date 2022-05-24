import { Home } from './js/pages/Home/home.jsx'
import { WebTemplate1 } from './js/cmps/web-templates/WebTemplate1.jsx'
import { WebTemplate2 } from './js/cmps/web-templates/WebTemplate2.jsx'
import { Editor } from './js/pages/editor-example/editor-page.jsx'

export const routes = [
  {
    path: '/Template1',
    component: WebTemplate1,
  },
  {
    path: '/Template2',
    component: WebTemplate2,
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
