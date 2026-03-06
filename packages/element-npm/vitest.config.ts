import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineProject } from 'vitest/config'

import Vue from 'unplugin-vue/vite'
import VueJsx from 'unplugin-vue-jsx/vite'

const workspaceRoot = fileURLToPath(new URL('../../', import.meta.url))

export default defineProject({
  plugins: [Vue(), VueJsx()],
  resolve: {
    alias: {
      '@fpfe/element': resolve(workspaceRoot, 'packages/element'),
      vue: 'vue/dist/vue.esm-bundler.js'
    },
    dedupe: ['vue', 'element-plus']
  },
  test: {
    exclude: ['**/node_modules/**']
  }
})