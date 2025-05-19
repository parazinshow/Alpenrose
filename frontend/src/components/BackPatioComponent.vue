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
        <!-- T62, 63, 64, 65 -->
        <v-row :style="{minHeight: '25vh'}">
          <!-- T62 -->
          <v-col sm="3">
            <TableComponent
              :table="tables[28]"
              :dimensions="{h: 80, w: 55}"
              class="round-table"
            />
          </v-col>
          <!-- T63 -->
          <v-col sm="3">
            <TableComponent :table="tables[29]" :dimensions="{h: 100, w: 40}" />
          </v-col>
          <!-- T64 -->
          <v-col sm="3">
            <TableComponent :table="tables[30]" :dimensions="{h: 65, w: 85}" />
          </v-col>
          <!-- T65 -->
          <v-col sm="3" :style="{minHeight: '20vh'}">
            <TableComponent
              :table="tables[31]"
              :dimensions="{h: 100, w: 35}"
              :style="{
                transform: 'rotate(-45deg)',
              }"
            />
          </v-col>
        </v-row>
        <!-- T61, 69, 70 -->
        <v-row :style="{minHeight: '25vh'}">
          <!-- T61 -->
          <v-col sm="2">
            <TableComponent
              :table="tables[27]"
              :dimensions="{h: 80, w: 80}"
              class="round-table"
            />
          </v-col>
          <v-col sm="1"></v-col>
          <!-- T69 -->
          <v-col sm="3">
            <TableComponent
              :table="tables[35]"
              :dimensions="{h: 80, w: 55}"
              class="round-table"
            />
          </v-col>
          <!-- T70 -->
          <v-col sm="2">
            <TableComponent
              :table="tables[36]"
              :dimensions="{h: 80, w: 85}"
              class="round-table"
            />
          </v-col>
          <v-col sm="4"></v-col>
        </v-row>

        <!-- T60, 68, 67, 66 -->
        <v-row :style="{minHeight: '25vh'}">
          <!-- T60 -->
          <v-col sm="4">
            <TableComponent :table="tables[26]" :dimensions="{h: 70, w: 75}" />
          </v-col>
          <!-- Space for the door -->
          <v-col sm="1"></v-col>
          <!-- T68 -->
          <v-col sm="2">
            <TableComponent :table="tables[34]" :dimensions="{h: 100, w: 60}" />
          </v-col>
          <!-- T67 -->
          <v-col sm="3">
            <TableComponent :table="tables[33]" :dimensions="{h: 60, w: 70}" />
          </v-col>
          <!-- T66 -->
          <v-col sm="2">
            <TableComponent
              :table="tables[32]"
              :dimensions="{h: 60, w: 70}"
              class="round-table"
            />
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

<style scoped>
  .round-table {
    border-radius: 100%;
  }
  .v-row {
    padding: 0px;
  }
</style>
