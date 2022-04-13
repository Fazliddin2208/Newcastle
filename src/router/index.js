import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Login from '@/views/Login.vue'
import Teachers from '@/pages/Teachers.vue'
import Students from '@/pages/Students.vue'
import Main from '@/pages/Main.vue'
import List from '@/pages/List.vue'
import Group from '@/pages/Group.vue'
import CreateGroup from '@/pages/CreateGroup.vue'
import Blocked from '@/pages/Blocked.vue'
import Calendar from '@/pages/Calendar.vue'

const routes = [
  // {
    // path: '/',
    // name: 'home',
    // component: HomeView
  // },
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/teachers',
    name: 'teachers',
    component: Teachers
  },
  {
    path: '/group',
    name: 'group',
    component: Group
  },
  {
    path: '/create-group',
    name: 'create-group',
    component: CreateGroup
  },
  {
    path: '/blocked',
    name: 'blocked',
    component: Blocked
  },
  {
    path: '/students',
    name: 'srudents',
    component: Students
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'main'},
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
