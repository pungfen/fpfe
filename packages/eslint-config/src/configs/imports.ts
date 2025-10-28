import type { Linter } from 'eslint'
import type { ResolvableFlatConfig } from 'eslint-flat-config-utils'

import { loadPlugin } from '../utils'

export const imports = async (options: Linter.Config & {
  prefix?: string
  typescript?: boolean
} = {}) => {
  const imports = await loadPlugin<typeof import('eslint-plugin-import')>('eslint-plugin-import')
  const unused = await loadPlugin<typeof import('eslint-plugin-unused-imports')['default']>('eslint-plugin-unused-imports')

  const { prefix = '', rules: overrideRules = {}, typescript: enableTypescript } = options

  const files = [`${prefix}**/*.?([cm])[jt]s?(x)`]
  const configs: ResolvableFlatConfig = [
    {
      ...imports.flatConfigs.recommended,
      files,
      rules: {
        ...imports.flatConfigs.recommended.rules,
        ...overrideRules
      }
    },
    {
      files,
      plugins: { 'unused-imports': unused },
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: true,
            vars: 'all',
            varsIgnorePattern: '^_'
          }
        ],
        ...overrideRules
      }
    }
  ]

  if (enableTypescript) {
    // @ts-expect-error ignore
    imports.flatConfigs.typescript.settings['import/resolver']['typescript'] = true
    configs.push({
      ...imports.flatConfigs.typescript,
      files
    })
  }

  return configs
}
