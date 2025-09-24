import { type Plugin } from 'vite'

import { type Arrayable } from '../types'
import { interopDefault } from '../utils'

export const vueRouter = async (): Promise<Arrayable<Plugin>> => {
  const pluginVueRouter = await interopDefault(import('unplugin-vue-router/vite'))
  return pluginVueRouter({ pathParser: { dotNesting: true } })
}
