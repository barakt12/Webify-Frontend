import { Home } from './js/pages/Home/home.jsx'
import { Editor } from './js/pages/Editor/editor-page.jsx'
import { Profile } from './js/pages/Profile/profile.jsx'
import { Templates } from './js/pages/Templates/templates-page'
import { Publish } from './js/pages/Publish/publish.jsx'

export const routes = [
  {
    path: '/publish/:wapId',
    component: Publish,
  },
  {
    path: '/profile',
    component: Profile,
  },
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
    path: '/',
    component: Home,
  },
]
