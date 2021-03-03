import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Client from '../components/Client'
import Contacts from '../components/Contacts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/client',
    name: 'clientes',
    component: Client 
  },
  {
    path:'/contato',
    name:'contatos',
    component:Contacts
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
