import { createRouter, createWebHistory } from 'vue-router'

import { loadLayoutMiddleware } from '@/router/middelware/loadLayoutMiddleware.js'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
          path: 'profile',
          name: 'profile',
          component: () => import('@/views/UserDetailView.vue'),
        },
      ],
    },
    {
      path: '/challenges',
      meta: {
        layout: 'ChallengeLayout',
      },
      children: [
        {
          path: '',
          name: 'intro',
          component: () => import('@/views/IntroView.vue'),
        },
        {
          path: 'register-form',
          name: 'register-form',
          component: () => import('@/views/RegisterFormView.vue'),
        },
        {
          path: 'user-detail',
          name: 'user-detail',
          component: () => import('@/views/UserDetailView.vue'),
        },
        {
          path: 'event-calendar',
          name: 'event-calendar',
          component: () => import('@/views/EventCalendarView.vue'),
        },
      ],
    },
  ],
})

router.beforeEach(loadLayoutMiddleware)

export default router
