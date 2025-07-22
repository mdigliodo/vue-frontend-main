<script setup>

import { useWindowSize } from '@vueuse/core'
import { computed, ref, watch } from 'vue'

import AppAccordion from '@/components/App/AppAccordion.vue'
import AppButton from '@/components/App/AppButton.vue'
import AppButtonBack from '@/components/App/AppButtonBack.vue'
import AppProfileUserImage from '@/components/App/AppProfileUserImage.vue'
import BankInfoForm from '@/components/Forms/BankInfoForm.vue'
import BasicUserInfoForm from '@/components/Forms/BasicUserInfoForm.vue'
import CompanyInfoForm from '@/components/Forms/CompanyInfoForm.vue'
import SecurityAndPrivacityInfoForm from '@/components/Forms/SecurityAndPrivacityInfoForm.vue'

/*
Reto 2: Vista de Datos del Usuario.

En este ejercicio queremos poner en práctica la creatividad y la capacidad de proponer mejoras
en los diseños por parte del desarrollador. En nuestro día a día trabajaremos con diseños definidos,
pero también vamos a valorar la capacidad de las personas a la hora de proponer nueva estructuración para los datos.

Siéntete libre de modificar tanto código como sea necesario salvo el modelo de datos. Recuerda que el código proporcionado es sólo un ejemplo.
*/

const userData = {
  id: 1,
  firstName: 'Terry',
  lastName: 'Medhurst',
  maidenName: 'Smitham',
  age: 50,
  gender: 'male',
  email: 'atuny0@sohu.com',
  phone: '+63 791 675 8914',
  username: 'atuny0',
  password: '9uQFF1Lh',
  birthDate: '2000-12-25',
  image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
  bloodGroup: 'A+',
  height: 189,
  weight: 75.4,
  eyeColor: 'Green',
  hair: {
    color: 'Black',
    type: 'Strands',
  },
  domain: 'slashdot.org',
  ip: '117.29.86.254',
  address: {
    address: '1745 T Street Southeast',
    city: 'Washington',
    coordinates: {
      lat: 38.867033,
      lng: -76.979235,
    },
    postalCode: '20020',
    state: 'DC',
  },
  macAddress: '13:69:BA:56:A3:74',
  university: 'Capitol University',
  bank: {
    cardExpire: '06/22',
    cardNumber: '50380955204220685',
    cardType: 'maestro',
    currency: 'Peso',
    iban: 'NO17 0695 2754 967',
  },
  company: {
    address: {
      address: '629 Debbie Drive',
      city: 'Nashville',
      coordinates: {
        lat: 36.208114,
        lng: -86.58621199999999,
      },
      postalCode: '37076',
      state: 'TN',
    },
    department: 'Marketing',
    name: "Blanda-O'Keefe",
    title: 'Help Desk Operator',
  },
  ein: '20-9487066',
  ssn: '661-64-2976',
}

const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)

const tabs = [
  {
    id: 'basic-information',
    translation: 'basicInformation',
    data: userData,
    component: BasicUserInfoForm,
  },
  {
    id: 'company-information',
    translation: 'company',
    data: userData.company,
    component: CompanyInfoForm,
  },
  {
    id: 'bank-information',
    translation: 'bankInformation',
    data: userData.bank,
    component: BankInfoForm,
  },
  {
    id: 'security-and-privacity',
    translation: 'privacity',
    data: userData,
    component: SecurityAndPrivacityInfoForm,
  },
]

const activeTabIndex = ref('basic-information')
const activeTabs = computed(() =>
  isMobile.value
    ? tabs
    : tabs.filter(i => i.id === activeTabIndex.value),
)

watch(isMobile, () => {
  activeTabIndex.value = tabs[0].id
})

const changeTab = (tab) => {
  if (isMobile.value) return
  activeTabIndex.value = tab.id
}

</script>

<template>
  <section class="min-h-full flex items-stretch bg-wsmoke">
    <!-- this menu will be hidden on small screens -->
    <div
      class="md:flex md:flex-col md:w-[40%] max-w-80 hidden border-x border-primary-200 bg-wsmoke bg-no-repeat text-primary-900 relative px-4 py-6"
    >
      <h3
        id="title-user-profile-view"
        class="font-semibold text-2xl mb-4"
      >
        {{ $t('profile.navbar.title') }}
      </h3>
      <p>
        {{ $t('profile.navbar.subtitle') }}
      </p>

      <div class="tab-container mt-10 hidden md:flex flex-col gap-2 items-start">
        <AppButton
          v-for="(tab, index) in tabs"
          :id="`tab-sidebar-${index}`"
          :key="`tab-${tab.translation}`"
          variant="link"
          :class="[ activeTabIndex === tab.id ? 'text-secondary-700' : '' ]"
          @click="changeTab(tab)"
        >
          {{ $t(`profile.tabs.${tab.translation}`) }}
        </AppButton>
      </div>
    </div>
    <!-- this content will show full screen in small screens -->
    <div class="w-full flex flex-col md:flex-row">
      <div class="flex items-center md:hidden my-6">
        <AppButtonBack />
        <h2
          role="heading"
          aria-level="2"
          class="mb-0"
        >
          {{ $t('profile.navbar.title') }}
        </h2>
      </div>
      <div class="accordion-container p-6 gap-4 flex flex-col w-full pb-20 lg:pb-8">
        <AppProfileUserImage
          id="change-profile-picture"
          :image-profile-url="userData.image"
          :show-change-option="true"
        />
        <p class="text-primary-800 text-center font-medium text-xl">
          {{ `${userData.firstName} ${userData.lastName}` }}
        </p>
        <AppAccordion
          v-for="(tab, index) in activeTabs"
          :id="`tab-${index}`"
          :key="`tab-${tab.translation}`"
          :default-open="index === 0 || activeTabIndex === tab.id"
          :interaction="isMobile"
        >
          <template #header>
            <h3
              role="heading"
              aria-level="3"
              class="text-lg font-semibold mb-0"
            >
              {{ $t(`profile.tabs.${tab.translation}`) }}
            </h3>
          </template>
          <template #content>
            <component
              :is="tab.component"
              :data="tab.data"
            >
              <slot />
            </component>
          </template>
        </AppAccordion>
      </div>
    </div>
  </section>
</template>
