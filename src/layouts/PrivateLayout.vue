<script setup>
import AppNavbar from '@/components/App/Navbar.vue'
import AppSidebar from '@/components/App/Sidebar.vue'

defineOptions({
  name: 'PrivateLayout',
})
</script>

<template>
  <div class="h-screen w-screen flex flex-col">
    <AppNavbar />
    <div class="overflow-y-auto flex flex-1">
      <AppSidebar />
      <main class="flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
