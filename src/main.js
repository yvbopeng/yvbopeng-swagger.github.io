import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import routes from '~pages'
import App from './App.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
const app = createApp(App)

app.use(router)
app.mount('#app')
