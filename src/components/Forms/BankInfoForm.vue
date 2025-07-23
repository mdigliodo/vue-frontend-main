<script setup>
import { computed } from 'vue'

import { CountryCurrencyCodes } from '@/common/utils/CountryCurrencyCodes'
import AppBankCard from '@/components/App/AppBankCard.vue'
import AppInput from '@/components/App/AppInput.vue'

const props = defineProps({
  data: { type: Object, default: () => ({}) },
})

const cardInformation = computed(() => ({
  cardNumber: props.data.bank?.cardNumber?.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim(),
  cardOwner: `${props.data.firstName} ${props.data.lastName}` || 'Digliodo Mateo',
  cardExpire: props.data.bank?.cardExpire || '12/25',
  cardType: props.data.bank?.cardType || 'maestro',
  currency: props.data.bank?.currency,
  iban: props.data.bank?.iban,
}))

</script>

<template>
  <p>
    {{ $t('profile.bankInformation.description') }}
  </p>
  <div class="flex flex-col md:flex-row md:justify-start gap-4 md:gap-20 mt-6">
    <div class="grid grid-cols-4 items-start gap-4 md:gap-8">
      <div class="flex flex-col md:flex-row items-center gap-2 col-span-1">
        <img
          :src="CountryCurrencyCodes[cardInformation.currency]?.flag"
          alt="Currency flag"
          class="h-8 w-8 md:h-10 md:w-10"
        >
        <strong>{{ CountryCurrencyCodes[cardInformation.currency]?.code }}</strong>
      </div>

      <AppInput
        id="iban-input"
        aria-readonly="true"
        aria-label="iban"
        class="col-span-3 md:col-span-2 md:min-w-[20rem]"
        type="text"
        :label="$t('profile.bankInformation.iban')"
        :copy-suffix="true"
        :value="props.data.bank?.iban"
        :readonly="true"
      />
      <AppBankCard
        class="col-start-1 md:col-start-2 md:col-end-3"
        :info="cardInformation"
      />
    </div>
  </div>
</template>
