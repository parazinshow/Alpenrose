<template>
  <v-container
    class="bg-bgColor"
    :style="{
      maxWidth: '100vw',
      height: '100vh',
    }"
  >
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <h1 class="text-center">Alpenrose tables</h1>
        <v-tabs v-model="tab" align-tabs="center">
          <v-tab value="frontPatio">Front patio</v-tab>
          <v-tab value="inside">Inside</v-tab>
          <v-tab value="backPatio">Back patio</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col>
        <v-card-text>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="frontPatio">
              <FrontPatioComponent v-if="tables" :tables="tables" />
            </v-tabs-window-item>

            <v-tabs-window-item value="inside">
              <InsideComponent v-if="tables" :tables="tables" />
            </v-tabs-window-item>

            <v-tabs-window-item value="backPatio">
              <BackPatioComponent v-if="tables" :tables="tables"/>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import FrontPatioComponent from '@/components/FrontPatioComponent.vue'
  import BackPatioComponent from '@/components/BackPatioComponent.vue'
  import InsideComponent from '@/components/InsideComponent.vue'
  import {ref, onMounted, onUnmounted} from 'vue'
  import {io} from 'socket.io-client'

  // Configurações do Socket.IO
  const socket = io('http://localhost:5000', {
    transports: ['websocket', 'polling'], // Ensure fallback to polling if WebSocket fails
  })

  // Variable
  const tables = ref([])
  const tab = ref(null)
  const isConnected = ref(false)

  // Conectar ao Socket.IO e escutar eventos
  onMounted(() => {
    socket.on('connect', () => {
      console.log('Conectado ao servidor Socket.IO')
      isConnected.value = true // Marca como conectado
    })

    socket.on('connect_error', (error) => {
      console.error('Erro de conexão com Socket.IO:', error)
      isConnected.value = false
    })

    socket.on('disconnect', () => {
      console.log('Desconectado do servidor Socket.IO')
      isConnected.value = false // Marca como desconectado
    })

    socket.on('initialState', (data) => {
      console.log('Estado inicial recebido:', data)
      tables.value = data
    })

    socket.on('tableUpdate', (data) => {
      console.log('Atualização de mesas recebida:', data)
      tables.value = data
    })
  })

  // Desconectar o Socket.IO ao destruir o componente
  onUnmounted(() => {
    socket.off('connect')
    socket.off('connect_error')
    socket.off('disconnect')
    socket.off('initialState')
    socket.off('tableUpdate')
    socket.disconnect()
  })
</script>

<style scoped>
  .text-center {
    text-align: center;
  }
</style>
