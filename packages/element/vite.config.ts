import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, type Plugin } from 'vite'
import Dts from 'vite-plugin-dts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
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
  plugins: [
    Vue(),
    VueJsx(),
    AutoImport({ imports: ['vue'] }),
    Components({
      dirs: [path.resolve(__dirname, 'src/basic')],
      resolvers: [ElementPlusResolver({ importStyle: 'css' })]
    }) as Plugin,
    Dts({})
  ],
  resolve: { alias: { '@': fileURLToPath(new URL('src', import.meta.url)) } }
})
