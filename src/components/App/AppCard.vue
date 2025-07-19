<template>
  <div class="bg-white p-10 rounded-lg shadow-lg min-w-full">
    <div
      v-if="$slots.image"
      class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96"
    >
      <slot name="image" />
    </div>
    <div
      v-if="$slots.title || $slots.description"
      class="p-6"
    >
      <div class="flex items-center justify-between mb-2">
        <p
          v-if="$slots.title"
          class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900"
        >
          <slot name="title" />
        </p>
      </div>
      <p
        v-if="$slots.description"
        class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75"
      >
        <slot name="description" />
      </p>
    </div>
    <div v-if="$slots.htmlContent">
      <slot name="htmlContent" />
    </div>
    <div
      v-if="$slots.action"
      class="p-6 pt-0 flex flex-col gap-2"
    >
      <slot name="action" />
    </div>
  </div>
</template>

<script>
export default {
    name: 'AppCard',
}
</script>

<style scoped></style>
