<template>
  <div class="group mb-5">
    <label
      v-if="label"
      :for="id"
      class="text-primary-700 font-medium group-focus-within:text-secondary-700"
    >{{ label
    }}</label>
    <input
      :id="id"
      :value="modelValue"
      class="group w-full bg-primary-50 py-2 border-b-2 border-primary-200 text-primary-900 focus:outline-none focus:border-secondary-700 transition-colors read-only:cursor-pointer"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <ul
      v-if="errors && errors.length"
      class="mt-2"
    >
      <li
        v-for="(error, index) in errors"
        :key="index"
        class="text-red-500 text-sm"
      >
        - {{ error
        }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
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
})

defineEmits(['update:modelValue'])

</script>
