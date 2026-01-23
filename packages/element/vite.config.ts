import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import {
  ElementPlusResolver,
  VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
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
      external: ['element-plus', 'vue'],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const segments = id.toString().split('node_modules/')[1].split('/')
            return segments[1].split('@')[0] ?? 'vendor'
          }
        }
      }
    }
  },
  plugins: [
    Vue(),
    VueJsx(),
    AutoImport({
      dirs: ['./src/basic', './src/internal'],
      imports: ['vue', '@vueuse/core'],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver(),
        VueUseComponentsResolver()
      ]
    }),
    Components({
      dirs: ['./src/basic'],
      resolvers: [
        ElementPlusResolver({ importStyle: false }),
        IconsResolver(),
        VueUseComponentsResolver()
      ]
    }),
    Icons(),
    Dts({ tsconfigPath: './tsconfig.lib.json' })
  ]
})
