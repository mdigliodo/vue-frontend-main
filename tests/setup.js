import { config } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: { en: {} }, // minimal stub
})

// global plugin for every test
config.global.plugins = [i18n]
