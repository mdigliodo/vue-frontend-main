<script setup>
import { Icon } from '@iconify/vue'
import { defineProps, defineEmits, computed, useSlots } from 'vue'

const props = defineProps({
    closeOnEsc: {
        type: Boolean,
        default: true,
    },
    closeOnClickOutside: {
        type: Boolean,
        default: true,
    },
    isOpen: {
        type: Boolean,
        default: false,
    },
})

const isOpen = computed(() => props.isOpen)

const slots = useSlots()

defineEmits(['close'])

</script>

<template>
  <Teleport to="#modal-container">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-primary-900 bg-opacity-50 w-full h-full"
      >
        <div
          ref="modal"
          class="relative bg-wsmoke rounded shadow-lg p-6 min-w-[-webkit-fill-available] min-h-[-webkit-fill-available] md:min-h-[20rem] md:min-w-[20rem] flex flex-col justify-between"
          v-bind="$attrs"
        >
          <div
            class="flex items-center mb-4"
            :class="{ 'justify-between': slots.title, 'justify-end': !slots.title }"
          >
            <slot name="title" />
            <Icon
              icon="mdi:close"
              class="text-2xl cursor-pointer text-primary-900"
              @click="$emit('close')"
            />
          </div>
          <div>
            <slot name="icon" />
            <slot name="body" />
          </div>
          <slot name="actions" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(1.1);
}
</style>
