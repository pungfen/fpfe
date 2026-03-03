import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import Dts from 'unplugin-dts/vite'

import fg from 'fast-glob'

const entry = await fg(fileURLToPath(new URL('./src', import.meta.url)) + '/**')

export default defineConfig({
  build: {
    lib: {
      name: '@pungfe/element',
      entry,
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => (format === 'cjs' ? `${entryName}.cjs` : `${entryName}.js`),
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
    },
    minify: false,
  },
  plugins: [Vue(), Dts()],
})