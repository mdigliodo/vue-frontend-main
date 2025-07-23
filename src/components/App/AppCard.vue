<script>
export default {
    name: 'AppCard',
}
</script>

<template>
  <div class="bg-white rounded-lg shadow flex flex-col justify-between">
    <div
      v-if="$slots.image"
      class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-wsmoke bg-clip-border rounded-xl h-96"
    >
      <slot name="image" />
    </div>
    <div
      v-if="$slots.title || $slots.description"
      class="p-6"
    >
      <div
        v-if="$slots.title"
        class="antialiased leading-relaxed text-primary-900"
      >
        <slot name="title" />
      </div>
      <p
        v-if="$slots.description"
        class="block font-sans text-sm antialiased font-normal leading-normal text-primary-700 "
      >
        <slot name="description" />
      </p>
    </div>
    <slot
      v-if="$slots.htmlContent"
      name="htmlContent"
    />
    <div
      v-if="$slots.action"
      class="p-6 pt-0 flex flex-col gap-2"
    >
      <slot name="action" />
    </div>
  </div>
</template>

<style scoped></style>
