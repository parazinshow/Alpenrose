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
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <TableComponent
                  :table="tables[12]"
                  :dimensions="{h: 100, w: 60}"
                />
              </v-col>
              <!-- T2 -->
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <TableComponent
                  :table="tables[13]"
                  :dimensions="{h: 80, w: 30}"
                />
              </v-col>
            </v-row>
            <!-- Space between T1 and T14 -->
            <v-row>
              <v-col :style="{minHeight: '25vh'}"></v-col>
            </v-row>
            <!-- T14 and T13 -->
            <v-row>
              <!-- T13 -->
              <v-col sm="4" :style="{minHeight: '15vh'}">
                <TableComponent
                  :table="tables[23]"
                  :dimensions="{h: 100, w: 55}"
                />
              </v-col>
              <!-- T14 -->
              <v-col sm="8" :style="{minHeight: '20vh'}">
                <TableComponent
                  :table="tables[24]"
                  :dimensions="{h: 80, w: 85}"
                />
              </v-col>
            </v-row>
            <!-- T12 and T11 and T150 -->
            <v-row>
              <!-- T150 -->
              <v-col sm="4" :style="{minHeight: '15vh'}">
                <TableComponent
                  :table="tables[25]"
                  :dimensions="{h: 80, w: 50}"
                />
              </v-col>
              <!-- T12 -->
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <TableComponent
                  :table="tables[22]"
                  :dimensions="{h: 100, w: 60}"
                />
              </v-col>
              <!-- T11 -->
              <v-col sm="2" :style="{minHeight: '15vh'}">
                <TableComponent
                  :table="tables[21]"
                  :dimensions="{h: 80, w: 100}"
                />
              </v-col>
            </v-row>
          </v-col>

          <!-- Right side -->
          <v-col sm="6">
            <!-- T4 and T5 -->
            <v-row>
              <!-- T5 -->
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <TableComponent
                  :table="tables[15]"
                  :dimensions="{h: 90, w: 60}"
                />
              </v-col>
              <!-- T4 -->
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <TableComponent
                  :table="tables[14]"
                  :dimensions="{h: 90, w: 60}"
                />
              </v-col>
            </v-row>
            <!-- T6 -->
            <v-row>
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <TableComponent
                  :table="tables[16]"
                  :dimensions="{h: 90, w: 60}"
                />
              </v-col>
            </v-row>
            <!-- T7 -->
            <v-row>
              <v-col sm="6" :style="{minHeight: '15vh'}"></v-col>
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <TableComponent
                  :table="tables[17]"
                  :dimensions="{h: 70, w: 30}"
                />
              </v-col>
            </v-row>
            <!-- T8 -->
            <v-row>
              <v-col sm="6" :style="{minHeight: '15vh'}"> </v-col>
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <TableComponent
                  :table="tables[18]"
                  :dimensions="{h: 90, w: 70}"
                />
              </v-col>
            </v-row>
            <!-- T9 and T10 -->
            <v-row>
              <!-- T10 -->
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <TableComponent
                  :table="tables[20]"
                  :dimensions="{h: 90, w: 60}"
                />
              </v-col>
              <!-- T9 -->
              <v-col sm="6" :style="{minHeight: '15vh'}">
                <TableComponent
                  :table="tables[19]"
                  :dimensions="{h: 70, w: 30}"
                />
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
  import TableComponent from '@/components/TableComponent.vue'

  const props = defineProps({
    tables: {
      type: Array,
      required: true,
      default: () => [],
    },
  })
</script>
