import { type Plugin } from 'vite'
import { type Arrayable, interopDefault } from '@fp/shared'

export const vue = async (): Promise<Arrayable<Plugin>> => {
  const pluginVue = await interopDefault(import('@vitejs/plugin-vue'))
  return pluginVue({})
}

export const vueJsx = async (): Promise<Arrayable<Plugin>> => {
  const pluginVueJsx = await interopDefault(import('@vitejs/plugin-vue-jsx'))
  return pluginVueJsx()
}
