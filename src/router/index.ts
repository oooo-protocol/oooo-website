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
      }, {
        path: '/chestchase',
        name: 'ChestChase',
        component: async () => await import('@/pages/chest-chase/index.vue')
      }, {
        path: '/goooo',
        name: 'GooooPoints',
        component: async () => await import('@/pages/goooo-points/index.vue')
      }
    ]
  }, {
    path: '/goooo-points/callback/twitter',
    name: 'CallbackTwitter',
    component: async () => await import('@/pages/goooo-points/callback/twitter.vue')
  }, {
    path: '/goooo-points/callback/discord',
    name: 'CallbackDiscord',
    component: async () => await import('@/pages/goooo-points/callback/discord.vue')
  }, {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
