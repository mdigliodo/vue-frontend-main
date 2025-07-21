<script setup>
import AppNavbar from '@/components/App/Navbar.vue'

defineOptions({
  name: 'PublicLayout',
})
</script>

<template>
  <div class="h-screen w-screen flex flex-col bg-wsmoke">
    <AppNavbar />
    <div class="overflow-y-auto flex flex-1">
      <main class="flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
