import { fileURLToPath } from 'node:url'

import { defineConfig } from './src'
const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  mode: 'build',
  root,
  type: 'lib'
})
