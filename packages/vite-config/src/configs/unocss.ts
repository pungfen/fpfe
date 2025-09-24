import type { Arrayable } from '@fp/shared'
import type { Plugin } from 'vite'

import { pluginUnocss, type PluginUnocssOptions } from '../plugins'

export type UnocssOptions = PluginUnocssOptions

export const unocss = (options: UnocssOptions = {}): Arrayable<Plugin> => {
  return pluginUnocss({
    ...options
  })
}
