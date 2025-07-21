<script setup>
import AppButton from '@/components/App/AppButton.vue'
import AppInput from '@/components/App/AppInput.vue'

const props = defineProps({
  data: { type: Object, default: () => ({}) },
})

</script>

<template>
  <p>{{ $t('profile.security.description.p1') }}</p>
  <p>{{ $t('profile.security.description.p2') }}</p>
  <div class="grid grid-cols-4 gap-x-4 h-fit mt-6">
    <h3 class="col-span-4 mb-2">
      {{ $t('profile.security.changeUsername') }}
    </h3>
    <AppInput
      id="username-security-input"
      :value="props.data.username"
      aria-label="Username"
      label="Username"
      type="text"
      aria-readonly="true"
      :readonly="true"
      class="col-span-4"
    />
    <h3 class="col-span-4 mb-2">
      {{ $t('profile.security.changePassword') }}
    </h3>
    <AppInput
      id="current-password-input"
      aria-label="Current Password"
      label="Current Password"
      type="password"
      aria-readonly="false"
      class="col-span-2 md:col-span-1 "
    />
    <AppInput
      id="password-input"
      aria-label="password"
      label="Password"
      type="password"
      aria-readonly="false"
      class="col-span-2 md:col-span-1"
    />
    <AppButton
      id="change-password-button"
      variant="link"
      class="col-span-4 md:col-span-1 mb-6 text-secondary-700"
    >
      {{ $t('profile.security.changePassword') }}
    </AppButton>
    <AppButton
      id="two-factor-authentication-button"
      variant="outline"
      class="col-span-4 mb-4 md:mb-0 md:col-span-2"
    >
      {{ $t('profile.security.twoFactorAuthentication') }}
    </AppButton>
    <AppButton
      id="login-history-button"
      variant="outline"
      class="col-span-4 md:col-span-2"
    >
      {{ $t('profile.security.loginHistory') }}
    </AppButton>
  </div>
</template>
