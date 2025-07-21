<!-- AppButton.vue -->
<template>
  <component
    :is="'button'"
    :type="type"
    :class="[buttonClasses, iconPosition === 'next' ? 'flex-row-reverse' : '']"
    :disabled="isDisabled"
    :aria-busy="loading"
    :aria-disabled="isDisabled"
  >
    <!-- Icon or spinner -->
    <span
      v-if="hasLeadingVisual"
      class="mr-2 inline-flex shrink-0 items-center"
      aria-hidden="true"
    >
      <Icon
        :is="leadingIconComponent"
        v-if="!loading && leadingIconComponent"
        :icon="icon"
        :class="iconSize"
      />

      <Icon
        v-else-if="loading"
        :class="['animate-spin', iconSize]"
        icon="mdi-light:loading"
      />
    </span>

    <!-- Label mr-2 to compense the icon space -->
    <span :class="{ 'mr-2': icon }">
      <slot>{{ text }}</slot>
    </span>
  </component>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { computed, useSlots } from 'vue'

const slots = useSlots()

const props = defineProps({
  /* --- Variants --- */
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'outline', 'link'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  type: {
    type: String,
    default: 'button',
    validator: (v) => ['button', 'submit', 'reset'].includes(v),
  },
  block: Boolean,
  disabled: Boolean,
  loading: Boolean,

  /* --- Content --- */
  text: { type: String, default: '' },
  icon: { type: [String, Object], default: undefined },
  iconPosition: { type: String, default: 'pre', validator: (v) => ['pre', 'next'].includes(v) },

})

/* ----- State helpers ----- */
const isDisabled = computed(() => props.disabled || props.loading)

/* ----- State helpers ----- */
const iconPosition = computed(() => props.iconPosition)

/* ----- Icon resolution ----- */
const hasLeadingVisual = computed(
  () => props.loading || props.icon || slots.icon,
)

const leadingIconComponent = computed(() => {
  if (slots.icon) return slots.icon // allow raw slot override
  return props.icon
})

/* ----- Tailwind class builders ----- */
const base =
  'inline-flex items-center justify-center rounded font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors duration-200'

const variantClasses = {
  primary:
    'bg-primary-900 text-white font-semibold font-sans hover:bg-primary-300 focus-visible:ring-primary-500 disabled:bg-primary-300 disabled:cursor-not-allowed',
  secondary:
    'border border-secondary-300 bg-secondary-400 text-primary-900 hover:bg-secondary-300 focus-visible:ring-secondary-500 disabled:bg-secondary-100 disabled:text-secondary-400',
  outline:
    'border border-primary-300 bg-transparent text-primary-900 hover:bg-primary-100 hover:border-primary-100 focus-visible:ring-primary-500 disabled:border-primary-200 disabled:text-primary-400',
  link:
    'bg-transparent text-primary-900 hover:underline focus-visible:ring-none disabled:border-primary-200 disabled:text-primary-400',
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
}

const iconSize = computed(() =>
  props.size === 'sm'
    ? 'text-xl'
    : props.size === 'lg'
      ? 'text-3xl'
      : 'text-2xl',
)

const buttonClasses = computed(() => [
  base,
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.block ? 'w-full' : '',
])

</script>
