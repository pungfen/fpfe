import { defineConfig } from 'eslint/config'

import { loadPlugin } from '../utils'

export const stylistic = async (): Promise<ReturnType<typeof defineConfig>> => {
  const stylistic = await loadPlugin('@stylistic/eslint-plugin') as any

  return defineConfig([
    {

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
        '@stylistic/spaced-comment': ['error']
      }
    }
  ]
  )
}
