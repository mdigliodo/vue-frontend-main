// src/views/__tests__/RegisterFormView.test.js
import { mount, config } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

import BankInfoForm from '@/components/Forms/BankInfoForm.vue'

// Mock i18n globally
config.global.mocks = {
  $t: (key) => key, // return key itself or any fake text
}

describe('BankInfoForm.vue', () => {
  const factory = () => mount(BankInfoForm)

  test('renders four empty inputs on mount', () => {
    const wrapper = factory()
    const inputs = wrapper.findAll('input')
    expect(inputs).toHaveLength(5)
    const values = inputs.map(i => i.element.value)
    expect(values).toEqual(['', '', '', '', ''])
  })

  test('typing in iban updates data.iban and make sure is read-only true', async () => {
    const wrapper = factory()
    const iban = wrapper.find('input[id="iban-input"]')
    expect(iban.exists()).toBe(true)
    expect(iban.element.value).toBe('')
    await wrapper.find('input[id="iban-input"]').setValue('NO17 0695 2754 967')
    expect(iban.element.value).toBe('NO17 0695 2754 967')
    expect(iban.attributes('aria-readonly')).toBe('true')
  })

  test('typing in cardNumber updates data.cardNumber and make sure is read-only true', async () => {
    const wrapper = factory()
    const cardNumber = wrapper.find('input[id="cardNumber-input"]')
    await cardNumber.setValue('50380955204220685')
    expect(cardNumber.element.value).toBe('50380955204220685')
    expect(cardNumber.attributes('aria-readonly')).toBe('true')
  })

  test('typing in cardType updates data.cardType and make sure is read-only true', async () => {
    const wrapper = factory()
    const cardType = wrapper.find('input[id="cardType-input"]')
    await cardType.setValue('master')
    expect(cardType.element.value).toBe('master')
    expect(cardType.attributes('aria-readonly')).toBe('true')
  })

  test('typing in cardExpire updates data.cardExpire and make sure is read-only true', async () => {
    const wrapper = factory()
    const cardExpire = wrapper.find('input[id="cardExpire-input"]')
    await cardExpire.setValue('12/25')
    expect(cardExpire.element.value).toBe('12/25')
    expect(cardExpire.attributes('aria-readonly')).toBe('true')
  })

  test('typing in currency updates data.currency and make sure is read-only true', async () => {
    const wrapper = factory()
    const currency = wrapper.find('input[id="currency-input"]')
    await currency.setValue('NOK')
    expect(currency.element.value).toBe('NOK')
    expect(currency.attributes('aria-readonly')).toBe('true')
  })
})
