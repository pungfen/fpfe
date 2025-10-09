import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'

import { GLOB_SRC } from '../globs'
import { OverridesOptions, StylisticRules } from '../types'
import { loadPlugin } from '../utils'

export const stylistic = async (options: {
  /**
   * stylistic customize options
   *
   * @see https://eslint.style/guide/config-presets#configuration-factory
   */
  customize?: StylisticCustomizeOptions
} & OverridesOptions<StylisticRules> = {}): Promise<Linter.Config[]> => {
  const { rules: overrideRules = {}, customize = {
    commaDangle: 'never',
    blockSpacing: true,
    quoteProps: 'as-needed',
    pluginName: '@stylistic'
  } } = options

  const stylistic = await loadPlugin<(typeof import('@stylistic/eslint-plugin'))['default']>(
    '@stylistic/eslint-plugin'
  )

  const config = stylistic.configs.customize(customize)

  return [
    {
      name: '@stylistic/eslint-plugin',
      files: [GLOB_SRC],
      plugins: {
        [customize.pluginName!]: stylistic
      },
      rules: {
        ...config.rules,
        '@stylistic/brace-style': 'off',
        '@stylistic/arrow-parens': ['error', 'as-needed'],
        '@stylistic/lines-around-comment': [
          'error',
          {
            beforeBlockComment: true,
            beforeLineComment: true,
            allowBlockStart: true,
            allowObjectStart: true,
            allowArrayStart: true,
            allowClassStart: true,
            allowEnumStart: true,
            allowInterfaceStart: true,
            allowModuleStart: true,
            allowTypeStart: true
          }
        ],
        '@stylistic/spaced-comment': ['error'],
        '@stylistic/multiline-comment-style': ['error', 'separate-lines'],
        ...overrideRules
      }
    }
  ]
}
