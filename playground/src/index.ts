// oxlint-disable-next-line import/no-unassigned-import
import '@/assets/tailwind.css'

import App from '@/app.vue'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')