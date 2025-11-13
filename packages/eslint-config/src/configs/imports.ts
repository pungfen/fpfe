import type { OverridesOptions, TypedFlatConfigItem } from '../types'

import { pluginAntfu } from '../plugins'
import { interopDefault } from '../utils'

export interface ImportsOptions { stylistic?: boolean }

export const imports = async (options: ImportsOptions & OverridesOptions = {}): Promise<TypedFlatConfigItem[]> => {
  const pluginImportLite = await interopDefault(import('eslint-plugin-import-lite'))

  const { rules: overrideRules = {}, stylistic = true } = options

  return [
    {
      plugins: {
        antfu: pluginAntfu,
        import: pluginImportLite
      },
      rules: {
        'antfu/import-dedupe': 'error',
        'antfu/no-import-dist': 'error',
        'antfu/no-import-node-modules-by-path': 'error',

        'import/consistent-type-specifier-style': ['error', 'top-level'],
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',

        ...stylistic
          ? { 'import/newline-after-import': ['error', { count: 1 }] }
          : {},

        ...overrideRules
      }
    }
  ]
}
