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
          <!-- Left side -->
          <v-col sm="6">
            <!-- T1 and T2 -->
            <v-row>
              <!-- T1 -->
              <v-col sm="6" :style="{minHeight: '15vh'}"
                ><v-card
                  v-bind="(t1 = tables[12])"
                  :class="`bg-table${t1.status}`"
                  :style="{
                    height: '100%',
                    width: '60%',
                    margin: '0 auto',
                  }"
                  ><h2>{{ t1.tableNumber }}</h2>
                </v-card></v-col
              >
              <!-- T2 -->
              <v-col sm="6" :style="{minHeight: '15vh'}"
                ><v-card
                  v-bind="(t2 = tables[13])"
                  :class="`bg-table${t2.status}`"
                  :style="{
                    height: '80%',
                    width: '30%',
                    margin: '0 auto',
                  }"
                  ><h2>{{ t2.tableNumber }}</h2></v-card
                ></v-col
              >
            </v-row>
            <!-- Space between T1 and T14 -->
            <v-row>
              <v-col :style="{minHeight: '25vh'}"></v-col>
            </v-row>
            <!-- T14 and T13 -->
            <v-row>
              <!-- T13 -->
              <v-col sm="4" :style="{minHeight: '15vh'}">
                <v-card
                  v-bind="(t13 = tables[23])"
                  :class="`bg-table${t13.status}`"
                  :style="{
                    height: '100%',
                    width: '55%',
                    margin: '0 auto',
                  }"
                >
                  <h2>{{ t13.tableNumber }}</h2>
                </v-card>
              </v-col>
              <!-- T14 -->
              <v-col sm="8" :style="{minHeight: '20vh'}">
                <v-card
                  v-bind="(t14 = tables[24])"
                  :class="`bg-table${t14.status}`"
                  :style="{
                    height: '80%',
                    width: '85%',
                    margin: '0 auto',
                  }"
                >
                  <h2>{{ t14.tableNumber }}</h2>
                </v-card>
              </v-col>
            </v-row>
            <!-- T12 and T11 and T150 -->
            <v-row>
              <!-- T150 -->
              <v-col sm="4" :style="{minHeight: '15vh'}">
                <v-card
                  v-bind="(t150 = tables[25])"
                  :class="`bg-table${t150.status}`"
                  :style="{
                    height: '80%',
                    width: '50%',
                    margin: '0 auto',
                  }"
                >
                  <h2>{{ t150.tableNumber }}</h2>
                </v-card>
              </v-col>
              <!-- T12 -->
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <v-card
                  v-bind="(t12 = tables[22])"
                  :class="`bg-table${t12.status}`"
                  :style="{
                    height: '100%',
                    width: '60%',
                    margin: '0 auto',
                  }"
                >
                  <h2>{{ t12.tableNumber }}</h2>
                </v-card>
              </v-col>
              <!-- T11 -->
              <v-col sm="2" :style="{minHeight: '15vh'}">
                <v-card
                  v-bind="(t11 = tables[21])"
                  :class="`bg-table${t11.status}`"
                  :style="{
                    height: '80%',
                    width: '100%',
                    margin: '0 auto',
                  }"
                >
                  <h2>{{ t11.tableNumber }}</h2>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <!-- Right side -->
          <v-col sm="6">
            <!-- T4 and T5 -->
            <v-row>
              <!-- T5 -->
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <v-card
                  v-bind="(t5 = tables[15])"
                  :class="`bg-table${t5.status}`"
                  :style="{
                    height: '90%',
                    width: '60%',
                    margin: '0 auto',
                  }"
                >
                  <h2>{{ t5.tableNumber }}</h2>
                </v-card>
              </v-col>
              <!-- T4 -->
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <v-card
                  v-bind="(t4 = tables[14])"
                  :class="`bg-table${t4.status}`"
                  :style="{
                    height: '90%',
                    width: '60%',
                    margin: '0 auto',
                  }"
                >
                  <h2>{{ t4.tableNumber }}</h2>
                </v-card>
              </v-col>
            </v-row>
            <!-- T6 -->
            <v-row>
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <v-card
                  v-bind="(t6 = tables[16])"
                  :class="`bg-table${t6.status}`"
                  :style="{
                    height: '90%',
                    width: '60%',
                    margin: '0 auto',
                  }"
                >
                  <h2>{{ t6.tableNumber }}</h2>
                </v-card>
              </v-col>
            </v-row>
            <!-- T7 -->
            <v-row>
              <v-col sm="6" :style="{minHeight: '15vh'}"></v-col>
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <v-card
                  v-bind="(t7 = tables[17])"
                  :class="`bg-table${t7.status}`"
                  :style="{
                    height: '70%',
                    width: '30%',
                    margin: '0 auto',
                  }"
                >
                  <h2>{{ t7.tableNumber }}</h2>
                </v-card>
              </v-col>
            </v-row>
            <!-- T8 -->
            <v-row>
              <v-col sm="6" :style="{minHeight: '15vh'}">
              </v-col>
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <v-card
                  v-bind="(t8 = tables[18])"
                  :class="`bg-table${t8.status}`"
                  :style="{
                    height: '90%',
                    width: '70%',
                    margin: '0 auto',
                  }"
                  >
                  <h2>{{ t8.tableNumber }}</h2>
                </v-card>
              </v-col>
            </v-row>
            <!-- T9 and T10 -->
            <v-row>
              <!-- T10 -->
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <v-card
                  v-bind="(t10 = tables[20])"
                  :class="`bg-table${t10.status}`"
                  :style="{
                    height: '90%',
                    width: '60%',
                    margin: '0 auto',
                  }"
                >
                  <h2>{{ t10.tableNumber }}</h2>
                </v-card>
              </v-col>
              <!-- T9 -->
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <v-card
                  v-bind="(t9 = tables[19])"
                  :class="`bg-table${t9.status}`"
                  :style="{
                    height: '70%',
                    width: '30%',
                    margin: '0 auto',
                  }"
                >
                  <h2>{{ t9.tableNumber }}</h2>
                </v-card>
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
  .v-row {
    padding: 0px;
  }
</style>
