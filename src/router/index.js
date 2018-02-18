import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Calculus from '@/components/Calculus'
import Physics from '@/components/Physics'
import Chemistry from '@/components/Chemistry'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/calculus',
      name: 'Calculus',
      component: Calculus
    },
    {
      path: '/physics',
      name: 'Physics',
      component: Physics
    },
    {
      path: '/chemistry',
      name: 'Chemistry',
      component: Chemistry
    }
  ]
})
