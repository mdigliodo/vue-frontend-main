// src/views/__tests__/RegisterFormView.test.js
import { mount, config } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'

import RegisterForm from '@/views/RegisterFormView.vue'

// Mock i18n globally
config.global.mocks = {
  $t: (key) => key, // return key itself or any fake text
}

describe('RegisterForm.vue', () => {
  const factory = () => mount(RegisterForm)
  let logSpy

  beforeEach(() => {
    logSpy = vi.spyOn(console, 'log').mockImplementation(() => { })
  })

  afterEach(() => {
    logSpy.mockRestore()
  })

  test('renders four empty inputs on mount', () => {
    const wrapper = factory()
    const inputs = wrapper.findAll('input')
    expect(inputs).toHaveLength(4)
    const values = inputs.map(i => i.element.value)
    expect(values).toEqual(['', '', '', ''])
  })

  test('typing in username updates formData.username', async () => {
    const wrapper = factory()
    const username = wrapper.find('input[id="username-input"]')
    expect(username.exists()).toBe(true)
    expect(username.element.value).toBe('')
    await wrapper.find('input[id="username-input"]').setValue('Alice')
    expect(username.element.value).toBe('Alice')
  })

  test('typing in email updates formData.email', async () => {
    const wrapper = factory()
    const email = wrapper.find('input[id="email-input"]')
    await email.setValue('alice@mail.com')
    expect(email.element.value).toBe('alice@mail.com')
  })

  test('submit logs valid payload when everything is correct', async () => {
    const wrapper = factory()

    await wrapper.find('input[id="username-input"]').setValue('Alice')
    await wrapper.find('input[id="email-input"]').setValue('alice@mail.com')
    await wrapper.find('input[id="password-input"]').setValue('Pass123!')
    await wrapper.find('input[id="confirm-password-input"]').setValue('Pass123!')

    logSpy.mockImplementation(() => { })
    await wrapper.find('form').trigger('submit.prevent')

    expect(logSpy).toHaveBeenCalledWith(
      'Form data is valid:',
      expect.objectContaining({
        username: 'Alice',
        email: 'alice@mail.com',
        password: 'Pass123!',
        confirmPassword: 'Pass123!',
      }),
    )
  })

  test('submit does NOT log when validation fails', async () => {
    const wrapper = factory()

    // leave username empty
    await wrapper.find('input[id="username-input"]').setValue('')
    await wrapper.find('input[id="email-input"]').setValue('alice@mail.com')
    await wrapper.find('input[id="password-input"]').setValue('Pass123!')
    await wrapper.find('input[id="confirm-password-input"]').setValue('Pass123!')

    await wrapper.find('form').trigger('submit.prevent')

    expect(logSpy).not.toHaveBeenCalledWith(
      'Form data is valid:',
      expect.objectContaining({
        username: 'Alice',
        email: 'alice@mail.com',
        password: 'Pass123!',
        confirmPassword: 'Pass123!',
      }),
    )
  })
})
