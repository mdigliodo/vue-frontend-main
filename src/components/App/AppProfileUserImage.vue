<script setup>
import AppButton from '@/components/App/AppButton.vue'

const props = defineProps({
  imageProfileUrl: { type: String, default: '' },
  showChangeOption: { type: Boolean, default: false },
})

const changeProfilePicture = () => {
  // Logic to change the profile picture
  console.log('Change profile picture clicked')
}

</script>

<template>
  <div class="profile-picture flex flex-col">
    <img
      :src="props.imageProfileUrl"
      alt="profile image"
      class="rounded-full w-24 h-24 mb-4 shadow-lg border-2 border-secondary-700 self-center md:mt-6"
    >
    <AppButton
      v-if="props.showChangeOption"
      variant="link"
      class="text-secondary-700 mb-4"
      @click="changeProfilePicture"
    >
      {{ $t('profile.changeProfilePicture') }}
    </AppButton>
  </div>
</template>
