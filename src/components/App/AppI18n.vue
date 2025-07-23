<script setup>
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

import AppSelect from './AppSelect.vue'

const { t } = useI18n()

const languages = [
    { value: 'en', label: t('languages.en') },
    { value: 'es', label: t('languages.es') },
]

</script>
<template>
  <AppSelect
    v-model="$i18n.locale"
    :options="languages"
    variant="primary"
    size="md"
    name="language-select"
    :show-chevron="false"
  >
    <template #prefix>
      <Icon icon="mdi:language" />
    </template>
  </AppSelect>
</template>
