<script setup>
import AppInput from '@/components/App/AppInput.vue'

const props = defineProps({
  data: { type: Object, default: () => ({}) },
})

</script>

<template>
  <p>
    {{ $t('profile.company.description') }}
  </p>
  <div class="grid grid-cols-4 gap-x-4 h-fit mt-6">
    <AppInput
      id="name-input"
      :value="props.data.name"
      aria-label="name"
      :label="$t('profile.company.name')"
      type="text"
      aria-readonly="true"
      :readonly="true"
      class="col-span-4 md:col-span-2"
    />
    <AppInput
      id="department-input"
      :value="props.data.department"
      aria-label="department"
      :label="$t('profile.company.department')"
      type="text"
      aria-readonly="true"
      :readonly="true"
      class="col-span-4 md:col-span-2"
    />
    <AppInput
      id="title-input"
      :value="props.data.title"
      aria-label="title"
      :label="$t('profile.company.title')"
      type="text"
      aria-readonly="true"
      :readonly="true"
      class="col-span-4 md:col-span-2"
    />
  </div>
  <div class="grid grid-cols-4 gap-x-4 h-fit">
    <AppInput
      id="address-input"
      :value="props.data.address.address"
      aria-label="address"
      :label="$t('profile.company.address')"
      type="text"
      aria-readonly="true"
      :readonly="true"
      class="col-span-4 md:col-span-2"
    />
    <AppInput
      id="city-input"
      :value="props.data.address.city"
      aria-label="city"
      :label="$t('profile.company.city')"
      type="text"
      aria-readonly="true"
      :readonly="true"
      class="col-span-4 md:col-span-2"
    />
    <AppInput
      id="postalCode-input"
      :value="props.data.address.postalCode"
      aria-label="postalCode"
      :label="$t('profile.company.postalCode')"
      type="text"
      aria-readonly="true"
      :readonly="true"
      class="col-span-4 md:col-span-1"
    />
    <AppInput
      id="state-input"
      :value="props.data.address.state"
      aria-label="state"
      :label="$t('profile.company.state')"
      type="text"
      aria-readonly="true"
      :readonly="true"
      class="col-span-4 md:col-span-1"
    />
  </div>
</template>
