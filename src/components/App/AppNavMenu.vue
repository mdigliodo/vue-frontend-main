<script setup>
import { computed } from 'vue'

import router from '@/router'

const props = defineProps({
  routerName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'link',
    validate: (v) => ['button', 'link'].includes(v),
  },
})

const redirectTo = (routename) => {
  router.push({ name: routename })
}

const navMenuClasses = computed(() => [
  'cursor-pointer px-4 py-2 mt-2 bg-transparent rounded focus:text-white hover:text-white text-gray-200 md:mt-0 md:ml-4 ',
  props.type === 'link' ? 'hover:underline-offset-2' : 'focus:bg-gray-600 hover:bg-gray-600 focus:outline-none focus:shadow-outline',
])

defineOptions({
  name: 'AppNavMenu',
})

</script>

<template>
  <div
    :class="navMenuClasses"
    @click="redirectTo(props.routerName)"
  >
    <slot />
  </div>
</template>
