<template>
  <v-card
    :class="`bg-table${table.status}`"
    :style="{
      height: `${dimensions.h}%`,
      width: `${dimensions.w}%`,
      margin: '0 auto',
    }"
  >
    <v-card-item class="text-center">
      <v-card-title>{{ table.tableNumber }}</v-card-title>
      <v-card-subtitle v-if="table.status !== 'Empty'">
        {{ elapsedTime }} min
      </v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<script setup>
  import {ref, onMounted, onUnmounted, watch} from 'vue'

  const props = defineProps({
    table: {
      type: Object,
      required: true,
    },
    dimensions: {
      type: Object,
      required: true,
    },
  })

  const elapsedTime = ref(0)
  const intervalId = ref(null)

  const lastUpdated = (time) => {
    const now = new Date()
    const lastUpdatedTime = new Date(time)
    if (isNaN(lastUpdatedTime.getTime())) {
      return 0 // Return 0 if the date is invalid
    }
    const diff = now - lastUpdatedTime
    return Math.floor(diff / 1000 / 60)
  }

  const updateElapsedTime = () => {
    if (props.table && props.table.lastUpdated) {
      elapsedTime.value = lastUpdated(props.table.lastUpdated)
    }
  }

  const startInterval = () => {
    // Limpa qualquer intervalo existente
    if (intervalId.value) {
      clearInterval(intervalId.value)
    }
    // Inicia um novo intervalo
    intervalId.value = setInterval(updateElapsedTime, 60000)
  }

  watch(
    () => props.table,
    () => {
      updateElapsedTime() // Atualiza quando a prop table mudar
      startInterval() // Reinicia o intervalo
    },
    {deep: true} // Necessário se você quiser observar mudanças dentro do objeto table
  )

  onMounted(() => {
    updateElapsedTime()
    startInterval()
  })

  onUnmounted(() => {
    if (intervalId.value) {
      clearInterval(intervalId.value)
    }
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
