import { createApp } from 'vue'

import App from '@/app.vue'

const app = createApp(App)

export default {
  mount() {
    app.mount('#app')
  },

  unmount() {}
}
