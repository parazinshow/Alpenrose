<template>
  <Suspense>
    <template #default>
      <v-container
        v-if="tables.length > 0"
        :style="{
          maxWidth: '80vw',
          maxHeight: '80vh',
        }"
      >
        <v-row>
          <v-col sm="6">
            <!-- T20,21,22 -->
            <v-row>
              <!-- T20 -->
              <v-col sm="4" :style="{minHeight: '20vh'}">
                <v-card
                  v-bind="(t20 = tables[0])"
                  :class="`bg-table${t20.status}`"
                  :style="{
                    height: '70%',
                    width: '70%',
                    margin: '0 auto',
                  }"
                  >
                  <h2>{{ t20.tableNumber }}</h2>
                </v-card>
              </v-col>
              <!-- T21 -->
              <v-col sm="4" :style="{minHeight: '20vh'}">
                <v-card
                  v-bind="(t21 = tables[1])"
                  :class="`bg-table${t21.status}`"
                  :style="{
                    height: '70%',
                    width: '70%',
                    margin: '0 auto',
                  }"
                  ><h2>{{ t21.tableNumber }}</h2></v-card
                >
              </v-col>
              <!-- T22 -->
              <v-col sm="4" :style="{minHeight: '20vh'}">
                <v-card
                  v-bind="(t22 = tables[2])"
                  :class="`bg-table${t22.status}`"
                  :style="{
                    height: '70%',
                    width: '70%',
                    margin: '0 auto',
                  }"
                  ><h2>{{ t22.tableNumber }}</h2></v-card
                >
              </v-col>
            </v-row>
            <!-- T23,24 -->
            <v-row>
              <!-- T23 -->
              <v-col sm="4" :style="{minHeight: '20vh'}">
                <v-card
                  v-bind="(t23 = tables[3])"
                  :class="`bg-table${t23.status}`"
                  :style="{
                    height: '70%',
                    width: '70%',
                    margin: '0 auto',
                  }"
                  ><h2>{{ t23.tableNumber }}</h2></v-card
                >
              </v-col>
              <!-- Empty -->
              <v-col sm="4" :style="{minHeight: '20vh'}"></v-col>
              <!-- T24 -->
              <v-col sm="4" :style="{minHeight: '20vh'}">
                <v-card
                  v-bind="(t24 = tables[4])"
                  :class="`bg-table${t24.status}`"
                  :style="{
                    height: '100%',
                    width: '70%',
                    margin: '0 auto',
                  }"
                  ><h2>{{ t24.tableNumber }}</h2></v-card
                >
              </v-col>
            </v-row>
            <!-- T31 -->
            <v-row>
              <!-- T31 -->
              <v-col sm="4" :style="{minHeight: '20vh'}">
                <v-card
                  v-bind="(t31 = tables[11])"
                  :class="`bg-table${t31.status}`"
                  :style="{
                    height: '100%',
                    width: '70%',
                    margin: '0 auto',
                  }"
                  ><h2>{{ t31.tableNumber }}</h2></v-card
                >
              </v-col>
              <!-- Empty -->
              <v-col sm="4" :style="{minHeight: '20vh'}"></v-col>
              <!-- Empty -->
              <v-col sm="4" :style="{minHeight: '20vh'}"></v-col>
            </v-row>
            <!-- T30 -->
            <v-row>
              <!-- Empty -->
              <v-col sm="4" :style="{minHeight: '20vh'}"></v-col>
              <!-- T30 -->
              <v-col sm="8" :style="{minHeight: '20vh'}">
                <v-card
                  v-bind="(t30 = tables[10])"
                  :class="`bg-table${t30.status}`"
                  :style="{
                    height: '70%',
                    width: '80%',
                    margin: '0 auto',
                  }"
                >
                  <h2>{{ t30.tableNumber }}</h2>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <!-- T25 -->
          <v-col sm="2">
            <v-card
              v-bind="(t25 = tables[5])"
              :class="`bg-table${t25.status}`"
              :style="{
                height: '40%',
                width: '70%',
                margin: '0 auto',
                marginTop: '15vh',
              }"
              ><h2>{{ t25.tableNumber }}</h2></v-card
            >
          </v-col>
          <v-col sm="4">
            <!-- Empty -->
            <v-row>
              <v-col cols="12" sm="4" :style="{minHeight: '20vh'}"> </v-col>
              <v-col cols="12" sm="4" :style="{minHeight: '20vh'}"></v-col>
              <v-col cols="12" sm="4" :style="{minHeight: '20vh'}"> </v-col>
            </v-row>
            <!-- T26,27 -->
            <v-row>
              <!-- T26 -->
              <v-col sm="6" :style="{minHeight: '20vh'}">
                <v-card
                  v-bind="(t26 = tables[6])"
                  :class="`bg-table${t26.status}`"
                  :style="{
                    height: '70%',
                    width: '70%',
                    margin: '0 auto',
                  }"
                  ><h2>{{ t26.tableNumber }}</h2></v-card
                >
              </v-col>
              <!-- T27 -->
              <v-col sm="6" :style="{minHeight: '20vh'}">
                <v-card
                  v-bind="(t27 = tables[7])"
                  :class="`bg-table${t27.status}`"
                  :style="{
                    height: '70%',
                    width: '70%',
                    margin: '0 auto',
                  }"
                  ><h2>{{ t27.tableNumber }}</h2></v-card
                >
              </v-col>
            </v-row>
            <!-- Empty -->
            <v-row>
              <v-col :style="{minHeight: '20vh'}"> </v-col>
            </v-row>
            <!-- T29,28 -->
            <v-row>
              <!-- T29 -->
              <v-col sm="6" :style="{minHeight: '20vh'}">
                <v-card
                  v-bind="(t29 = tables[9])"
                  :class="`bg-table${t29.status}`"
                  :style="{
                    height: '70%',
                    width: '100%',
                    margin: '0 auto',
                  }"
                  ><h2>{{ t29.tableNumber }}</h2></v-card
                >
              </v-col>
              <!-- T28 -->
              <v-col sm="6" :style="{minHeight: '20vh'}">
                <v-card
                  v-bind="(t28 = tables[8])"
                  :class="`bg-table${t28.status}`"
                  :style="{
                    height: '70%',
                    width: '100%',
                    margin: '0 auto',
                  }"
                  ><h2>{{ t28.tableNumber }}</h2></v-card
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template #fallback>
      <div>Carregando mesas...</div>
    </template>
  </Suspense>
</template>

<script setup>
  import {defineComponent, ref} from 'vue'

  const props = defineProps({
    tables: {
      type: Array,
      required: true,
      default: () => [],
    },
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
