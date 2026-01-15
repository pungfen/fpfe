import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import vue from 'unplugin-vue/vite'
import autoImport from 'unplugin-auto-import/vite'
import dts from 'unplugin-dts/vite'

import pkg from './package.json'

const dependencies = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
]

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index'
    },
    minify: false,
    rollupOptions: {
      external(source) {
        return dependencies.some(
          (dep) => source === dep || source.startsWith(`${dep}/`)
        )
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    sourcemap: true
  },
  define: {
    __VERSION__: JSON.stringify(pkg.version)
  },
  plugins: [
    vue(),
    autoImport({ dirs: ['./src/plugins'], imports: ['@vueuse/core', 'vue'] }),
    dts({ tsconfigPath: './tsconfig.ui.json', processor: 'vue' })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
