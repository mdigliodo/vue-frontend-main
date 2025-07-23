<script setup>
import { Icon } from '@iconify/vue'
import { defineProps, defineEmits, useAttrs, ref } from 'vue'

const props = defineProps({
  id: {
    type: String,
    default: '',
    required: true,
  },
  label: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
  errors: {
    type: Array,
    default: () => [],
  },
  copySuffix: {
    type: Boolean,
    default: false,
  },
})

const attrs = useAttrs()

const typeInput = ref(attrs.type || 'text')
const valueInput = ref(attrs.value)
const copied = ref(false)

const togglePasswordVisibility = () => {
  typeInput.value = typeInput.value === 'password' ? 'text' : 'password'
}

const copyOnClipboard = async (value) => {
  try {
    await navigator.clipboard.writeText(value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1500)
    console.log('Text copied to clipboard: ', value)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}

defineEmits(['update:modelValue'])

</script>

<template>
  <div class="relative group mb-5">
    <label
      v-if="label"
      :for="props.id"
      class="text-primary-700 font-medium group-focus-within:text-secondary-700"
    >{{ label
    }}</label>
    <div class="relative">
      <input
        :id="props.id"
        :value="props.modelValue"
        class="group w-full bg-primary-50 py-2 border-b-2 border-primary-200 text-primary-900 focus:outline-none focus:border-secondary-700 transition-colors read-only:cursor-pointer"
        v-bind="$attrs"
        :type="typeInput"
        @input="$emit('update:modelValue', $event.target.value)"
      >
      <Icon
        v-if="$attrs.type === 'password'"
        :icon="typeInput === 'password' ? 'mdi:eye' : 'mdi:eye-off'"
        class="absolute right-3 bottom-2 -translate-y-1/2 text-primary-400 cursor-pointer"
        @click="togglePasswordVisibility"
      />

      <div
        v-if="copySuffix"
        class="relative cursor-pointer text-primary-400 "
      >
        <Transition name="slide-fade">
          <Icon
            v-if="!copied"
            :id="`copy-${id}`"
            icon="mdi:content-copy"
            class="absolute right-3 bottom-2 -translate-y-1/2"
            @click="copyOnClipboard(valueInput)"
          />
        </Transition>
        <Transition name="slide-fade">
          <small
            v-if="copied"
            :id="`copied-${id}`"
            class="absolute right-3 bottom-2 -translate-y-1/2"
          >
            {{ $t('action.copied') }}
          </small>
        </Transition>
      </div>
    </div>
    <ul
      v-if="errors && errors.length"
      class="mt-2"
    >
      <li
        v-for="(error, index) in errors"
        :id="`${id}-error`"
        :key="'error-' + index"
        class="text-red-500 text-sm"
      >
        - {{ error
        }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
