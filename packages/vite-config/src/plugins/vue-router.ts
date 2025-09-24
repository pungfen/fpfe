import { type Arrayable, interopDefault } from '@fp/shared'
import type { Plugin } from 'vite'

export const vueRouter = async (): Promise<Arrayable<Plugin>> => {
  const pluginVueRouter = await interopDefault(import('unplugin-vue-router/vite'))
  return {
    name: 'vue-router',
    ...pluginVueRouter({ pathParser: { dotNesting: true } })
  }
}
