<template>
  <v-container
    :style="{
      maxWidth: '80vw',
      maxHeight: '80vh',
    }"
  >
    <v-row>
      <v-col sm="6">
        <v-row>
          <v-col sm="4" :style="{minHeight: '20vh'}">
            <v-card
              class="bg-tableEmpty"
              :style="{
                height: '70%',
                width: '70%',
                margin: '0 auto',
              }"
            ></v-card>
          </v-col>
          <v-col sm="4" :style="{minHeight: '20vh'}">
            <v-card
              class="bg-tableSeated"
              :style="{
                height: '70%',
                width: '70%',
                margin: '0 auto',
              }"
            ></v-card>
          </v-col>
          <v-col sm="4" :style="{minHeight: '20vh'}">
            <v-card
              class="bg-tableAppetizer"
              :style="{
                height: '70%',
                width: '70%',
                margin: '0 auto',
              }"
            ></v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="4" :style="{minHeight: '20vh'}">
            <v-card
              class="bg-tableEntree"
              :style="{
                height: '70%',
                width: '70%',
                margin: '0 auto',
              }"
            ></v-card>
          </v-col>
          <v-col sm="4" :style="{minHeight: '20vh'}"></v-col>
          <v-col sm="4" :style="{minHeight: '20vh'}">
            <v-card
              class="bg-tableDessert"
              :style="{
                height: '100%',
                width: '70%',
                margin: '0 auto',
              }"
            ></v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="4" :style="{minHeight: '20vh'}">
            <v-card
              class="bg-tableEmpty"
              :style="{
                height: '100%',
                width: '70%',
                margin: '0 auto',
              }"
            ></v-card>
          </v-col>
          <v-col sm="4" :style="{minHeight: '20vh'}"></v-col>
          <v-col sm="4" :style="{minHeight: '20vh'}"></v-col>
        </v-row>
        <v-row>
          <v-col sm="4" :style="{minHeight: '20vh'}"></v-col>
          <v-col sm="8" :style="{minHeight: '20vh'}">
            <v-card
              class="bg-tableEmpty"
              :style="{
                height: '70%',
                width: '80%',
                margin: '0 auto',
              }"
            ></v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col sm="2">
        <v-card
          class="bg-tableEmpty"
          :style="{
            height: '40%',
            width: '70%',
            margin: '0 auto',
            marginTop: '15vh',
          }"
        ></v-card>
      </v-col>
      <v-col sm="4">
        <v-row>
          <v-col cols="12" sm="4" :style="{minHeight: '20vh'}"> </v-col>
          <v-col cols="12" sm="4" :style="{minHeight: '20vh'}"></v-col>
          <v-col cols="12" sm="4" :style="{minHeight: '20vh'}"> </v-col>
        </v-row>
        <v-row>
          <v-col sm="6" :style="{minHeight: '20vh'}">
            <v-card
              class="bg-tableEmpty"
              :style="{
                height: '70%',
                width: '70%',
                margin: '0 auto',
              }"
            ></v-card>
          </v-col>
          <v-col sm="6" :style="{minHeight: '20vh'}">
            <v-card
              class="bg-tableEmpty"
              :style="{
                height: '70%',
                width: '70%',
                margin: '0 auto',
              }"
            ></v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col :style="{minHeight: '20vh'}"> </v-col>
        </v-row>
        <v-row>
          <v-col sm="6" :style="{minHeight: '20vh'}">
            <v-card
              class="bg-tableEmpty"
              :style="{
                height: '70%',
                width: '100%',
                margin: '0 auto',
              }"
            ></v-card>
          </v-col>
          <v-col sm="6" :style="{minHeight: '20vh'}">
            <v-card
              class="bg-tableEmpty"
              :style="{
                height: '70%',
                width: '100%',
                margin: '0 auto',
              }"
            ></v-card>
          </v-col>
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
</style>
