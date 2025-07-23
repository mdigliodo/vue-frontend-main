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

  test('renders one empty input on mount', () => {
    const wrapper = factory()
    const inputs = wrapper.findAll('input')
    expect(inputs).toHaveLength(1)
    const values = inputs.map(i => i.element.value)
    expect(values).toEqual([''])
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

  test('renders the card information correctly', () => {
    const wrapper = factory()
    const cardInfo = wrapper.findComponent({ name: 'AppBankCard' })

    expect(cardInfo.exists()).toBe(true)
    expect(cardInfo.find('#cardNumber-input')).toBeDefined()
    expect(cardInfo.find('#cardOwner-input')).toBeDefined()
    expect(cardInfo.find('#cardExpire-input')).toBeDefined()

    expect(cardInfo.props().info).toEqual({
      cardNumber: undefined,
      cardOwner: 'undefined undefined',
      cardExpire: '12/25',
      cardType: 'maestro',
      currency: undefined,
      iban: undefined,
    })
  })
})
