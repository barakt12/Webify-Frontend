import { Home } from './js/pages/Home/home.jsx'
import { Editor } from './js/pages/Editor/editor-page.jsx'
import { Templates } from './js/pages/Templates/templates-page'
import { Publish } from './js/pages/Publish/publish.jsx'
import { Preview } from './js/pages/Preview/preview.jsx'
import { Login } from './js/pages/Login/login.jsx'
import { SignUp } from './js/pages/Signup/signup.jsx'
import { Dashboard } from './js/pages/Dashboard/dashboard.jsx'

export const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signup',
    component: SignUp,
  },
  {
    path: '/preview',
    component: Preview,
  },
  {
    path: '/publish/:wapId',
    component: Publish,
  },
  {
    path: '/dashboard',
    component: Dashboard,
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
