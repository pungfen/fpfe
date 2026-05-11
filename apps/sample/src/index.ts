import { createApp } from 'vue';

import { createRouter, createMemoryHistory } from 'vue-router';

import App from '@/app.vue';

const router = createRouter({ history: createMemoryHistory(), routes: [] });

const app = createApp(App);

app.use(router);
