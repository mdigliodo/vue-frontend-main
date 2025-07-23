import { createRouter, createWebHistory } from 'vue-router'

import { loadLayoutMiddleware } from '@/router/middelware/loadLayoutMiddleware.js'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => {
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
          meta: {
            layout: 'PublicLayout',
          },
        },
        {
          path: 'register',
          name: 'register-user',
          component: () => import('@/views/RegisterFormView.vue'),
          meta: {
            layout: 'MainLayout',
          },
        },
      ],
    },
    {
      path: '/admin',
      meta: {
        layout: 'PrivateLayout',
      },
      children: [
        {
          path: '/dashboard',
          name: 'introduction',
          component: () => import('@/views/IntroView.vue'),
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/views/UserDetailView.vue'),
        },
        {
          path: 'calendar',
          name: 'calendar',
          component: () => import('@/views/EventCalendarView.vue'),
        },
      ],
    },
  ],
})

router.beforeEach(loadLayoutMiddleware)

export default router
