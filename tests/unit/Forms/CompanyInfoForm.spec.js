// src/views/__tests__/RegisterFormView.test.js
import { mount, config } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

import CompanyInfoForm from '@/components/Forms/CompanyInfoForm.vue'

// Mock i18n globally
config.global.mocks = {
  $t: (key) => key, // return key itself or any fake text
}

describe('CompanyInfoForm.vue', () => {
  const factory = () => mount(CompanyInfoForm)

  test('renders four empty inputs on mount', () => {
    const wrapper = factory()
    const inputs = wrapper.findAll('input')
    expect(inputs).toHaveLength(7)
    const values = inputs.map(i => i.element.value)
    expect(values).toEqual(['', '', '', '', '', '', ''])
  })

  test('typing in company name updates data.name and make sure is read-only true', async () => {
    const wrapper = factory()
    const name = wrapper.find('input[id="name-input"]')
    expect(name.exists()).toBe(true)
    expect(name.element.value).toBe('')
    await wrapper.find('input[id="name-input"]').setValue('New Company')
    expect(name.element.value).toBe('New Company')
    expect(name.attributes('aria-readonly')).toBe('true')
  })

  test('typing in department updates data.department and make sure is read-only true', async () => {
    const wrapper = factory()
    const department = wrapper.find('input[id="department-input"]')
    await department.setValue('New Department')
    expect(department.element.value).toBe('New Department')
    expect(department.attributes('aria-readonly')).toBe('true')
  })

  test('typing in title updates data.title and make sure is read-only true', async () => {
    const wrapper = factory()
    const title = wrapper.find('input[id="title-input"]')
    await title.setValue('New Title')
    expect(title.element.value).toBe('New Title')
    expect(title.attributes('aria-readonly')).toBe('true')
  })

  test('typing in address updates data.address and make sure is read-only true', async () => {
    const wrapper = factory()
    const address = wrapper.find('input[id="address-input"]')
    await address.setValue('123 Main St')
    expect(address.element.value).toBe('123 Main St')
    expect(address.attributes('aria-readonly')).toBe('true')
  })

  test('typing in city updates data.city and make sure is read-only true', async () => {
    const wrapper = factory()
    const city = wrapper.find('input[id="city-input"]')
    await city.setValue('New City')
    expect(city.element.value).toBe('New City')
    expect(city.attributes('aria-readonly')).toBe('true')
  })

  test('typing in postalCode updates data.postalCode and make sure is read-only true', async () => {
    const wrapper = factory()
    const postalCode = wrapper.find('input[id="postalCode-input"]')
    await postalCode.setValue('12345')
    expect(postalCode.element.value).toBe('12345')
    expect(postalCode.attributes('aria-readonly')).toBe('true')
  })

  test('typing in state updates data.state and make sure is read-only true', async () => {
    const wrapper = factory()
    const state = wrapper.find('input[id="state-input"]')
    await state.setValue('New State')
    expect(state.element.value).toBe('New State')
    expect(state.attributes('aria-readonly')).toBe('true')
  })
})
