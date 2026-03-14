import { type Config } from '../types'

import pluginStylistic from '@stylistic/eslint-plugin'

const stylisticConfig = pluginStylistic.configs.customize({ commaDangle: 'never' })

export const stylistic = (): Config[] => {



  return [
    {
      name: 'fpfe/stylistic',
      ...stylisticConfig,
      rules: {
        ...stylisticConfig.rules
      }
    }]
}
