import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '@/components/layout/Layout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: async () => await import('@/pages/main/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
