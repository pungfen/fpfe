import { Arrayable, Awaitable } from '@fp/shared'
import { InlineConfig, type Plugin } from 'vite'

import { autoImport, autoImportComponents, vue, vueJsx, vueRouter } from './plugins'

const combine = async (...ps: Awaitable<Arrayable<Plugin>>[]): Promise<Plugin[]> => {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const resolved = await Promise.all(ps)
  return resolved.flat()
}

export const defineConfig = async (config: {
  elementPlus?: boolean
  mode?: 'build' | 'serve'
  tailwindcss?: boolean
  type?: 'app' | 'lib'
  unocss?: boolean
  vue?: boolean
  vueJsx?: boolean
} = {}) => {
  const { elementPlus: enableElementPlus, vue: enableVue, vueJsx: enableVueJsx } = config

  const plugins: Plugin[] = []

  if (enableVue || enableVueJsx) {
    plugins.push(...await combine(vueRouter(), autoImport({ elementPlusResolver: enableElementPlus }), autoImportComponents({ elementPlusResolver: enableElementPlus })))
  }

  if (enableVue) {
    plugins.push(...await combine(vue()))
  }

  if (enableVueJsx) {
    plugins.push(...await combine(vueJsx()))
  }

  const inlineConfig: InlineConfig = {
    plugins
  }

  return inlineConfig
}
