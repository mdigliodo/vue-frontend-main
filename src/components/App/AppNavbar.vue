<script setup>
import { Icon } from '@iconify/vue'
import { useWindowSize } from '@vueuse/core'
import { computed, ref } from 'vue'

import AppI18n from './AppI18n.vue'

import AppNavMenuItem from '@/components/App/AppNavMenuItem.vue'

const isOpen = ref(false)

const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)

</script>

<template>
  <div class="min-h-12 sticky top-0 z-10">
    <div class="antialiased bg-gray-900 shadow-md">
      <div class="w-full text-gray-200 bg-gray-800">
        <div
          x-data="{ isOpen: true }"
          class="flex flex-col px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
        >
          <div class="flex flex-row items-center justify-between p-4">
            <a
              href="#"
              class="text-lg font-semibold tracking-widest uppercase rounded-lg text-white focus:outline-none focus:shadow-outline"
            >{{
              $t('company.name') }}</a>
            <button
              class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
              @click="isOpen = !isOpen"
            >
              <Icon
                v-if="!isOpen"
                icon="mdi:menu"
              />
              <Icon
                v-if="isOpen"
                icon="mdi:close"
              />
            </button>
          </div>
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-200 ease-in"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-screen opacity-100"
            leave-from-class="max-h-screen opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <nav
              v-show="isOpen || !isMobile"
              class="flex flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row gap-6 items-center"
            >
              <AppNavMenuItem
                id="home-nav-menu-item"
                :to="{ name: 'home' }"
              >
                <template #label>
                  {{ $t('navigation.navbar.home') }}
                </template>
              </AppNavMenuItem>
              <AppNavMenuItem
                id="register-nav-menu-item"
                :to="{ name: 'register-user' }"
              >
                <template #label>
                  {{ $t('navigation.navbar.register') }}
                </template>
              </AppNavMenuItem>

              <AppI18n id="navbar-i18n" />
            </nav>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>
