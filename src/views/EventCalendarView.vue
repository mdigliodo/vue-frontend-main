<script setup>
import { useWindowSize } from '@vueuse/core'
import dayjs from 'dayjs'
import { en } from 'dayjs/locale/en'
import { es } from 'dayjs/locale/es'
import isToday from 'dayjs/plugin/isToday'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/App/AppButton.vue'
import AppCard from '@/components/App/AppCard.vue'
import AppEventCalendar from '@/components/App/AppEventCalendar.vue'

/*
Reto 3: Calendario de Eventos.

En este ejercicio vamos a lidiar con errores tanto de javascript como de maquetación. Tu papel es
arreglar estos errores y que la página, que actualmente no renderiza, cargue bien el contenido.
Además, vamos a añadir una funcionalidad al calendario: Queremos ver qué eventos hay cada día.
Como siempre, el diseño y la creatividad quedan de tu lado, ¡Suerte!

Siéntete libre de modificar tanto código como sea necesario salvo el modelo de datos. Recuerda que el código proporcionado es sólo un ejemplo.
*/

const { t, locale } = useI18n()

const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)

const today = dayjs()

const iconMap = {
  concert: 'mdi:music',
  meetup: 'mdi:account-group',
  cinema: 'mdi:movie-open',
}

const eventsData = [
  {
    eventTime: today.add(1, 'day').format('YYYY-MM-DD'),
    type: 'concert',
  },
  {
    eventTime: today.add(2, 'day').format('YYYY-MM-DD'),
    type: 'meetup',
  },
  {
    eventTime: today.add(-7, 'day').format('YYYY-MM-DD'),
    type: 'meetup',
  },
  {
    eventTime: today.add(2, 'day').format('YYYY-MM-DD'),
    type: 'concert',
  },
  {
    eventTime: today.add(1, 'month').format('YYYY-MM-DD'),
    type: 'cinema',
  },
  {
    eventTime: today.add(-1, 'month').format('YYYY-MM-DD'),
    type: 'concert',
  },
  {
    eventTime: today.add(1, 'week').format('YYYY-MM-DD'),
    type: 'meetup',
  },
  {
    eventTime: today.add(1, 'year').format('YYYY-MM-DD'),
    type: 'meetup',
  },
  {
    eventTime: today.add(20, 'day').format('YYYY-MM-DD'),
    type: 'cinema',
  },
]

// This can be do in the service after call events from an API
// If we use map, we can use the same key for different types of events
// and we can have multiple events in the same day
// In terms of performance, this is more efficient than using an array
const eventsMap = computed(() => {
  const map = new Map()
  eventsData.forEach(({ eventTime, type }) => {
    const icon = iconMap[type] || 'mdi:calendar-question'
    const entry = { type, icon }

    if (!map.has(eventTime)) map.set(eventTime, [])
    map.get(eventTime).push(entry)
  })
  return map
})

dayjs.extend(isToday)
dayjs.locale(es, en) // load locale for later use

const viewDate = ref(dayjs())

const daystoPrepend = computed(() => {
  const startOfMonth = viewDate.value.startOf('month')
  const startOfFirstWeek = startOfMonth.startOf('week')
  const daysToFirstDay = startOfMonth.diff(startOfFirstWeek, 'day')

  return Array.from(new Array(daysToFirstDay).keys())
})

const days = computed(() => {
  const ranges = []
  const startOfRange = viewDate.value.startOf('month').add(-1, 'day')
  const endOfRange = viewDate.value.endOf('month').add(-1, 'day')

  let currentDate = startOfRange

  while (currentDate.isBefore(endOfRange) || currentDate.isSame(endOfRange)) {
    currentDate = currentDate.add(1, 'day')
    ranges.push(currentDate)
  }
  return ranges
})

const shiftMonth = function (amount) {
  viewDate.value = viewDate.value.add(amount, 'month')
}
const reset = async function () {
  viewDate.value = await dayjs()
}

const weekDays = computed(() => [
  t('calendar.weekdays.sunday'),
  t('calendar.weekdays.monday'),
  t('calendar.weekdays.tuesday'),
  t('calendar.weekdays.wednesday'),
  t('calendar.weekdays.thursday'),
  t('calendar.weekdays.friday'),
  t('calendar.weekdays.saturday'),
])

watch(locale, () => {
  dayjs.locale(locale.value)
})

</script>

<template>
  <div class="content py-6 px-4">
    <h3 class="font-semibold text-2xl mb-4">
      {{ $t('calendar.title') }}
    </h3>
    <p>
      {{ $t('calendar.subtitle') }}
    </p>
  </div>
  <div class="flex flex-col items-center px-4">
    <div class="w-full grid grid-cols-2 items-center justify-center">
      <AppButton
        icon="mdi:arrow-left"
        variant="link"
        class="text-secondary-700 col-span-1"
        @click="shiftMonth('-1')"
      >
        {{ $t('calendar.previous') }}
      </AppButton>
      <span class="text-3xl col-span-2 order-first text-center capitalize">{{ viewDate.format('MMMM YYYY') }}</span>
      <AppButton
        icon="mdi:arrow-right"
        icon-position="suffix"
        variant="link"
        class="text-secondary-700 col-span-1"
        @click="shiftMonth('1')"
      >
        {{ $t('calendar.next') }}
      </AppButton>
    </div>

    <AppButton
      variant="link"
      class="text-secondary-700"
      @click="reset()"
    >
      {{ $t('calendar.today') }}
    </AppButton>
  </div>
  <AppCard class="md:m-4 rounded-none md:rounded-lg min-w-auto">
    <template #htmlContent>
      <div class="grid grid-cols-7 gap-1 mt-4 mb-2">
        <strong
          v-for="weekDay in weekDays"
          :key="weekDay"
          class="week-day text-center text-primary-800 "
        >
          {{ isMobile ? weekDay.slice(0, 3) : weekDay }}
        </strong>
      </div>

      <div class="grid grid-cols-7">
        <div
          v-for="prepend in daystoPrepend"
          :key="prepend"
        />
        <div
          v-for="day in days"
          :key="day"
          class="border border-slate-200 flex flex-col h-32"
        >
          <div
            :class="[day.isToday() ? 'bg-secondary-100 ring-2 ring-secondary-500 h-full' : '']"
            class="text-center cursor-pointer "
          >
            <div>{{ day.format('D') }}</div>
            <AppEventCalendar
              v-for="(event, index) in eventsMap.get(day.format('YYYY-MM-DD')) || []"
              :key="'event-number-' + index"
              :event="event"
            />
          </div>
        </div>
      </div>
    </template>
  </AppCard>
  <h3 class="m-6 text-end text-secondary-500">
    {{ $t('company.slogan') }}
  </h3>
</template>
