import { createRouter, createWebHistory } from 'vue-router'
import App1 from '../views/App1/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'App1',
      component: App1
    },
    {
      path: '/app2',
      name: 'App2',
      component: () => import('../views/App2/Index.vue')
    },
    {
      path: '/app3',
      name: 'App3',
      component: () => import('@/views/App3/Index.vue')
    }
  ]
})

export default router
