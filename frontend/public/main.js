import {createApp} from 'vue'
import App from './App.vue'
import {createVuetify} from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          tableEmpty: '#929499',
          tableSeated: '#b06ec8',
          tableAppetizers: '#c5c5ed',
          tableEntree: '#526ed7',
          tableDesserts: '#78bbd8',
          bgColor: '#2e333e',
        },
      },
    },
  },
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
