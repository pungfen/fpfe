import type { Linter } from 'eslint'

import js from '@eslint/js'
// import { findWorkspaceDir } from '@pnpm/find-workspace-dir'
import stylistic from '@stylistic/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import type { Config } from './types'

export const defineWorkspaceConfig = (options: {
  config?: Config
  configs?: Promise<Linter.Config>[]
  ignores?: string[]
  name?: string
}[] = [], userConfig: Linter.Config = {}) => {
  const ignores = options.filter(option => 'ignores' in option && option.ignores?.length)

  const config = defineConfig(userConfig)

  // options.map(
  //   option => {
  //     const dir = findWorkspaceDir()
  //   }
  // )

  return defineConfig([
    ...ignores,
    {
      extends: ['js/recommended'],
      files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
      languageOptions: { globals: globals.node },
      plugins: { js }
    },
    tseslint.configs.recommended,
    perfectionist.configs['recommended-natural'],
    {
      plugins: { '@stylistic': stylistic },
      rules: {
        ...(stylistic.configs.customize().rules),
        '@stylistic/array-bracket-newline': ['error', { multiline: true }],
        '@stylistic/array-element-newline': ['error', { multiline: true }],
        '@stylistic/arrow-parens': ['error', 'as-needed'],
        '@stylistic/comma-dangle': ['error', 'never'],
        '@stylistic/max-statements-per-line': ['error', { max: 1 }],
        '@stylistic/no-mixed-spaces-and-tabs': 'error',
        '@stylistic/no-multiple-empty-lines': [
          'error',
          {
            max: 1,
            maxBOF: 0,
            maxEOF: 0
          }
        ],
        '@stylistic/object-curly-newline': ['error', { multiline: true }],
        '@stylistic/object-property-newline': 'error',
        '@stylistic/semi': ['error', 'never'],
        '@stylistic/spaced-comment': ['error']
      }
    }
  ])
}

export const defineTsProjectConfig = () => {
  return defineConfig([
    { ignores: ['dist', 'fixtures', '__fixtures', 'package-lock.json'] },
    {
      extends: ['js/recommended'],
      files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
      languageOptions: { globals: globals.node },
      plugins: { js }
    },
    tseslint.configs.recommended,
    perfectionist.configs['recommended-natural'],
    {
      plugins: { '@stylistic': stylistic },
      rules: {
        ...(stylistic.configs.customize().rules),
        '@stylistic/array-bracket-newline': ['error', { multiline: true }],
        '@stylistic/array-element-newline': ['error', { multiline: true }],
        '@stylistic/arrow-parens': ['error', 'as-needed'],
        '@stylistic/comma-dangle': ['error', 'never'],
        '@stylistic/max-statements-per-line': ['error', { max: 1 }],
        '@stylistic/no-mixed-spaces-and-tabs': 'error',
        '@stylistic/no-multiple-empty-lines': [
          'error',
          {
            max: 1,
            maxBOF: 0,
            maxEOF: 0
          }
        ],
        '@stylistic/object-curly-newline': ['error', { multiline: true }],
        '@stylistic/object-property-newline': 'error',
        '@stylistic/semi': ['error', 'never'],
        '@stylistic/spaced-comment': ['error']
      }
    }
  ])
}

export * from './configs'
