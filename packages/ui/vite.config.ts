import type { Plugin } from 'vite'

import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import Dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es']
    },
    minify: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        }
      }
    }
  },
  plugins: [Vue(), VueJsx(), AutoImport({ imports: ['vue'] }) as Plugin, Dts({ include: ['auto-imports.d.ts', 'utils.d.ts', 'src'] })],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } }
})
