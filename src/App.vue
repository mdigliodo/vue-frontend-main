<script setup>
import { RouterView } from 'vue-router'

import DynamicLayout from '@/layouts/DynamicLayout.vue'

defineOptions({
  name: 'MainApp',
})
</script>

<template>
  <DynamicLayout class="h-screen w-screen">
    <router-view />
  </DynamicLayout>
</template>
