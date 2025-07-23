<script setup>
import AppNavbar from '@/components/App/AppNavbar.vue'

</script>

<template>
  <div class="h-screen w-screen flex flex-col bg-wsmoke">
    <AppNavbar />
    <div class="overflow-y-auto flex flex-1">
      <main class="flex-1 overflow-y-scroll">
        <slot />
      </main>
    </div>
  </div>
</template>
