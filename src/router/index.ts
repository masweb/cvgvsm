import { createRouter, createWebHistory } from 'vue-router'
import Intro from '@/components/Intro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VUE_APP_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('@/components/Cv.vue')
    }
  ]
})

export default router
