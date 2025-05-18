<template>
  <v-container
    :style="{
      maxWidth: '80vw',
      maxHeight: '80vh',
    }"
  >
    <v-row> </v-row>
  </v-container>
</template>

<script>
  import {defineComponent, ref} from 'vue'

  export default defineComponent({
    name: 'FrontPatioComponent',
    setup() {},
  })
</script>

<style scoped>
  .v-card {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
</style>
