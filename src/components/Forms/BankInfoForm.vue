<script setup>
import AppInput from '@/components/App/AppInput.vue'

const props = defineProps({
  data: { type: Object, default: () => ({}) },
})

</script>

<template>
  <p>
    {{ $t('profile.bankInformation.description') }}
  </p>
  <div class="grid grid-cols-4 gap-x-4 h-fit mt-6">
    <AppInput
      id="iban-input"
      :value="props.data.iban"
      aria-label="iban"
      :label="$t('profile.bankInformation.iban')"
      type="text"
      aria-readonly="true"
      :readonly="true"
      class="col-span-4"
    />
    <AppInput
      id="cardNumber-input"
      :value="props.data.cardNumber"
      aria-label="cardNumber"
      :label="$t('profile.bankInformation.cardNumber')"
      type="text"
      aria-readonly="true"
      :readonly="true"
      class="col-span-4 md:col-span-2"
    />
    <AppInput
      id="cardType-input"
      :value="props.data.cardType"
      aria-label="cardType"
      :label="$t('profile.bankInformation.cardType')"
      type="text"
      aria-readonly="true"
      :readonly="true"
      class="col-span-2"
    />
    <AppInput
      id="cardExpire-input"
      :value="props.data.cardExpire"
      aria-label="cardExpire"
      :label="$t('profile.bankInformation.cardExpire')"
      type="text"
      aria-readonly="true"
      :readonly="true"
      class="col-span-2 md:col-span-1"
    />
    <AppInput
      id="currency-input"
      :value="props.data.currency"
      aria-label="currency"
      :label="$t('profile.bankInformation.currency')"
      type="text"
      aria-readonly="true"
      :readonly="true"
      class="col-span-2 md:col-span-1"
    />
  </div>
</template>
