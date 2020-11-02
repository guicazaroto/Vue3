import { createApp } from 'vue'
import App from './App.vue'

if (process.env.NODE_ENV === "development") {
  // You can't use import in a conditional so we're using require() so no
  // Mirage JS code will ever reach your production build.
  require('./miragejs/server').makeServer();
}

createApp(App).mount('#app')
