<script setup>
import AppCard from '@/components/App/AppCard.vue'
/*
Reto 2: Vista de Datos del Usuario.

En este ejercicio queremos poner en práctica la creatividad y la capacidad de proponer mejoras
en los diseños por parte del desarrollador. En nuestro día a día trabajaremos con diseños definidos,
pero también vamos a valorar la capacidad de las personas a la hora de proponer nueva estructuración para los datos.

Siéntete libre de modificar tanto código como sea necesario salvo el modelo de datos. Recuerda que el código proporcionado es sólo un ejemplo.
*/

const userData = {
  id: 1,
  firstName: 'Terry',
  lastName: 'Medhurst',
  maidenName: 'Smitham',
  age: 50,
  gender: 'male',
  email: 'atuny0@sohu.com',
  phone: '+63 791 675 8914',
  username: 'atuny0',
  password: '9uQFF1Lh',
  birthDate: '2000-12-25',
  image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
  bloodGroup: 'A+',
  height: 189,
  weight: 75.4,
  eyeColor: 'Green',
  hair: {
    color: 'Black',
    type: 'Strands',
  },
  domain: 'slashdot.org',
  ip: '117.29.86.254',
  address: {
    address: '1745 T Street Southeast',
    city: 'Washington',
    coordinates: {
      lat: 38.867033,
      lng: -76.979235,
    },
    postalCode: '20020',
    state: 'DC',
  },
  macAddress: '13:69:BA:56:A3:74',
  university: 'Capitol University',
  bank: {
    cardExpire: '06/22',
    cardNumber: '50380955204220685',
    cardType: 'maestro',
    currency: 'Peso',
    iban: 'NO17 0695 2754 967',
  },
  company: {
    address: {
      address: '629 Debbie Drive',
      city: 'Nashville',
      coordinates: {
        lat: 36.208114,
        lng: -86.58621199999999,
      },
      postalCode: '37076',
      state: 'TN',
    },
    department: 'Marketing',
    name: "Blanda-O'Keefe",
    title: 'Help Desk Operator',
  },
  ein: '20-9487066',
  ssn: '661-64-2976',
}
</script>

<template>
  <section class="h-full flex items-stretch text-white bg-gray-800">
    <div class="lg:flex lg:flex-col lg:w-1/4 hidden border-x border-gray-700 bg-gray-800 bg-no-repeat bg-cover relative px-4 py-6">
      <h3 class="text-wsmoke font-semibold text-2xl mb-4">
        {{ $t('profile.navbar.title') }}
      </h3>
      <p class="text-wsmoke">
        {{ $t('profile.navbar.subtitle') }}
      </p>
    </div>
    <div class="w-full flex items-center justify-center md:px-16 px-0 z-0 ">
      <div
        class="relative w-full max-w-[25rem] h-[-webkit-fill-available] mx-auto py-6 z-20  px-8 md:p-0 md:h-auto md:rounded md:shadow lg:shadow-none lg:rounded-none"
      >
        <AppCard>
          <template #title>
            <h2 class="text-lg font-semibold">
              {{ userData.firstName }} {{ userData.lastName }}
            </h2>
          </template>
          <template #description>
            <p>Email: {{ userData.email }}</p>
            <p>Phone: {{ userData.phone }}</p>
            <p>Age: {{ userData.age }}</p>
          </template>
        </AppCard>
      </div>
    </div>
  </section>
  <pre>
    {{ userData }}
    </pre>
</template>
