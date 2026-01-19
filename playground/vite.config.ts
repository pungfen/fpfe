import { fileURLToPath, URL } from 'node:url'

import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import { defineConfig } from 'vite'

const futp = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  optimizeDeps: { exclude: ['@fpfe/theme', '@fpfe/ui'] },
  plugins: [
    VueRouter(),
    Vue(),
    VueJsx(),
    Tailwindcss(),
    Icons({ autoInstall: true }),
    AutoImport({
      dirs: ['./src/plugins'],
      imports: ['@vueuse/core', 'vue', VueRouterAutoImports],
      resolvers: [ElementPlusResolver(), IconsResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver(), IconsResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': futp('./src'),
      '@fpfe/theme': futp('../packages/theme/src'),
      '@fpfe/ui': futp('../packages/ui/src')
    }
  }
})

