import { createRouter, createWebHistory } from 'vue-router'
import Hot from '../views/Hot.vue'

const routes = [
  {
    path: '/',
    name: 'Hottest Coins',
    component: Hot,
  },
  {
    path: '/stalk',
    name: 'Stalk',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Stalk.vue'),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
