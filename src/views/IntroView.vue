<script setup>

</script>

<template>
  <div class="bg-white rounded-lg shadow-lg p-6 my-4 text-sm">
    <h1
      role="heading"
      aria-level="1"
      class="text-2xl font-bold mb-4"
    >
      {{ $t('intro.title') }}
    </h1>
    <p
      class="mb-6"
      v-html="$t('intro.description.p1')"
    />
    <p
      class="mb-6"
      v-html="$t('intro.description.p2')"
    />
    <p
      class="mb-6"
      v-html="$t('intro.description.p3')"
    />
    <p
      class="mb-6"
      v-html="$t('intro.description.p4')"
    />
    <p
      class="mb-6"
      v-html="$t('intro.description.p5')"
    />

    <h2 class="text-lg font-bold mb-4">
      {{ $t('intro.titleChallengeOne') }}
    </h2>
    <p
      class="mb-6"
      v-html="$t('intro.descriptionChallengeOne.p1')"
    />

    <h2 class="text-lg font-bold mb-4">
      {{ $t('intro.titleChallengeTwo') }}
    </h2>
    <p
      class="mb-6"
      v-html="$t('intro.descriptionChallengeTwo.p1')"
    />

    <h2 class="text-lg font-bold mb-4">
      {{ $t('intro.titleChallengeThree') }}
    </h2>
    <p
      class="mb-6"
      v-html="$t('intro.descriptionChallengeThree.p1')"
    />
  </div>
</template>
