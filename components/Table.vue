<template>
  <div class="q-pa-lg">
    <q-option-group
      v-model="group"
      :options="options"
      color="green"
      type="toggle"
    />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      group: ref(['op1']),

      options: [
        {
          label: 'Option Active',
          value: 'op1'
        }
      ]
    }
  }
}
</script>
