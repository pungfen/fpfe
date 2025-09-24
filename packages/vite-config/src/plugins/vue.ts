import { type Plugin } from 'vite'

import { type Arrayable } from '../types'
import { interopDefault } from '../utils'

export const vue = async (): Promise<Arrayable<Plugin>> => {
  const pluginVue = await interopDefault(import('@vitejs/plugin-vue'))
  return pluginVue({})
}

export const vueJsx = async (): Promise<Arrayable<Plugin>> => {
  const pluginVueJsx = await interopDefault(import('@vitejs/plugin-vue-jsx'))
  return pluginVueJsx()
}
