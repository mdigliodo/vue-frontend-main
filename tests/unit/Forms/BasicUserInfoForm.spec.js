// src/views/__tests__/RegisterFormView.test.js
import { mount, config } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

import BasicUserInfoForm from '@/components/Forms/BasicUserInfoForm.vue'

// Mock i18n globally
config.global.mocks = {
  $t: (key) => key, // return key itself or any fake text
}

describe('BasicUserInfoForm.vue', () => {
  const factory = () => mount(BasicUserInfoForm)

  test('renders four empty inputs on mount', () => {
    const wrapper = factory()
    const inputs = wrapper.findAll('input')
    expect(inputs).toHaveLength(3)
    const values = inputs.map(i => i.element.value)
    expect(values).toEqual(['', '', ''])
  })

  test('typing in username updates data.username and make sure is read-only true', async () => {
    const wrapper = factory()
    const username = wrapper.find('input[id="username-input"]')
    expect(username.exists()).toBe(true)
    expect(username.element.value).toBe('')
    await wrapper.find('input[id="username-input"]').setValue('username')
    expect(username.element.value).toBe('username')
    expect(username.attributes('aria-readonly')).toBe('true')
  })

  test('typing in email updates data.email and make sure is read-only true', async () => {
    const wrapper = factory()
    const email = wrapper.find('input[id="email-input"]')
    await email.setValue('test@example.com')
    expect(email.element.value).toBe('test@example.com')
    expect(email.attributes('aria-readonly')).toBe('true')
  })

  test('typing in phone updates data.phone and make sure is read-only true', async () => {
    const wrapper = factory()
    const phone = wrapper.find('input[id="phone-input"]')
    await phone.setValue('6543210987')
    expect(phone.element.value).toBe('6543210987')
    expect(phone.attributes('aria-readonly')).toBe('true')
  })
})
