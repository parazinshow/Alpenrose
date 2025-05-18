<template>
  <v-container
    class="bg-bgColor"
    :style="{
      maxWidth: '100vw',
      height: '100vh',
    }"
  >
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <h1 class="text-center">Alpenrose tables</h1>
        <v-tabs v-model="tab" align-tabs="center">
          <v-tab value="frontPatio">Front patio</v-tab>
          <v-tab value="inside">Inside</v-tab>
          <v-tab value="backPatio">Back patio</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col>
        <v-card-text>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="frontPatio"
              ><FrontPatioComponent
            /></v-tabs-window-item>

            <v-tabs-window-item value="inside">
              <InsideComponent />
            </v-tabs-window-item>

            <v-tabs-window-item value="backPatio">
              <BackPatioComponent />
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import FrontPatioComponent from '@/components/FrontPatioComponent.vue'
  import BackPatioComponent from '@/components/BackPatioComponent.vue'
  import InsideComponent from '@/components/InsideComponent.vue'
  import {ref} from 'vue'

  const tab = ref(null)
</script>

<style scoped>
  .text-center {
    text-align: center;
  }
</style>
