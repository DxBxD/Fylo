import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ToyApp from '../views/ToyApp.vue'
import ToyDetails from '../views/ToyDetails.vue'
import ToyEdit from '../views/ToyEdit.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import UserDetails from '../views/UserDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/user',
      name: 'UserDetails',
      component: UserDetails,
    },
    {
      path: '/toy',
      name: 'ToyApp',
      component: ToyApp,
    },
    {
      path: '/toy/:toyId',
      name: 'ToyDetails',
      component: ToyDetails,
    },
    {
      path: '/toy/edit/:toyId?',
      name: 'ToyEdit',
      component: ToyEdit,
    },
    {
      path: '/toy/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
})

export default router
