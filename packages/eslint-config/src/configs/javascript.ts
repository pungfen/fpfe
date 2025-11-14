import globals from 'globals'

import type { OverridesOptions, TypedFlatConfigItem } from '../types'
import { pluginAntfu } from '../plugins'

export interface JavaScriptOptions {
  // TODO
  name?: 'javascript'
}

export const javascript = async (options: JavaScriptOptions & OverridesOptions = {}): Promise<TypedFlatConfigItem[]> => {
  const { rules: overrideRules = {} } = options

  await Promise.resolve()

  return [
    {
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
        sourceType: 'module'
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
    },
    {
      plugins: {
        antfu: pluginAntfu
      },
      rules: {
        ...overrideRules
      }
    }
  ]
}
