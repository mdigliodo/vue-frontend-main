<script setup>

import { CreditCardType } from '@/common/utils/CreditCardTypes.js'
import AppCard from '@/components/App/AppCard.vue'

const props = defineProps({
  info: { type: Object, default: () => ({}) },
})

</script>

<template>
  <AppCard
    class="bank-card-info relative opacity-95 rounded shadow-lg cursor pointer col-span-4 h-[14rem] md:h-[15rem] max-w-[25rem] md:min-w-[24rem] p-6 text-wsmoke"
  >
    <template
      #htmlContent
    >
      <div class="h-full flex flex-col gap-2 justify-end">
        <img
          src="https://portfolio-images-v1.s3.us-east-2.amazonaws.com/images/svg-golden-chip.svg"
          alt="Chip card image"
          class="absolute left-4 top-4 w-16 h-16 m-auto"
        >
        <img
          :src="CreditCardType[props.info.cardType]?.img"
          alt="Card type image"
          class="absolute right-4 top-4 w-18 h-16 m-auto"
        >
        <div class="flex flex-col">
          <p
            id="cardNumber-input"
            class="text-xl"
          >
            {{ props.info.cardNumber }}
          </p>
        </div>
        <div class="flex flex-row justify-between">
          <div class="flex flex-col">
            <small for="cardOwner-input">
              {{ $t('profile.bankInformation.cardOwner') }}
            </small>
            <p
              id="cardOwner-input"
            >
              {{ props.info.cardOwner }}
            </p>
          </div>
          <div class="flex flex-col">
            <small for="cardExpire-input">
              {{ $t('profile.bankInformation.cardExpire') }}
            </small>
            <small
              id="cardExpire-input"
            >
              {{ props.info.cardExpire }}
            </small>
          </div>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<style scoped>
/*
    TO-DO:
    - Improvement:
        Change this background gradient
        in base credit card types
        Ex. master, visa, amex, maestro, etc.
*/
.bank-card-info {
  background-image: linear-gradient(to right top, #051937, #13213a, #1f293d, #2b3240, #363a42);
}
</style>
