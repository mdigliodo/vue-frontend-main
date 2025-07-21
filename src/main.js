import { createApp } from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import { createI18n } from 'vue-i18n'
import '@/assets/main.css'

import App from './App.vue'
import router from './router'

import en from '@/common/i18n/en'
import es from '@/common/i18n/es'

export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: window.navigator.language.slice(0, 2) || 'en',
    fallbackLocale: 'en',
    availableLocales: ['en', 'es'],
    messages: {
        en,
        es,
    },
})

const app = createApp(App)

app.use(i18n).use(router).use(VueDOMPurifyHTML).mount('#app')
