import globals from 'globals'

import eslint from '@eslint/js'
import pluginUnusedImports from 'eslint-plugin-unused-imports'

import type { TypedFlatConfigItem } from '../types'

export const javascript = async (): Promise<TypedFlatConfigItem[]> => {
  return [
    {
      ...eslint.configs.recommended,
      name: 'fp/js',
      languageOptions: {
        globals: {
          ...globals.browser,
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          sourceType: 'module',
        },
        sourceType: 'module',
      },
    },
    {
      plugins: {
        'unused-imports': pluginUnusedImports,
      },
      name: 'fp/js/unused-imports',
      rules: {
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
          'error',
          { args: 'after-used', ignoreRestSiblings: true },
        ],
      },
    },
  ]
}
