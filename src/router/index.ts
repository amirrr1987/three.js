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
    },
    {
      path: '/app4',
      name: 'App4',
      component: () => import('@/views/App4/Index.vue')
    },
    {
      path: '/app5',
      name: 'App5',
      component: () => import('@/views/App5/Index.vue')
    },
    {
      path: '/app6',
      name: 'App6',
      component: () => import('@/views/App6/Index.vue')
    },
    {
      path: '/app7',
      name: 'App7',
      component: () => import('@/views/App7/Index.vue')
    },
    {
      path: '/app8',
      name: 'App8',
      component: () => import('@/views/App8/Index.vue')
    }
  ]
})

export default router
