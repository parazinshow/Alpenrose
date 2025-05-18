<template>
  <v-container
    :style="{
      backgroundColor: '#1a1918',
      maxWidth: '100vw',
      height: '100vh',
    }"
  >
    <!-- sokd -->
    <v-container
      :style="{
        maxWidth: '80vw',
        maxHeight: '80vh',
      }"
    >
      <v-row>
        <v-col sm="6">
          <v-row>
            <v-col sm="4" :style="{ minHeight: '20vh' }">
              <v-card
                :style="{
                  backgroundColor: mesas[0].cor,
                  height: '70%',
                  width: '70%',
                  margin: '0 auto',
                }"
              ></v-card>
            </v-col>
            <v-col sm="4" :style="{ minHeight: '20vh' }">
              <v-card
                :style="{
                  backgroundColor: mesas[0].cor,
                  height: '70%',
                  width: '70%',
                  margin: '0 auto',
                }"
              ></v-card>
            </v-col>
            <v-col sm="4" :style="{ minHeight: '20vh' }">
              <v-card
                :style="{
                  backgroundColor: mesas[0].cor,
                  height: '70%',
                  width: '70%',
                  margin: '0 auto',
                }"
              ></v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="4" :style="{ minHeight: '20vh' }">
              <v-card
                :style="{
                  backgroundColor: mesas[0].cor,
                  height: '70%',
                  width: '70%',
                  margin: '0 auto',
                }"
              ></v-card>
            </v-col>
            <v-col sm="4" :style="{ minHeight: '20vh' }"></v-col>
            <v-col sm="4" :style="{ minHeight: '20vh' }">
              <v-card
                :style="{
                  backgroundColor: mesas[0].cor,
                  height: '100%',
                  width: '70%',
                  margin: '0 auto',
                }"
              ></v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="4" :style="{ minHeight: '20vh' }">
              <v-card
                :style="{
                  backgroundColor: mesas[0].cor,
                  height: '100%',
                  width: '70%',
                  margin: '0 auto',
                }"
              ></v-card>
            </v-col>
            <v-col sm="4" :style="{ minHeight: '20vh' }"></v-col>
            <v-col sm="4" :style="{ minHeight: '20vh' }"></v-col>
          </v-row>
          <v-row>
            <v-col sm="4" :style="{ minHeight: '20vh' }"></v-col>
            <v-col sm="8" :style="{ minHeight: '20vh' }">
              <v-card
                :style="{
                  backgroundColor: mesas[0].cor,
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
            :style="{
              backgroundColor: mesas[0].cor,
              height: '40%',
              width: '70%',
              margin: '0 auto',
              marginTop: '15vh',
            }"
          ></v-card>
        </v-col>
        <v-col sm="4">
          <v-row>
            <v-col cols="12" sm="4" :style="{ minHeight: '20vh' }"> </v-col>
            <v-col cols="12" sm="4" :style="{ minHeight: '20vh' }"></v-col>
            <v-col cols="12" sm="4" :style="{ minHeight: '20vh' }"> </v-col>
          </v-row>
          <v-row>
            <v-col sm="6" :style="{ minHeight: '20vh' }">
              <v-card
                :style="{
                  backgroundColor: mesas[0].cor,
                  height: '70%',
                  width: '70%',
                  margin: '0 auto',
                }"
              ></v-card>
            </v-col>
            <v-col sm="6" :style="{ minHeight: '20vh' }">
              <v-card
                :style="{
                  backgroundColor: mesas[0].cor,
                  height: '70%',
                  width: '70%',
                  margin: '0 auto',
                }"
              ></v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col :style="{ minHeight: '20vh' }"> </v-col>
          </v-row>
          <v-row>
            <v-col sm="6" :style="{ minHeight: '20vh' }">
              <v-card
                :style="{
                  backgroundColor: mesas[0].cor,
                  height: '70%',
                  width: '100%',
                  margin: '0 auto',
                }"
              ></v-card>
            </v-col>
            <v-col sm="6" :style="{ minHeight: '20vh' }">
              <v-card
                :style="{
                  backgroundColor: mesas[0].cor,
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
  </v-container>
</template>

<script>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'PatioLayout',
    setup() {
      // Definição das mesas com cores
      const mesas = ref([
        { cor: '#D8BFD8' }, // Roxo Claro
        { cor: '#D3D3D3' }, // Cinza Claro
        { cor: '#696969' }, // Cinza Escuro
        { cor: '#87CEEB' }, // Azul Claro
        { cor: '#00008B' }, // Azul Escuro
      ])

      // Função para verificar se precisa de mais mesas (exemplo)
      const verificarMesas = () => {
        const totalMesas = mesas.value.length
        if (totalMesas < 10) {
          alert('Considerar adicionar mais mesas!')
        } else {
          alert('Número suficiente de mesas!')
        }
      }

      // Chama a verificação ao montar o componente
      verificarMesas()

      return { mesas }
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
