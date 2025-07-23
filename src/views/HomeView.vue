<template>
  <div class="min-h-[-webkit-fill-available] flex bg-wsmoke">
    <div
      class="
    mx-auto
    px-4
    py-12
    flex
    flex-col-reverse
    justify-evenly
    md:flex-row
    md:gap-12
    items-center
    md:max-w-[80%]"
    >
      <!-- Left: Title and Subtitle -->
      <div class="flex-1 text-left mb-8 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          {{ $t('home.title') }}
        </h1>
        <p
          id="subtitle"
          class="text-lg md:text-xl text-gray-600 mb-6"
        >
          {{ $t('home.subtitle') }}
        </p>
        <p
          id="subtitle-invite"
          class="text-lg md:text-xl text-gray-600 mb-6"
        >
          {{ $t('home.getReady') }}
        </p>
        <!-- Add more content or buttons here if needed -->
        <div class="flex gap-2">
          <AppButton
            id="home-intro-button"
            icon="mdi:arrow-right"
            icon-position="suffix"
            variant="secondary"
            @click="$router.push({ name: 'introduction' })"
          >
            {{ $t('home.introButton') }}
          </AppButton>
        </div>
      </div>
      <!-- Right: Image Slot -->
      <div class="grid justify-center mb-7 sm:mb-0">
        <img
          src="https://portfolio-images-v1.s3.us-east-2.amazonaws.com/images/undraw_programming_65t2.svg"
          alt="Challenge"
          class="rounded-lg w-full max-w-md object-cover"
        >
      </div>
    </div>
  </div>
</template>

<script setup>

import AppButton from '@/components/App/AppButton.vue'

defineOptions({
  name: 'HomeView',
})

</script>
