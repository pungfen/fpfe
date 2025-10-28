import { defineConfig } from '@fpfe/vite-config'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  entry: 'src/index.ts',
  root,
  tailwindcss: true,
  type: 'app',
  vue: true
})
