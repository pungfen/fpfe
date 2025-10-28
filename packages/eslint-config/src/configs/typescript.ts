import type { Linter } from 'eslint'
import type { ResolvableFlatConfig } from 'eslint-flat-config-utils'

import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { loadPlugin } from '../utils'

export const typescript = async (options: Linter.Config & { prefix?: string } = {}) => {
  const { languageOptions: overrideLanguageOptions = {}, prefix = '', rules: overrideRules = {} } = options

  const ts = await loadPlugin<typeof import('typescript-eslint')>('typescript-eslint')

  const recommended = ts.configs.recommended.reduce((res, config) => Object.assign(res, config.rules ?? {}), {} as object)
  const recommendedTypeChecked = ts.configs.recommendedTypeChecked.reduce((res, config) => Object.assign(res, config.rules ?? {}), {} as object)

  const files = [`${prefix}**/*.?([cm])[jt]s?(x)`]
  const configs: ResolvableFlatConfig = [
    {
      files,
      languageOptions: {
        parser: ts.parser,
        parserOptions: {
          projectService: true,
          sourceType: 'module',
          tsconfigRootDir: resolve(cwd(), prefix),
          ...(overrideLanguageOptions.parserOptions ?? {})
        }
      },
      plugins: { '@typescript-eslint': ts.plugin },
      rules: {
        ...recommended,
        ...recommendedTypeChecked,
        ...overrideRules
      }
    }
  ]

  return configs
}
