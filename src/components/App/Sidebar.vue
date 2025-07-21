<script setup>
import { Icon } from '@iconify/vue'

import AppNavMenuItem from '@/components/App/AppNavMenuItem.vue'

defineOptions({
  name: 'AppSidebar',
})

</script>

<template>
  <div
    class="fixed bottom-0 pt-2 pb-1 shadow-md w-screen flex justify-around lg:justify-start lg:items-start lg:relative lg:flex-col gap-4 lg:w-48 border-t border-secondary-800 bg-gray-800 text-wsmoke lg:py-8 px-6 z-10"
  >
    <AppNavMenuItem :to="{ name: 'introduction' }">
      <template #icon>
        <Icon
          icon="mdi:home"
          class="text-2xl lg:hidden"
        />
      </template>
      <template #label>
        <p class="text-sm lg:text-base">
          {{ $t('navigation.navbar.intro') }}
        </p>
      </template>
    </AppNavMenuItem>
    <AppNavMenuItem :to="{ name: 'calendar' }">
      <template #icon>
        <Icon
          icon="mdi:calendar"
          class="text-2xl lg:hidden"
        />
      </template>
      <template #label>
        <p class="text-sm lg:text-base">
          {{ $t('navigation.navbar.calendar') }}
        </p>
      </template>
    </AppNavMenuItem>
    <AppNavMenuItem :to="{ name: 'profile' }">
      <template #icon>
        <Icon
          icon="mdi:account"
          class="text-2xl lg:hidden"
        />
      </template>
      <template #label>
        <p class="text-sm lg:text-base">
          {{ $t('navigation.navbar.profile') }}
        </p>
      </template>
    </AppNavMenuItem>
  </div>
</template>
