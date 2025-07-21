// src/views/__tests__/RegisterFormView.test.js
import { mount, config } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'

import IntroView from '@/views/IntroView.vue'

// Mock i18n globally
config.global.mocks = {
    $t: (key) => key, // return key itself or any fake text
    $router: {
        push: vi.fn(),
    },
}

describe('IntroView.vue', () => {
    const factory = () => mount(IntroView)

    test('renders one intro challenge button on mount', () => {
        const wrapper = factory()
        const buttons = wrapper.findAll('button[id="intro-challenge-0"]')
        expect(buttons).toHaveLength(1)
    })
    test('renders one intro challenge button on mount', () => {
        const wrapper = factory()
        const buttons = wrapper.findAll('button[id="intro-challenge-1"]')
        expect(buttons).toHaveLength(1)
    })
    test('renders one intro challenge button on mount', () => {
        const wrapper = factory()
        const buttons = wrapper.findAll('button[id="intro-challenge-2"]')
        expect(buttons).toHaveLength(1)
    })

    test('renders one intro title on mount', () => {
        const wrapper = factory()
        const titles = wrapper.findAll('h1[role="heading"]')
        expect(titles).toHaveLength(1)
    })
})
