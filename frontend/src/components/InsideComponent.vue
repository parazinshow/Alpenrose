<template>
  <v-container
    :style="{
      maxWidth: '80vw',
      maxHeight: '80vh',
    }"
  >
    <v-row>
      <!-- Left side -->
      <v-col sm="6">
        <!-- T1 and T2 -->
        <v-row>
          <!-- T1 -->
          <v-col sm="6" :style="{minHeight: '15vh'}"
            ><v-card
              class="bg-tableEmpty"
              :style="{
                height: '100%',
                width: '60%',
                margin: '0 auto',
              }"
            ></v-card
          ></v-col>
          <!-- T2 -->
          <v-col sm="6" :style="{minHeight: '15vh'}"
            ><v-card
              class="bg-tableEmpty"
              :style="{
                height: '80%',
                width: '30%',
                margin: '0 auto',
              }"
            ></v-card
          ></v-col>
        </v-row>
        <!-- Space between T1 and T14 -->
        <v-row>
          <v-col :style="{minHeight: '25vh'}"></v-col>
        </v-row>
        <!-- T14 and T13 -->
        <v-row>
          <!-- T13 -->
          <v-col sm="4" :style="{minHeight: '15vh'}"
            ><v-card
              class="bg-tableEmpty"
              :style="{
                height: '100%',
                width: '55%',
                margin: '0 auto',
              }"
            ></v-card
          ></v-col>
          <!-- T14 -->
          <v-col sm="8" :style="{minHeight: '20vh'}"
            ><v-card
              class="bg-tableEmpty"
              :style="{
                height: '80%',
                width: '85%',
                margin: '0 auto',
              }"
            ></v-card
          ></v-col>
        </v-row>
        <!-- T12 and T11 and T150 -->
        <v-row>
          <!-- T150 -->
          <v-col sm="4" :style="{minHeight: '15vh'}"
            ><v-card
              class="bg-tableEmpty"
              :style="{
                height: '80%',
                width: '50%',
                margin: '0 auto',
              }"
            ></v-card
          ></v-col>
          <!-- T12 -->
          <v-col sm="6" :style="{minHeight: '15vh'}"
            ><v-card
              class="bg-tableEmpty"
              :style="{
                height: '100%',
                width: '60%',
                margin: '0 auto',
              }"
            ></v-card
          ></v-col>
          <!-- T11 -->
          <v-col sm="2" :style="{minHeight: '15vh'}"
            ><v-card
              class="bg-tableEmpty"
              :style="{
                height: '80%',
                width: '100%',
                margin: '0 auto',
              }"
            ></v-card
          ></v-col>
        </v-row>
      </v-col>

      <!-- Right side -->
      <v-col sm="6">
        <!-- T4 and T5 -->
        <v-row>
          <!-- T5 -->
          <v-col sm="6" :style="{minHeight: '15vh'}"
            ><v-card
              class="bg-tableEmpty"
              :style="{
                height: '90%',
                width: '60%',
                margin: '0 auto',
              }"
            ></v-card
          ></v-col>
          <!-- T4 -->
          <v-col sm="6" :style="{minHeight: '15vh'}"
            ><v-card
              class="bg-tableEmpty"
              :style="{
                height: '90%',
                width: '60%',
                margin: '0 auto',
              }"
            ></v-card
          ></v-col>
        </v-row>
        <!-- T6 -->
        <v-row>
          <v-col sm="6" :style="{minHeight: '15vh'}"
            ><v-card
              class="bg-tableEmpty"
              :style="{
                height: '90%',
                width: '60%',
                margin: '0 auto',
              }"
            ></v-card
          ></v-col>
        </v-row>
        <!-- T7 -->
        <v-row>
          <v-col sm="6" :style="{minHeight: '15vh'}"></v-col>
          <v-col sm="6" :style="{minHeight: '15vh'}"
            ><v-card
              class="bg-tableEmpty"
              :style="{
                height: '70%',
                width: '30%',
                margin: '0 auto',
              }"
            ></v-card
          ></v-col>
        </v-row>
        <!-- T8 -->
        <v-row>
          <v-col sm="6" :style="{minHeight: '15vh'}"></v-col>
          <v-col sm="6" :style="{minHeight: '15vh'}"
            ><v-card
              class="bg-tableEmpty"
              :style="{
                height: '90%',
                width: '70%',
                margin: '0 auto',
              }"
            ></v-card
          ></v-col>
        </v-row>
        <!-- T9 and T10 -->
        <v-row>
          <!-- T10 -->
          <v-col sm="6" :style="{minHeight: '15vh'}"
            ><v-card
              class="bg-tableEmpty"
              :style="{
                height: '90%',
                width: '60%',
                margin: '0 auto',
              }"
            ></v-card
          ></v-col>
          <!-- T9 -->
          <v-col sm="6" :style="{minHeight: '15vh'}"
            ><v-card
              class="bg-tableEmpty"
              :style="{
                height: '70%',
                width: '30%',
                margin: '0 auto',
              }"
            ></v-card
          ></v-col>
        </v-row>
      </v-col>
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
  .v-row {
    padding: 0px;
  }
</style>
