// Component B
<template>
  <button type="button" @click="emit('close')">Close</button>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])


</script>