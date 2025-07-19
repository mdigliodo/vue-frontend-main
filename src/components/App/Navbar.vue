<script setup>
import { Icon } from '@iconify/vue'
import { useWindowSize } from '@vueuse/core'
import { computed, ref } from 'vue'

import AppI18n from './AppI18n.vue'
import AppNavLink from './AppNavMenu.vue'

const open = ref(false)
const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)

defineOptions({
  name: 'AppNavbar',
})
</script>

<template>
  <div class="min-h-12 sticky top-0">
    <div class="antialiased bg-gray-900 shadow-md">
      <div class="w-full text-gray-200 bg-gray-800">
        <div
          x-data="{ open: true }"
          class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
        >
          <div class="flex flex-row items-center justify-between p-4">
            <a
              href="#"
              class="text-lg font-semibold tracking-widest uppercase rounded-lg text-white focus:outline-none focus:shadow-outline"
            >{{ $t('company.name') }}</a>
            <button
              class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
              @click="open = !open"
            >
              <Icon
                v-if="!open"
                icon="mdi:menu"
              />
              <Icon
                v-if="open"
                icon="mdi:close"
              />
            </button>
          </div>
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-200 ease-in"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-screen opacity-100"
            leave-from-class="max-h-screen opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <nav
              v-show="open || !isMobile"
              class="flex flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
            >
              <AppNavLink router-name="home">
                {{ $t('navigation.navbar.home') }}
              </AppNavLink>
              <AppNavLink router-name="intro">
                {{ $t('navigation.navbar.intro') }}
              </AppNavLink>
              <AppNavLink router-name="profile">
                {{ $t('navigation.navbar.profile') }}
              </AppNavLink>
              <AppNavLink router-name="event-calendar">
                {{ $t('navigation.navbar.calendar') }}
              </AppNavLink>
              <AppNavLink router-name="register-user">
                {{ $t('navigation.navbar.register') }}
              </AppNavLink>
              <AppNavLink router-name="contact">
                {{ $t('navigation.navbar.contact') }}
              </AppNavLink>
              <AppI18n />
            </nav>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
