import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Dts from 'vite-plugin-dts'

const futp = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: futp('src/index.ts'),
      fileName: 'index',
      formats: ['es']
    },
    minify: false,
    rollupOptions: {
      external: ['vue']
    }
  },
  plugins: [
    AutoImport({ imports: ['vue', '@vueuse/core'] }),
    Dts({ tsconfigPath: 'tsconfig.lib.json' })
  ]
})
