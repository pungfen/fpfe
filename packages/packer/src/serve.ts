import type { Config } from './config'
import process from 'node:process'

import { createServer, mergeConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'
import Tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export const serve = async (config: Config) => {
  const { vue: enableVue = true } = config

  try {
    const server = await createServer({
      plugins: [
        VueRouter(),
        Vue(),
        VueJsx(),
        Tailwindcss(),
        Icons(),
        AutoImport({}),
        Components()
      ]
    })

    if (!server.httpServer) {
      throw new Error('HTTP server not available')
    }

    await server.listen()
  } catch (e) {
    process.exit(1)
  }
}

