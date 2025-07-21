<script setup>
import AppButton from '@/components/App/AppButton.vue'
</script>

<template>
  <AppButton
    icon="mdi:arrow-left"
    variant="link"
    @click="$router.back()"
  >
    <slot />
  </AppButton>
</template>
