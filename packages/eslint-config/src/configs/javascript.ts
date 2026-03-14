import js from '@eslint/js'

import { type Config } from '../types'
import { pluginFpfe } from '../plugins'

export const javascript = async (): Promise<Config[]> => {
  return [
    {
      ...js.configs.recommended,
      name: 'fpfe/js/recommend'
    },
    {
      plugins: {
        fpfe: pluginFpfe()
      }
    }
  ]
}
