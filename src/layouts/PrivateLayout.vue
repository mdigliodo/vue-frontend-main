<script setup>
import AppNavbar from '@/components/App/AppNavbar.vue'
import AppSidebar from '@/components/App/AppSidebar.vue'

</script>

<template>
  <div class="h-screen w-screen flex flex-col bg-wsmoke">
    <AppNavbar />
    <div class="flex flex-1">
      <AppSidebar />
      <main class="flex-1 pb-16 lg:pb-0">
        <slot />
      </main>
    </div>
  </div>
</template>
