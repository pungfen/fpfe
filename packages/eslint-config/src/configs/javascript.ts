import plugin, { configs } from '@eslint/js'
import unicorn from "eslint-plugin-unicorn"
import type { EslintConfig } from '../types'

export const javascript = (): EslintConfig[] => {
  return [
    {
      plugins: {
        ['unicorn']: unicorn
      }
    },
    plugin.configs.recommended,
    {
      languageOptions: {
        ecmaVersion: 'latest',
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: "latest",
          sourceType: "module"
        }
      },
      linterOptions: {
        reportUnusedDisableDirectives: true
      },
    }
  ]
}
