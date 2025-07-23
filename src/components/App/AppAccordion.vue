<script setup>
import { Icon } from '@iconify/vue'
import { computed, ref, watch, nextTick, useAttrs } from 'vue'

const props = defineProps({
    defaultOpen: { type: Boolean, default: false },
    interaction: { type: Boolean, default: true },
    customGlobalClasses: { type: String, default: '' },
})

const customGlobalClasses = computed(() => props.customGlobalClasses)
const interaction = computed(() => props.interaction)
const defaultOpen = computed(() => props.defaultOpen)
const isOpen = ref(defaultOpen.value)
const attrs = useAttrs()

watch(interaction, (hasInteraction) => {
  if (hasInteraction) return
  isOpen.value = true // Set to true if interaction is enabled
})

const toggleAccordion = async () => {
    if (!interaction.value) return
    // Toggle the accordion open/close state
    isOpen.value = !isOpen.value
    // If div has id attribute, scroll to it
    if (!attrs.id) return
    const acordionElement = document.getElementById(attrs.id)
    await nextTick(() => acordionElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }))
}
</script>
<template>
  <div
    v-bind="$attrs"
    class="accordion border-primary-200 flex-col p-4 "
    :class="{ 'border-t': isOpen, 'border-y': !isOpen, [customGlobalClasses.value]: true }"
  >
    <div
      class="w-full flex justify-between items-center"
      :class="{ 'mb-6': isOpen, 'cursor-pointer': interaction }"
      @click="toggleAccordion"
    >
      <button
        class="accordion-header cursor-default"
      >
        <slot name="header">
          Accordion Header
        </slot>
      </button>
      <Icon
        v-if="interaction"
        icon="mdi:chevron-down"
        class="ml-auto h-5 w-5 transition-transform text-primary-500"
        :class="isOpen ? 'rotate-180' : ''"
      />
    </div>
    <div
      v-show="isOpen"
      class="accordion-content"
    >
      <slot name="content">
        Accordion Content
      </slot>
    </div>
  </div>
</template>
