<script setup>
import { Icon } from '@iconify/vue'
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue'

const props = defineProps({
  /* --- Variants --- */
  name: { type: String, required: true },
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'outline'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  disabled: Boolean,
  showChevron: {
    type: Boolean,
    default: true,
  },
  multiple: { type: Boolean, default: false },
  /* --- Content --- */
  modelValue: { type: [String, Number, Array], default: '' },
  options: { type: Array, required: true }, // [{ value, label }]
})

const emit = defineEmits(['update:modelValue'])

/* ---------- State ---------- */
const isOpen = ref(false)
const activeIndex = ref(-1)
const nativeSelect = ref(null)
const trigger = ref(null)
const listbox = ref(null)

const dropdownId = `app-select-${Math.random().toString(36).slice(2)}`

/* ---------- v-model helpers ---------- */
const localModel = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const isSelected = (value) =>
  props.multiple
    ? Array.isArray(localModel.value) && localModel.value.includes(value)
    : localModel.value === value

const displayText = computed(() => {
  if (props.multiple) {
    const selectedLabels = props.options
      .filter((o) => isSelected(o.value))
      .map((o) => o.label)
    return selectedLabels.length ? selectedLabels.join(', ') : 'Seleccionar…'
  }
  const found = props.options.find((o) => o.value === localModel.value)
  return found?.label || 'Seleccionar…'
})

/* ---------- Actions ---------- */
const toggle = () => (isOpen.value ? close() : open())
const open = () => {
  isOpen.value = true
  nextTick(() => {
    const selectedIdx = props.options.findIndex((o) =>
      isSelected(o.value),
    )
    activeIndex.value = selectedIdx >= 0 ? selectedIdx : 0
    scrollToActive()
  })
}
const close = (e) => {
  isOpen.value = false
  activeIndex.value = -1
}

const selectOption = (value) => {
  if (props.multiple) {
    const arr = Array.isArray(localModel.value) ? [...localModel.value] : []
    const idx = arr.indexOf(value)
    idx >= 0 ? arr.splice(idx, 1) : arr.push(value)
    localModel.value = arr
  } else {
    localModel.value = value
    close()
  }
}

const onArrow = (e) => {
  const len = props.options.length
  if (!len) return
  activeIndex.value =
    e.key === 'ArrowDown'
      ? (activeIndex.value + 1) % len
      : (activeIndex.value - 1 + len) % len
  scrollToActive()
}

const scrollToActive = () => {
  nextTick(() => {
    const el = listbox.value?.children[activeIndex.value]
    el?.scrollIntoView({ block: 'nearest' })
  })
}

/* ---------- Click-outside ---------- */
const onClickOutside = (e) => {
  if (!trigger.value?.contains(e.target) && !listbox.value?.contains(e.target)) { close() }
}
onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))

/* ---------- Styling ---------- */
const base =
  'inline-flex items-center rounded focus:outline-none transition-colors duration-200 relative max-w-fit'

const variantClasses = {
  primary:
    'bg-primary-900 text-white focus-visible:ring-gray-500 disabled:bg-gray-300 disabled:cursor-not-allowed',
  secondary:
    'bg-gray-200 text-gray-900 focus-visible:ring-gray-500 disabled:bg-gray-100 disabled:text-gray-400',
  outline:
    'border border-gray-300 bg-transparent text-gray-900 focus-visible:ring-gray-500 disabled:border-gray-200 disabled:text-gray-400',
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
}

const wrapperClasses = computed(() => [
  base,
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.disabled ? 'cursor-not-allowed' : '',
])

const selectClasses = 'sr-only' // hidden from view, kept for a11y

const triggerClasses = computed(() => [
  'flex items-center justify-between rounded bg-transparent outline-none',
  props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
])

const listClasses =
  'absolute z-10 top-10 left-0 py-2 w-full rounded bg-primary-900 shadow-lg focus:outline-none'

const optionClasses = (value, idx) => [
  'cursor-pointer px-3 py-2 hover:opacity-75',
  isSelected(value) ? 'bg-primary-900 font-semibold' : '',
  idx === activeIndex.value ? 'ring-primary-900' : '',
]
</script>

<template>
  <button
    ref="trigger"
    type="button"
    :disabled="disabled"
    :class="[wrapperClasses, triggerClasses]"
    :aria-controls="dropdownId"
    aria-haspopup="listbox"
    @click="toggle"
    @keydown.down.prevent="onArrow"
    @keydown.up.prevent="onArrow"
    @keydown.esc="close"
  >
    <!-- Prefix -->
    <span
      v-if="$slots.prefix"
      class="mr-2 inline-flex shrink-0 items-center"
      aria-hidden="true"
    >
      <slot name="prefix" />
    </span>

    <!-- Hidden select for semantics + v-model sync -->
    <select
      ref="nativeSelect"
      v-model="localModel"
      :multiple="multiple"
      :disabled="disabled"
      :class="selectClasses"
      class="sr-only"
    >
      <option
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
      >
        {{ opt.label }}
      </option>
    </select>

    <!-- Visible button / dropdown -->

    <span>{{ displayText }}</span>

    <Icon
      v-if="showChevron"
      icon="mdi:chevron-down"
      class="ml-auto h-5 w-5 transition-transform"
      :class="isOpen ? 'rotate-180' : ''"
    />

    <!-- Dropdown list -->
    <ul
      v-if="isOpen"
      :id="dropdownId"
      ref="listbox"
      role="listbox"
      :aria-multiselectable="multiple"
      :class="listClasses"
      :aria-expanded="isOpen"
    >
      <li
        v-for="(opt, idx) in options"
        :key="opt.value"
        role="option"
        :aria-selected="isSelected(opt.value)"
        :class="optionClasses(opt.value, idx)"
        @click="selectOption(opt.value)"
      >
        {{ opt.label }}
      </li>
    </ul>
  </button>
</template>

<style scoped>
/* Optional: hide native select arrow in Firefox */
select {
  appearance: none;
}
</style>
