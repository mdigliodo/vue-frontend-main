// src/views/__tests__/RegisterFormView.test.js
import { mount, config } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

import SecurityAndPrivacityInfoForm from '@/components/Forms/SecurityAndPrivacityInfoForm.vue'

// Mock i18n globally
config.global.mocks = {
  $t: (key) => key, // return key itself or any fake text
}

describe('SecurityAndPrivacityInfoForm.vue', () => {
  const factory = () => mount(SecurityAndPrivacityInfoForm)

  test('renders four empty inputs on mount', () => {
    const wrapper = factory()
    const inputs = wrapper.findAll('input')
    expect(inputs).toHaveLength(3)
    const values = inputs.map(i => i.element.value)
    expect(values).toEqual(['', '', ''])
  })

  test('renders three buttons on mount', () => {
    const wrapper = factory()
    const buttons = wrapper.findAll('button[id="change-password-button"], button[id="two-factor-authentication-button"], button[id="login-history-button"]')
    expect(buttons).toHaveLength(3)
  })

  test('typing in username-security updates data.username and make sure is read-only true', async () => {
    const wrapper = factory()
    const username = wrapper.find('input[id="username-security-input"]')
    expect(username.exists()).toBe(true)
    expect(username.element.value).toBe('')
    await wrapper.find('input[id="username-security-input"]').setValue('New Username')
    expect(username.element.value).toBe('New Username')
    expect(username.attributes('aria-readonly')).toBe('true')
  })

  test('typing in current-password updates data.currentPassword and make sure is not read-only true', async () => {
    const wrapper = factory()
    const currentPassword = wrapper.find('input[id="current-password-input"]')
    await currentPassword.setValue('CurrentPassword123')
    expect(currentPassword.element.value).toBe('CurrentPassword123')
    expect(currentPassword.attributes('aria-readonly')).toBe('false')
  })

  test('typing in password updates data.password and make sure is not read-only true', async () => {
    const wrapper = factory()
    const password = wrapper.find('input[id="password-input"]')
    await password.setValue('NewPassword123')
    expect(password.element.value).toBe('NewPassword123')
    expect(password.attributes('aria-readonly')).toBe('false')
  })
})
