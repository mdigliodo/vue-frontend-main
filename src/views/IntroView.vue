<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/App/AppButton.vue'
import AppCard from '@/components/App/AppCard.vue'

const { t } = useI18n()

const challenges = computed(() => [
  {
    title: t('intro.challenges.titleChallengeOne'),
    description: [
      t('intro.challenges.descriptionChallengeOne.p1'),
    ],
    routeName: 'register-user',
    action: t('intro.challenges.goToChallengeOne'),
  },
  {
    title: t('intro.challenges.titleChallengeTwo'),
    description: [
      t('intro.challenges.descriptionChallengeTwo.p1'),
    ],
    routeName: 'profile',
    action: t('intro.challenges.goToChallengeTwo'),
  },
  {
    title: t('intro.challenges.titleChallengeThree'),
    description: [
      t('intro.challenges.descriptionChallengeThree.p1'),
    ],
    routeName: 'calendar',
    action: t('intro.challenges.goToChallengeThree'),
  },
])

</script>

<template>
  <div class="intro-container p-6">
    <h1
      role="heading"
      aria-level="1"
    >
      {{ $t('intro.title') }}
    </h1>
    <p
      v-dompurify-html="$t('intro.description.p1')"
      class="mb-6"
    />
    <p
      v-dompurify-html="$t('intro.description.p2')"
      class="mb-6"
    />
    <p
      v-dompurify-html="$t('intro.description.p3')"
      class="mb-6"
    />
    <p
      v-dompurify-html="$t('intro.description.p4')"
      class="mb-6"
    />
    <p
      v-dompurify-html="$t('intro.description.p5')"
      class="mb-6"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
    <AppCard
      v-for="(challenge, index) in challenges"
      :key="index"
      class="intro-challenge-card"
    >
      <template #title>
        <h3
          aria-level="3"
          role="heading"
        >
          {{ challenge.title }}
        </h3>
      </template>
      <template #description>
        <p
          v-for="(desc, i) in challenge.description"
          :key="i"
          v-dompurify-html="desc"
        />
      </template>
      <template #action>
        <AppButton
          :id="`intro-challenge-${index}`"
          variant="secondary"
          @click="$router.push({ name: challenge.routeName })"
        >
          {{ challenge.action }}
        </AppButton>
      </template>
    </AppCard>
  </div>
</template>
