import type { Linter } from 'eslint'

import type { OverridesOptions, TypescriptRules } from '../types'

import {
  GLOB_HTML,
  GLOB_JS,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_JSONC,
  GLOB_JSX,
  GLOB_MARKDOWN,
  GLOB_TOML,
  GLOB_TS,
  GLOB_TSX,
  GLOB_YAML
} from '../globs'
import { loadPlugin } from '../utils'

/**
 * TypeScript project service options
 *
 * @see https://typescript-eslint.io/packages/parser/#projectservice
 */
export interface TypeScriptProjectServiceOptions {
  allowDefaultProject?: string[]
  defaultProject?: string
}

/**
 * TypeScript parser options
 *
 * @see https://typescript-eslint.io/packages/parser/#configuration
 */
export interface TypeScriptParserOptions {
  projectService?: boolean | TypeScriptProjectServiceOptions
  tsconfigRootDir?: string
}

export interface TypeScriptOptions {
  /**
   * Additional extensions for files.
   *
   * @see https://typescript-eslint.io/packages/parser/#extrafileextensions
   */
  extraFileExtensions?: string[]

  /**
   * typescript-eslint parser options
   */
  parserOptions?: TypeScriptParserOptions
}

export const typescript = async (options: TypeScriptOptions & OverridesOptions<TypescriptRules> = {}): Promise<Linter.Config[]> => {
  const { rules: overrideRules = {}, extraFileExtensions = [], parserOptions = { projectService: true } } = options

  const ts = await loadPlugin<typeof import('typescript-eslint')>('typescript-eslint')
  const baseFiles = [GLOB_TS, GLOB_TSX, ...extraFileExtensions.map(ext => `**/*.${ext}`)]

  const files = [...baseFiles]

  return [
    ...ts.configs.recommendedTypeChecked,
    {
      files: [GLOB_JS,
        GLOB_JSX,
        GLOB_JSON,
        GLOB_JSON5,
        GLOB_JSONC,
        GLOB_YAML,
        GLOB_HTML,
        GLOB_TOML,
        GLOB_MARKDOWN],
      ...(ts.configs.disableTypeChecked as Linter.Config)
    },
    {
      name: '@fp/typescipt/typescript-eslint/overrides-for-disable-type-checked',
      rules: {
        ...ts.configs.disableTypeChecked.rules
      }
    },
    {
      name: '@fp/typescript/typescript-eslint',
      files,
      languageOptions: {
        parser: ts.parser,
        parserOptions: {
          sourceType: 'module',
          tsconfigRootDir: process.cwd(),
          ...parserOptions
        }
      },
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true
          }
        ],
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            minimumDescriptionLength: 10,
            'ts-check': false,
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': 'allow-with-description'
          }
        ],
        ...overrideRules
      }
    }
  ]
}
