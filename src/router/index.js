import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('../views/Customer.vue')
  },
  {
    path: '/careers',
    name: 'Careers',
    component: () => import('../views/Careers.vue')
  },
  {
    path: '/procurement',
    name: 'Procurement',
    component: () => import('../views/Procurement.vue')
  },
  {
    path: '/sustainability',
    name: 'Sustainability',
    component: () => import('../views/Sustainability.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
