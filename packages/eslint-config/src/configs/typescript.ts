import type { Linter } from 'eslint'

import type { OverridesOptions, TypedFlatConfigItem } from '../types'

import { pluginAntfu } from '../plugins'
import { interopDefault } from '../utils'

export interface TypeScriptOptions { extraFileExtensions?: string[] }

export const typescript = async (options: OverridesOptions & TypeScriptOptions = {}): Promise<TypedFlatConfigItem[]> => {
  const { extraFileExtensions = [], parserOptions = { project: true }, rules: overrideRules = {} } = options

  const ts = await interopDefault(import('typescript-eslint'))

  const baseFiles = [`**/*.?([cm])ts`, `**/*.?([cm])tsx`, ...extraFileExtensions.map(ext => `**/*.${ext}`)]
  const files = [...(options.files ?? []), ...baseFiles]

  const recommendedTypeChecked = (ts.configs.recommendedTypeChecked as Linter.Config[]).map((config) => {
    return {
      ...config,
      files
    }
  })

  return [
    ...recommendedTypeChecked,
    {
      files: [`**/*.?([cm])js`, `**/*.?([cm])jsx`, `**/*.json`, `**/*.json5`, `**/*.jsonc`],
      ...ts.configs.disableTypeChecked
    },
    {
      files,
      languageOptions: {
        parser: ts.parser,
        parserOptions: {
          extraFileExtensions: extraFileExtensions.map(ext => `.${ext}`),
          sourceType: 'module',
          tsconfigRootDir: process.cwd(),
          ...parserOptions
        }
      },
      rules: { ...overrideRules }
    }
  ]
}
