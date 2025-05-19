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
                <TableComponent
                  :table="tables[0]"
                  :dimensions="{h: 70, w: 70}"
                />
              </v-col>
              <!-- T21 -->
              <v-col sm="4" :style="{minHeight: '20vh'}">
                <TableComponent
                  :table="tables[1]"
                  :dimensions="{h: 70, w: 70}"
                />
              </v-col>
              <!-- T22 -->
              <v-col sm="4" :style="{minHeight: '20vh'}">
                <TableComponent
                  :table="tables[2]"
                  :dimensions="{h: 70, w: 70}"
                />
              </v-col>
            </v-row>
            <!-- T23,24 -->
            <v-row>
              <!-- T23 -->
              <v-col sm="4" :style="{minHeight: '20vh'}">
                <TableComponent
                  :table="tables[3]"
                  :dimensions="{h: 70, w: 70}"
                />
              </v-col>
              <!-- Empty -->
              <v-col sm="4" :style="{minHeight: '20vh'}"></v-col>
              <!-- T24 -->
              <v-col sm="4" :style="{minHeight: '20vh'}">
                <TableComponent
                  :table="tables[4]"
                  :dimensions="{h: 100, w: 70}"
                />
              </v-col>
            </v-row>
            <!-- T31 -->
            <v-row>
              <!-- T31 -->
              <v-col sm="4" :style="{minHeight: '20vh'}">
                <TableComponent
                  :table="tables[11]"
                  :dimensions="{h: 100, w: 70}"
                />
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
                <TableComponent
                  :table="tables[10]"
                  :dimensions="{h: 70, w: 80}"
                />
              </v-col>
            </v-row>
          </v-col>
          <!-- T25 -->
          <v-col sm="2">
            <TableComponent
              :table="tables[5]"
              :dimensions="{h: 40, w: 70}"
              :style="{marginTop: '15vh'}"
            />
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
                <TableComponent
                  :table="tables[6]"
                  :dimensions="{h: 70, w: 70}"
                />
              </v-col>
              <!-- T27 -->
              <v-col sm="6" :style="{minHeight: '20vh'}">
                <TableComponent
                  :table="tables[7]"
                  :dimensions="{h: 70, w: 70}"
                />
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
                <TableComponent
                  :table="tables[9]"
                  :dimensions="{h: 70, w: 100}"
                />
              </v-col>
              <!-- T28 -->
              <v-col sm="6" :style="{minHeight: '20vh'}">
                <TableComponent
                  :table="tables[8]"
                  :dimensions="{h: 70, w: 100}"
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
