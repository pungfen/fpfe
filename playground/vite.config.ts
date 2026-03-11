import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'

import Tailwindcss from '@tailwindcss/vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'vue-router/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { VueRouterAutoImports } from 'vue-router/unplugin'

const XResolve: Record<string, string[]> = {
  XButton: ['element-plus/es/components/button/style/css'],
  XTable: ['element-plus/es/components/table/style/css']
}

export default defineConfig({
  plugins: [
    VueRouter({
      async extendRoute(route) {
        if (route.name.toString().startsWith('/element')) {
          route.addToMeta({ layout: 'element' })
        }
      }
    }),
    Vue(),
    VueJsx(),
    Tailwindcss(),
    AutoImport({
      imports: ['vue', 'pinia', VueRouterAutoImports],
      dirs: ['./src/composables', './src/plugins']
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        {
          type: 'component',
          resolve: (name) => {
            if (name in XResolve) {
              return {
                name,
                from: '@fpfe/element',
                sideEffects: XResolve[name]
              }
            }
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})