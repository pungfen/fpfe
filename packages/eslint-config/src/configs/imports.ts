import type { Linter } from 'eslint'

import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from '../globs'
import { OverridesOptions } from '../types'
import { ImportsRules } from '../types/gens/imports'
import { loadPlugin } from '../utils'

const IMPORTS_FILES = [GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX]

export const imports = async (options: {
  /**
   * use typescript
   *
   * @default false
   */
  typescript?: boolean

  /**
   * use `eslint-plugin-module-interop`
   *
   * @default true
   */
  interop?: boolean

} & OverridesOptions<ImportsRules> = {}) => {
  const { rules: overrideRules = {}, interop = true } = options

  const unused = await loadPlugin<typeof import('eslint-plugin-unused-imports')>('eslint-plugin-unused-imports')
  const imports = await loadPlugin<typeof import('eslint-plugin-import')>('eslint-plugin-import')

  const configs: Linter.Config[] = [imports.flatConfigs.recommended as Linter.Config]

  if (options.typescript) {
    try {
      await loadPlugin<typeof import('eslint-import-resolver-typescript')>('eslint-import-resolver-typescript')

      // @ts-ignore -- NOTE(kazupon): add typescript resolver
      imports.flatConfigs.typescript.settings['import/resolver']['typescript'] = true
      configs.push({ name: 'import/typescript', ...imports.flatConfigs.typescript })
    } catch (error: unknown) {
      throw new Error(`Not found eslint-import-resolver-typescript: ${(error as Error).message}`)
    }
  }

  if (interop) {
    try {
      // check if the resolver is installed
      const modInterop = await loadPlugin<typeof import('eslint-plugin-module-interop')>(
        'eslint-plugin-module-interop'
      )
      configs.push({
        name: 'module-interop',
        ...(modInterop.configs.recommended as Linter.Config)
      })
    } catch (error: unknown) {
      throw new Error(`Not found eslint-plugin-module-interop: ${(error as Error).message}`)
    }
  }

  configs.push({
    name: 'unused-imports',
    plugins: {
      'unused-imports': unused as never
    },
    files: IMPORTS_FILES,
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ]
    }
  })

  // overrides
  const overriddenConfig: Linter.Config = {
    name: '@kazupon/imports',
    files: IMPORTS_FILES,
    rules: {
      ...overrideRules
    }
  }

  configs.push(overriddenConfig)

  return configs
}
