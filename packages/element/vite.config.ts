import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import {
  ElementPlusResolver,
  VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, Environment } from 'vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Dts from 'vite-plugin-dts'

const futp = (path: string) => fileURLToPath(new URL(path, import.meta.url))

const state = new Map<Environment, { count: number }>()

export default defineConfig({
  build: {
    cssCodeSplit: false,
    lib: {
      entry: futp('src/index.ts'),
      fileName: 'index',
      formats: ['es']
    },
    minify: false,
    rollupOptions: {
      external: ['element-plus', 'vue']
    }
  },
  plugins: [
    Vue(),
    VueJsx(),
    AutoImport({
      dirs: ['./src/internal'],
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
        ElementPlusResolver(),
        IconsResolver(),
        VueUseComponentsResolver()
      ]
    }),
    Icons(),
    Dts({}),
    {
      name: 'count-transformed-modules',
      perEnvironmentStartEndDuringDev: true,
      buildStart() {
        state.set(this.environment, { count: 0 })
      },
      transform(id) {
        state.get(this.environment)!.count++
      },
      buildEnd() {
        console.log(
          'xx',
          this.environment.name,
          state.get(this.environment)?.count
        )
      }
    }
  ],
  resolve: { alias: { '@': futp('src') } }
})
