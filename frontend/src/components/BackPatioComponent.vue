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
            <v-card
              v-bind="(t62 = tables[28])"
              :class="`bg-table${t62.status}`"
              class="round-table"
              :style="{
                height: '15vh',
                width: '8vw',
                margin: '0 auto',
              }"
            >
              <h2>{{ t62.tableNumber }}</h2>
            </v-card>
          </v-col>
          <!-- T63 -->
          <v-col sm="3">
            <v-card
              v-bind="(t63 = tables[29])"
              :class="`bg-table${t63.status}`"
              :style="{
                height: '100%',
                width: '40%',
                margin: '0 auto',
              }"
            >
              <h2>{{ t63.tableNumber }}</h2>
            </v-card>
          </v-col>
          <!-- T64 -->
          <v-col sm="3">
            <v-card
              v-bind="(t64 = tables[30])"
              :class="`bg-table${t64.status}`"
              :style="{
                height: '65%',
                width: '85%',
                margin: '0 auto',
              }"
            >
              <h2>{{ t64.tableNumber }}</h2>
            </v-card>
          </v-col>
          <!-- T65 -->
          <v-col sm="3" :style="{minHeight: '20vh'}">
            <v-card
              v-bind="(t65 = tables[31])"
              :class="`bg-table${t65.status}`"
              :style="{
                height: '100%',
                width: '35%',
                margin: '0 auto',
                transform: 'rotate(-45deg)',
              }"
            >
              <h2>{{ t65.tableNumber }}</h2>
            </v-card>
          </v-col>
        </v-row>
        <!-- T61, 69, 70 -->
        <v-row :style="{minHeight: '25vh'}">
          <!-- T61 -->
          <v-col sm="2">
            <v-card
              v-bind="(t61 = tables[27])"
              :class="`bg-table${t61.status}`"
              class="round-table"
              :style="{
                height: '15vh',
                width: '8vw',
                margin: '0 auto',
              }"
            >
              <h2>{{ t61.tableNumber }}</h2>
            </v-card>
          </v-col>
          <v-col sm="1"></v-col>
          <!-- T69 -->
          <v-col sm="3">
            <v-card
              v-bind="(t69 = tables[35])"
              :class="`bg-table${t69.status}`"
              class="round-table"
              :style="{
                height: '15vh',
                width: '8vw',
                margin: '0 auto',
              }"
            >
              <h2>{{ t69.tableNumber }}</h2>
            </v-card>
          </v-col>
          <!-- T70 -->
          <v-col sm="2">
            <v-card
              v-bind="(t70 = tables[36])"
              :class="`bg-table${t70.status}`"
              class="round-table"
              :style="{
                height: '15vh',
                width: '8vw',
                margin: '0 auto',
              }"
            >
              <h2>{{ t70.tableNumber }}</h2>
            </v-card>
          </v-col>
          <v-col sm="4"></v-col>
        </v-row>

        <!-- T60, 68, 67, 66 -->
        <v-row :style="{minHeight: '25vh'}">
          <!-- T60 -->
          <v-col sm="4">
            <v-card
              v-bind="(t60 = tables[26])"
              :class="`bg-table${t60.status}`"
              class="bg-tableEmpty"
              :style="{
                height: '70%',
                width: '75%',
                margin: '0 auto',
              }"
            >
              <h2>{{ t60.tableNumber }}</h2>
            </v-card>
          </v-col>
          <!-- Space for the door -->
          <v-col sm="1"></v-col>
          <!-- T68 -->
          <v-col sm="2">
            <v-card
              v-bind="(t68 = tables[34])"
              :class="`bg-table${t68.status}`"
              class="bg-tableEmpty"
              :style="{
                height: '100%',
                width: '60%',
                margin: '0 auto',
              }"
            >
              <h2>{{ t68.tableNumber }}</h2>
            </v-card>
          </v-col>
          <!-- T67 -->
          <v-col sm="3">
            <v-card
              v-bind="(t67 = tables[33])"
              :class="`bg-table${t67.status}`"
              class="bg-tableEmpty"
              :style="{
                height: '60%',
                width: '70%',
                margin: '0 auto',
              }"
            >
              <h2>{{ t67.tableNumber }}</h2>
            </v-card>
          </v-col>
          <!-- T66 -->
          <v-col sm="2">
            <v-card
              v-bind="(t66 = tables[32])"
              :class="`bg-table${t66.status}`"
              class="round-table"
              :style="{
                height: '60%',
                width: '70%',
                margin: '0 auto',
              }"
            >
              <h2>{{ t66.tableNumber }}</h2>
            </v-card>
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
  .round-table {
    border-radius: 100%;
  }
  .v-row {
    padding: 0px;
  }
</style>
