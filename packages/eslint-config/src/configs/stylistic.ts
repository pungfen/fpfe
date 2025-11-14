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
      indent: 2,
      jsx: true,
      pluginName: 'style',
      quoteProps: 'as-needed',
      quotes: 'single',
      semi: false
    },
    rules: overrideRules = {}
  } = options

  const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin') as unknown as typeof import('@stylistic/eslint-plugin')['default'])

  const config = pluginStylistic.configs.customize({ ...customize })

  return [
    {
      plugins: {
        antfu: pluginAntfu,
        [customize.pluginName!]: pluginStylistic
      },
      rules: {
        ...config.rules,
        'style/array-bracket-newline': ['error', { multiline: true }],
        'style/array-element-newline': ['error', { multiline: true }],
        ...overrideRules
      }
    }
  ]
}
