import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'

import Tailwindcss from '@tailwindcss/vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'vue-router/vite'

import { VueRouterAutoImports } from 'vue-router/unplugin'

export default defineConfig({
  plugins: [
    VueRouter(),
    Vue(),
    VueJsx(),
    Tailwindcss(),
    AutoImport({
      imports: ['vue', 'pinia', VueRouterAutoImports],
      dirs: ['./src/composables', './src/plugins']
    }),
    Components()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})