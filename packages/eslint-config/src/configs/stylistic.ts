import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'

import type { OverridesOptions, TypedFlatConfigItem } from '../types'

import { pluginAntfu } from '../plugins'
import { interopDefault } from '../utils'

export interface StylisticOptions { customize?: StylisticCustomizeOptions }

export const stylistic = async (options: OverridesOptions & StylisticOptions = {}): Promise<TypedFlatConfigItem[]> => {
  const {
    customize = {
      blockSpacing: true,
      commaDangle: 'never',
      pluginName: '@stylistic',
      quoteProps: 'as-needed'
    },
    rules: overrideRules = {}
  } = options

  const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin') as unknown as typeof import('@stylistic/eslint-plugin')['default'])

  return [
    {
      plugins: {
        antfu: pluginAntfu,
        [customize.pluginName!]: pluginStylistic
      },
      rules: {
        ...pluginStylistic.configs.customize(customize).rules,
        '@stylistic/array-bracket-newline': ['error', { multiline: true }],
        '@stylistic/array-element-newline': ['error', { multiline: true }],
        ...overrideRules
      }
    }
  ]
}
