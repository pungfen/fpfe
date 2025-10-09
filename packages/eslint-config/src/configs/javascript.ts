import type { Linter } from 'eslint'

import globals from 'globals'

import { JavascriptRules, OverridesOptions } from '../types'
import { loadPlugin } from '../utils'

export const javascript = async (options: {} & OverridesOptions<JavascriptRules> = {}): Promise<Linter.Config[]> => {
  const { rules: overrideRules = {} } = options

  const js = await loadPlugin<typeof import('@eslint/js')>('@eslint/js')

  return [
    {
      name: '@kazupon/javascript/markdown-block',
      files: ['**/*.md/*.{js,cjs,mjs}'],
      ...(js.configs.recommended as Linter.Config)
    },
    {
      name: '@fp/javascript/overrides',
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.node,
          ...globals.es2022,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly'
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: 2022,
          sourceType: 'module'
        },
        sourceType: 'module'
      },
      linterOptions: {
        reportUnusedDisableDirectives: true
      },
      rules: {
        ...overrideRules
      }
    }
  ]
}
