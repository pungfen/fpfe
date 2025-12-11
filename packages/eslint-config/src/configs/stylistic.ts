import type { EslintConfig } from '../types'

import plugin from '@stylistic/eslint-plugin'

  const { configs } = plugin

export const stylistic =  (): EslintConfig[] => {



  return [
    {
      plugins: {
        ['@stylistic']: plugin
      }
    },
    {
      rules: {
        ...configs.customize({ commaDangle: 'never' }).rules
      }
    }
  ]
}
