<script setup>
import AppInput from '@/components/App/AppInput.vue'

const props = defineProps({
  data: { type: Object, default: () => ({}) },
})

</script>

<template>
  <p>
    {{ $t('profile.basicInformation.description') }}
  </p>
  <div class="grid grid-cols-2 gap-x-4 h-fit mt-6">
    <AppInput
      id="username-input"
      :value="props.data.username"
      aria-label="username"
      :label="$t('profile.basicInformation.username')"
      type="text"
      aria-readonly="true"
      :readonly="true"
      class="col-span-2"
    />
    <AppInput
      id="email-input"
      :value="props.data.email"
      aria-label="email"
      :label="$t('profile.basicInformation.email')"
      type="email"
      aria-readonly="true"
      :readonly="true"
      class="col-span-2"
    />
    <AppInput
      id="phone-input"
      :value="props.data.phone"
      aria-label="phone"
      :label="$t('profile.basicInformation.phone')"
      type="tel"
      aria-readonly="true"
      :readonly="true"
      class="col-span-2"
    />
  </div>
</template>
