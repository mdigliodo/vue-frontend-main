<script setup>
import { Icon } from '@iconify/vue'
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

const props = defineProps({
    event: {
        type: Object,
        required: true,
    },
})

const event = computed(() => props.event)

const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)

</script>

<template>
  <div
    class="text-start shadow text-primary-800 flex flex-row gap-2 items-center justify-center bg-secondary-500 border border-secondary-600 rounded-full px-2 m-1 uppercase text-xs"
  >
    <Icon
      :icon="event.icon"
    />
    <p v-if="!isMobile">
      {{ event.type }}
    </p>
  </div>
</template>
