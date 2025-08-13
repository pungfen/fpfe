import { pluginVue, type PluginVueOptions } from '../plugins'

import type { Arrayable } from '@fp/shared'
import type { Plugin } from 'vite'

export type VueOptions = PluginVueOptions

export const vue = (options: VueOptions = {}): Arrayable<Plugin> => {
  return pluginVue(options)
}
