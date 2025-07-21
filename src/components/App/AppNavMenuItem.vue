<script setup>
import { defineProps } from 'vue'

defineProps({
  to: {
    type: Object,
    required: true,
  },
})

</script>

<template>
  <router-link :to="to">
    <div class="flex flex-col lg:flex-row items-center justify-center">
      <slot name="icon" />
      <slot name="label" />
    </div>
  </router-link>
</template>

<style scoped>
a.router-link-active {
  @apply text-secondary-500;
}
</style>
