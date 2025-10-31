import type { Linter } from 'eslint'

import type { OverridesOptions } from '../types'

import { interopDefault } from '../utils'

export interface ImportsOptions { typescript?: boolean }

const IMPORTS_FILES = [`**/*.?([cm])js`, `**/*.?([cm])jsx`, `**/*.?([cm])ts`, `**/*.?([cm])tsx`]

export const imports = async (options: ImportsOptions & OverridesOptions<{ 'no-xx': string }> = {}): Promise<Linter.Config[]> => {
  const imports = await interopDefault(import('eslint-plugin-import'))
  const unused = await interopDefault(import('eslint-plugin-unused-imports') as unknown as typeof import('eslint-plugin-unused-imports')['default'])

  const { rules: overrideRules = {} } = options

  const configs: Linter.Config[] = [imports.flatConfigs.recommended as Linter.Config]

  if (options.typescript) {
    try {
      await interopDefault(import('eslint-import-resolver-typescript'))

      // @ts-expect-error -- NOTE(kazupon): add typescript resolver
      imports.flatConfigs.typescript.settings['import/resolver']['typescript'] = true

      configs.push({
        name: 'import/typescript',
        ...imports.flatConfigs.typescript
      })
    }
    catch (error: unknown) {
      throw new Error(`Not found eslint-import-resolver-typescript: ${(error as Error).message}`)
    }
  }

  configs.push({
    files: IMPORTS_FILES,
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
  })

  return configs
}
