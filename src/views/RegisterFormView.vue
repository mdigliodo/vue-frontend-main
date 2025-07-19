<script setup>
import AppButton from '@/components/App/AppButton.vue'
import RegisterForm from '@/components/Forms/RegisterForm.vue'

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
const submit = () => {

  No es necesario integrar ningún cliente http. Simplemente valida que los datos son válidos
  antes de pintar el payload por consola mediante console.log(), Por ejemplo:

  if (formIsValid) {
    console.log(payload)
  }
}
*/
</script>

<template>
  <section class="h-full flex items-stretch text-white ">
    <div
      class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
      style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);"
    >
      <div class="absolute bg-black opacity-60 inset-0 z-0" />
      <div class="w-full px-24 z-10 hidden lg:block">
        <h1 class="text-secondary-500 text-5xl font-bold text-left tracking-wide">
          {{ $t('company.slogan') }}
        </h1>
        <p class="text-wsmoke text-3xl my-4">
          {{ $t('company.calendarSlogan') }}
        </p>
      </div>
    </div>
    <div class="lg:w-1/2 w-full flex items-center justify-center md:px-16 px-0 z-0 bg-wsmoke">
      <div
        class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
        style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);"
      >
        <div class="absolute bg-black opacity-60 inset-0 z-0" />
      </div>
      <div
        class="relative w-full max-w-[25rem] h-[-webkit-fill-available] mx-auto py-6 z-20 bg-wsmoke px-8 md:p-0 md:h-auto md:rounded md:shadow lg:shadow-none lg:rounded-none"
      >
        <div class="relative pb-12 -left-4 md:left-4 lg:-left-4 md:top-6 z-10">
          <AppButton
            icon="mdi:arrow-left-circle"
            variant="link"
            class="md:bg-wsmoke"
            @click="$router.push({ name: 'home' })"
          >
            {{ $t('navigation.backHome') }}
          </AppButton>
        </div>

        <RegisterForm class="h-[80vh]" />
      </div>
    </div>
  </section>
</template>
