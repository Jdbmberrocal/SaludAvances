import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

import.meta.env.VUE_APP_API_URL

axios.defaults.baseURL = "http://127.0.0.1:8000/api"
axios.interceptors.request.use(function (config) {
//   config.headers['X-Binarybox-Api-Key'] = process.env.VUE_APP_API_KEY;
  return config;
});
  

import './assets/index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
