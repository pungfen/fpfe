import { defineConfig } from 'vitest/config'

import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  test: {
    projects: ['packages/element']
  },
  resolve: {
    extensions: ['.vue']
  }
})