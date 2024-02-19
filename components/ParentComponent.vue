// Component A
<template>
  <button @click="openModal">Open</button>
  <div appear :show="isOpen">
    <component-b @close="isOpen = false" />
    test
  </div>
</template>
<script setup>
const isOpen = ref(false);

function openModal() {
  isOpen.value = true;
}
</script>