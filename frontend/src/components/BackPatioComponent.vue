<template>
  <v-container
    :style="{
      maxWidth: '80vw',
      maxHeight: '80vh',
    }"
  >
    <!-- T62, 63, 64, 65 -->
    <v-row :style="{minHeight: '25vh'}">
      <!-- T62 -->
      <v-col sm="3"
        ><v-card
          class="round-table bg-tableEmpty"
          :style="{
            height: '15vh',
            width: '8vw',
            margin: '0 auto',
          }"
        ></v-card
      ></v-col>
      <!-- T63 -->
      <v-col sm="3"
        ><v-card
          class="bg-tableEmpty"
          :style="{
            height: '100%',
            width: '40%',
            margin: '0 auto',
          }"
        ></v-card
      ></v-col>
      <!-- T64 -->
      <v-col sm="3"
        ><v-card
          class="bg-tableEmpty"
          :style="{
            height: '65%',
            width: '85%',
            margin: '0 auto',
          }"
        ></v-card
      ></v-col>
      <!-- T65 -->
      <v-col sm="3" :style="{minHeight: '20vh'}"
        ><v-card
          class="bg-tableEmpty"
          :style="{
            height: '100%',
            width: '35%',
            margin: '0 auto',
            transform: 'rotate(-45deg)',
          }"
        ></v-card
      ></v-col>
    </v-row>

    <!-- T61, 69, 70 -->
    <v-row :style="{minHeight: '25vh'}">
      <!-- T61 -->
      <v-col sm="2"
        ><v-card
          class="round-table bg-tableEmpty"
          :style="{
            height: '15vh',
            width: '8vw',
            margin: '0 auto',
          }"
        ></v-card
      ></v-col>
      <v-col sm="1"></v-col>
      <!-- T69 -->
      <v-col sm="3"
        ><v-card
          class="round-table bg-tableEmpty"
          :style="{
            height: '15vh',
            width: '8vw',
            margin: '0 auto',
          }"
        ></v-card
      ></v-col>
      <!-- T70 -->
      <v-col sm="2"
        ><v-card
          class="round-table bg-tableEmpty"
          :style="{
            height: '15vh',
            width: '8vw',
            margin: '0 auto',
          }"
        ></v-card
      ></v-col>
      <v-col sm="4"></v-col>
    </v-row>

    <!-- T60, 68, 67, 66 -->
    <v-row :style="{minHeight: '25vh'}">
      <!-- T60 -->
      <v-col sm="4"
        ><v-card
          class="bg-tableEmpty"
          :style="{
            height: '70%',
            width: '75%',
            margin: '0 auto',
          }"
        ></v-card
      ></v-col>
      <!-- Space for the door -->
      <v-col sm="1"></v-col>
      <!-- T68 -->
      <v-col sm="2"
        ><v-card
          class="bg-tableEmpty"
          :style="{
            height: '100%',
            width: '60%',
            margin: '0 auto',
          }"
        ></v-card
      ></v-col>
      <!-- T67 -->
      <v-col sm="3"
        ><v-card
          class="bg-tableEmpty"
          :style="{
            height: '60%',
            width: '70%',
            margin: '0 auto',
          }"
        ></v-card
      ></v-col>
      <!-- T66 -->
      <v-col sm="2"
        ><v-card
          class="round-table bg-tableEmpty"
          :style="{
            height: '60%',
            width: '70%',
            margin: '0 auto',
          }"
        ></v-card
      ></v-col>
    </v-row>
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
  .round-table {
    border-radius: 100%;
  }
  .v-row {
    padding: 0px;
  }
</style>
