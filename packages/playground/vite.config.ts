import Tailwindcss from '@tailwindcss/vite'
import Vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [VueRouter({ pathParser: { dotNesting: true } }), Vue(), AutoImport({ imports: ['vue', VueRouterAutoImports] }), Tailwindcss()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } }
})
