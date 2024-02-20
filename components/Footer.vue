<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner inline-actions rounded class="bg-indigo-2 text-white">
      <p>@ 2010 - 2024</p>

      <template v-slot:action>
        <q-btn flat label="About" />
        <q-btn flat label="balance-sheet" />
        <NuxtLink to="/balance-sheet">balance</NuxtLink>
      </template>
    </q-banner>
  </div>
</template>