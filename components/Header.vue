<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner inline-actions rounded class="bg-brown-2 text-white">
      <q-btn flat label="Home" />
      <template v-slot:action>
        <div style="padding-right: 15px">
          <q-btn flat label="Logout" />
        </div>

        <q-avatar>
          <img src="../assets/img/pulock.webp" />
        </q-avatar>
      </template>
    </q-banner>
  </div>
</template>