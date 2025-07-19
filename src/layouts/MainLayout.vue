<script setup>

defineOptions({
  name: 'MainLayout',
})
</script>

<template>
  <div class="h-screen w-screen flex flex-col">
    <slot />
  </div>
</template>
