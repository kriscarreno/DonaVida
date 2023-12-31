import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import Antd from 'ant-design-vue'
import App from './App.vue'

import 'ant-design-vue/dist/reset.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(Antd)
app.use(router)
app.mount('#app')
