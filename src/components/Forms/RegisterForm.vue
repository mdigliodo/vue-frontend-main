<script setup>
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

import { RequiredValidator, MinLength, EmailValidator, MaxLength, SameAs, PasswordValidator } from '@/common/validators'
import AppButton from '@/components/App/AppButton.vue'
import AppInput from '@/components/App/AppInput.vue'
import AppModal from '@/components/App/AppModal.vue'
import { useForm } from '@/composable/useForm.vue'
import { useModal } from '@/composable/useModal.vue'

/*
Reto 1: Validación de formularios

En este formulario de registro, vamos a pedir a los usuarios que nos proporcionen
un nombre, un email y una contraseña (dos veces). Las validaciones serán las siguientes:

  Nombre                Requerido | Máximo 64 letras
  Email                 Requerido | Formato Email
  Contraseña            Requerido | 8 caracteres alfanuméricos, un número y un caracter especial
  Repetir Contraseña    Requerido | Misma contraseña que la anterior

Nos gustaría que ver un pequeño composable genérico para gestionar formularios, aunque puedes utilizar lo que mejor consideres.
Si has trabajado con Playwright y con Vitest, nos encantaría que hicieras una prueba de los diferentes casos de uso.

Siéntete libre de modificar tanto código como sea necesario salvo el modelo de datos. Recuerda que el código proporcionado es sólo un ejemplo.
*/

// Validation rules
const rules = {
  username: {
    required: RequiredValidator(),
    maxLength: MaxLength(64, 'Username must not exceed 64 characters.'),
  },
  email: {
    required: RequiredValidator(),
    email: EmailValidator(),
  },
  password: {
    required: RequiredValidator(),
    minLength: MinLength(8, 'Password must be at least 8 characters long.'),
    password: PasswordValidator('Password must include a number and a special character.'),
  },
  confirmPassword: {
    required: RequiredValidator(),
    sameAs: SameAs('password', 'Passwords do not match.'),
  },
}
// Create the use form in base of key name of the rules
const {
  errors,
  hasError,
  isSaving,
  formData,
  validateField,
  validateAllFields,
} = useForm(rules)

const { isOpen, openModal, closeModal } = useModal()

const router = useRouter()

const submit = async () => {
  await validateAllFields()
  if (hasError.value) return
  // Simulate a form submission
  isSaving.value = true
  setTimeout(() => {
    isSaving.value = false
  }, 1000)

  console.log('Form data is valid:', formData)
  openModal()

  /*
  No es necesario integrar ningún cliente http. Simplemente valida que los datos son válidos
  antes de pintar el payload por consola mediante console.log(), Por ejemplo:

  if (formIsValid) {
    console.log(payload)
  }
  */
}

const redirectToIntro = () => {
  closeModal()
  router.push({ name: 'introduction' })
}

</script>

<template>
  <div>
    <form
      class="flex flex-col justify-between h-full md:justify-start md:p-8 lg:p-0"
      @submit.prevent="submit"
    >
      <div class="form-wrap mb-8">
        <h3 class="text-2xl font-bold">
          {{ $t('registerForm.title') }}
        </h3>
        <p class="text-primary-600 mb-4">
          {{ $t('registerForm.description') }}
        </p>
        <AppInput
          id="username-input"
          v-model="formData.username"
          aria-label="Username"
          label="Username"
          type="text"
          placeholder="Insert your username"
          :errors="errors.username"
          @blur="validateField('username')"
        />

        <AppInput
          id="email-input"
          v-model="formData.email"
          aria-label="Email"
          label="Email"
          type="email"
          placeholder="Insert your email"
          :errors="errors.email"
          @blur="validateField('email')"
        />

        <AppInput
          id="password-input"
          v-model="formData.password"
          aria-label="Password"
          label="Password"
          type="password"
          placeholder="Insert your password"
          :errors="errors.password"
          @blur="validateField('password')"
        />

        <AppInput
          id="confirm-password-input"
          v-model="formData.confirmPassword"
          aria-label="Confirm Password"
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          :errors="errors.confirmPassword"
          @blur="validateField('confirmPassword')"
        />
      </div>

      <AppButton
        :loading="isSaving"
        :block="true"
        type="submit"
      >
        {{ $t('registerForm.submitButton') }}
      </AppButton>
    </form>

    <AppModal
      v-if="isOpen.value"
      :is-open="isOpen.value"
      @close="closeModal"
    >
      <template #icon>
        <Icon
          icon="mdi:check-circle"
          class="text-5xl text-green-500 my-4 mx-auto"
        />
      </template>
      <template #body>
        <div class="content-body">
          <h3
            id="success-user-register"
            aria-level="2"
            class="text-2xl font-bold m-0 text-center"
          >
            {{ $t('registerForm.successTitle') }}
          </h3>
          <p class="text-primary-600 mb-4 text-center">
            {{ $t('registerForm.successMessage') }}
          </p>
        </div>
      </template>
      <template #actions>
        <AppButton
          variant="primary"
          class="w-full"
          @click="redirectToIntro"
        >
          {{ $t('registerForm.redirectToIntro') }}
        </AppButton>
      </template>
    </AppModal>
  </div>
</template>

<style scoped></style>
