// src/views/__tests__/RegisterFormView.test.js
import { mount, config } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'

import HomeView from '@/views/HomeView.vue'

// Mock i18n globally
config.global.mocks = {
  $t: (key) => key, // return key itself or any fake text
  $router: {
    push: vi.fn(),
  },
}

describe('HomeView.vue', () => {
   const factory = () => mount(HomeView)

    test('renders one home intro button on mount', () => {
      const wrapper = factory()
      const buttons = wrapper.findAll('button[id="home-intro-button"]')
      expect(buttons).toHaveLength(1)
    })

    test('renders one home title on mount', () => {
      const wrapper = factory()
      const titles = wrapper.findAll('h1')
      expect(titles).toHaveLength(1)
    })

    test('renders two home subtitle on mount', () => {
      const wrapper = factory()
      const subtitles = wrapper.findAll('p')
      expect(subtitles).toHaveLength(2)
    })

    test('home intro button emits click event and redirect to introduction', async () => {
      const wrapper = factory()
      const button = wrapper.find('button[id="home-intro-button"]')
      await button.trigger('click')
      expect(config.global.mocks.$router.push).toHaveBeenCalledWith({ name: 'introduction' })
    })
})
