import type { VitePlugin } from '../types'

export const PLUGIN_NAME = '@fpfe/vite/app'

export const App = (): VitePlugin => {
  return {
    name: PLUGIN_NAME
  }
}
