<script setup></script>

<template>
  <component :is="$route.meta.layoutComponent">
    <slot />
  </component>
</template>
