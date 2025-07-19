<script setup>
import router from '@/router'

defineOptions({
  name: 'AppSidebar',
})

const redirectTo = (routename) => {
  router.push({ name: routename })
}
</script>

<template>
  <aside class="bg-primary-900 text-white p-4">
    <ul class="space-y-2">
      <li>
        <div
          class="flex items-center justify-between text-secondary px-4 py-2 hover:bg-gray-700 cursor-pointer"
          @click="redirectTo('home')"
        >
          <div class="flex items-center">
            <span>{{ $t('navigation.menu.home') }}</span>
          </div>
        </div>
      </li>
      <li>
        <div
          class="flex items-center justify-between text-secondary px-4 py-2 hover:bg-gray-700 cursor-pointer"
          @click="redirectTo('intro')"
        >
          <div class="flex items-center">
            <span>{{ $t('navigation.menu.intro') }}</span>
          </div>
        </div>
      </li>
      <div class="border my-6" />
      <li>
        <div
          class="flex items-center justify-between text-secondary px-4 py-2 hover:bg-gray-700 cursor-pointer"
          @click="redirectTo('register-form')"
        >
          <div class="flex items-center">
            <span>{{ $t('navigation.menu.challengeOne') }}</span>
          </div>
        </div>
      </li>
      <li>
        <div
          class="flex items-center justify-between text-secondary px-4 py-2 hover:bg-gray-700 cursor-pointer"
          @click="redirectTo('user-detail')"
        >
          <div class="flex items-center">
            <span>{{ $t('navigation.menu.challengeTwo') }}</span>
          </div>
        </div>
      </li>
      <li>
        <div
          class="flex items-center justify-between text-secondary px-4 py-2 hover:bg-gray-700 cursor-pointer"
          @click="redirectTo('event-calendar')"
        >
          <div class="flex items-center">
            <span>{{ $t('navigation.menu.challengeThree') }}</span>
          </div>
        </div>
      </li>
    </ul>
  </aside>
</template>
