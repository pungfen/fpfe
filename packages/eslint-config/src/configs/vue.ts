import type { Linter } from 'eslint'

import { OverridesOptions } from '../types'
import { interopDefault } from '../utils'
import { TypeScriptOptions } from './typescript'

export interface VueOptions { typescript?: boolean }

export const vue = async (options: OverridesOptions<{ 'on-xx': string }> & TypeScriptOptions & VueOptions = {}) => {
  const { parserOptions = { projectService: true }, rules: overrideRules = {} } = options

  const vue = await interopDefault(import('eslint-plugin-vue'))
  const vueParser = vue.configs['flat/base'][1]['languageOptions']?.parser

  const configs: Linter.Config[] = []

  configs.push(...vue.configs['flat/recommended'])

  const customConfig: Linter.Config = {
    files: [`**/*.vue`],
    rules: { ...overrideRules }
  }

  if (options.typescript) {
    const ts = await interopDefault(import('typescript-eslint'))
    customConfig.languageOptions = {
      parser: vueParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        extraFileExtensions: ['.vue'],
        parser: ts.parser,
        sourceType: 'module',
        ...parserOptions
      }
    }
  }

  configs.push(customConfig)

  return configs
}
