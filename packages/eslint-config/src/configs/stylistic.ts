import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'

import type { OverridesOptions } from '../types'

import { interopDefault } from '../utils'

export interface StylisticOptions { customize?: StylisticCustomizeOptions }

export const stylistic = async (options: OverridesOptions<{ 'no-xx': string }> & StylisticOptions = {}): Promise<Linter.Config[]> => {
  const {
    customize = {
      blockSpacing: true,
      commaDangle: 'never',
      pluginName: '@stylistic',
      quoteProps: 'as-needed'
    },
    rules: overrideRules = {}
  } = options

  const stylistic = await interopDefault(import('@stylistic/eslint-plugin') as unknown as typeof import('@stylistic/eslint-plugin')['default'])

  return [
    {
      files: [`**/*.?([cm])[jt]s?(x)`],
      plugins: { [customize.pluginName!]: stylistic },
      rules: {
        ...(stylistic.configs.customize(customize).rules),
        '@stylistic/array-bracket-newline': ['error', { multiline: true }],
        '@stylistic/array-element-newline': ['error', { multiline: true }],
        '@stylistic/arrow-parens': ['error', 'as-needed'],
        '@stylistic/brace-style': 'off',
        '@stylistic/comma-dangle': ['error', 'never'],
        '@stylistic/lines-around-comment': [
          'error',
          {
            allowArrayStart: true,
            allowBlockStart: true,
            allowClassStart: true,
            allowEnumStart: true,
            allowInterfaceStart: true,
            allowModuleStart: true,
            allowObjectStart: true,
            allowTypeStart: true,
            beforeBlockComment: true,
            beforeLineComment: true
          }
        ],
        '@stylistic/max-statements-per-line': ['error', { max: 1 }],
        '@stylistic/multiline-comment-style': ['error', 'separate-lines'],
        '@stylistic/no-mixed-spaces-and-tabs': 'error',

        '@stylistic/no-multiple-empty-lines': [
          'error',
          {
            max: 1,
            maxBOF: 0,
            maxEOF: 0
          }
        ],
        '@stylistic/object-curly-newline': ['error', { multiline: true }],
        '@stylistic/object-property-newline': 'error',
        '@stylistic/semi': ['error', 'never'],
        '@stylistic/spaced-comment': ['error'],
        ...overrideRules
      }
    }
  ]
}
