import '@/tailwind.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import '@fpfe/element/style.css'

import { createApp } from 'vue'

import App from './app.vue'

const app = createApp(App)

app.use(router)
app.mount('#app')
