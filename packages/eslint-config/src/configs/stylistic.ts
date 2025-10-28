import type { Linter } from 'eslint'
import type { ResolvableFlatConfig } from 'eslint-flat-config-utils'

import { loadPlugin } from '../utils'

export const stylistic = async (options: Linter.Config & { prefix?: string } = {}) => {
  const stylistic = await loadPlugin<(typeof import('@stylistic/eslint-plugin'))['default']>('@stylistic/eslint-plugin')

  const { prefix = '', rules: overrideRules = {} } = options

  return [
    {
      files: [`${prefix}**/*.?([cm])[jt]s?(x)`],
      plugins: { '@stylistic': stylistic },
      rules: {
        ...(stylistic.configs.customize().rules),
        '@stylistic/array-bracket-newline': ['error', { multiline: true }],
        '@stylistic/array-element-newline': ['error', { multiline: true }],
        '@stylistic/arrow-parens': ['error', 'as-needed'],
        '@stylistic/comma-dangle': ['error', 'never'],
        '@stylistic/max-statements-per-line': ['error', { max: 1 }],
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
  ] as ResolvableFlatConfig
}
