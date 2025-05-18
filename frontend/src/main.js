import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          empty: '#ffffff',
          seated: '#ffff99',
          appetizers: '#ffcc99',
          entree: '#ff9999',
          desserts: '#cc99ff',
          checkdroped: '#99ccff',
          paid: '#99ff99'
        }
      }
    }
  }
});

const app = createApp(App);
app.use(vuetify);
app.mount('#app');