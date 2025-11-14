import type { OverridesOptions, TypedFlatConfigItem } from '../types'

import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC, GLOB_TS, GLOB_TSX } from '../globs'
import { interopDefault } from '../utils'

export interface TypeScriptOptions { extraFileExtensions?: string[], stylistic?: boolean }

export const typescript = async (options: OverridesOptions & TypeScriptOptions = {}): Promise<TypedFlatConfigItem[]> => {
  const { extraFileExtensions = [], parserOptions = { project: true }, rules: overrideRules = {}, stylistic } = options

  const files = [GLOB_TS, GLOB_TSX, ...extraFileExtensions.map(ext => `**/*.${ext}`)]

  const pluginTypescript = await interopDefault(import('typescript-eslint'))
  const typeChecked = [...pluginTypescript.configs.recommendedTypeChecked, ...(stylistic ? pluginTypescript.configs.stylisticTypeChecked : [])]

  return [
    ...typeChecked.map(
      (config) => {
        return {
          ...config,
          files
        } as TypedFlatConfigItem
      }
    ),
    {
      files: [GLOB_JSON, GLOB_JSONC, GLOB_JSON5],
      ...pluginTypescript.configs.disableTypeChecked
    },
    {
      files,
      languageOptions: {
        parser: pluginTypescript.parser,
        parserOptions: {
          extraFileExtensions: extraFileExtensions.map(ext => `.${ext}`),
          sourceType: 'module',
          tsconfigRootDir: process.cwd(),
          ...parserOptions
        }
      },
      rules: {
        ...overrideRules
      }
    }
  ]
}
