import type { Linter } from 'eslint'
import type { ResolvableFlatConfig } from 'eslint-flat-config-utils'

import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { loadPlugin } from '../utils'

export const vue = async (options: Linter.Config & {
  prefix?: string
  typescript?: boolean
} = {}) => {
  const { prefix = '', rules: overrideRules = {}, typescript: enableTypescript } = options

  const files = [`${prefix}**/*.vue`, `${prefix}**/*.tsx`]
  const vue = await loadPlugin<typeof import('eslint-plugin-vue')>('eslint-plugin-vue')
  const ts = await loadPlugin<typeof import('typescript-eslint')>('typescript-eslint')

  const config: Linter.Config = { files }

  const baseSetup = vue.configs['flat/recommended'].find(config => config.name === 'vue/base/setup-for-vue')
  const recommended = vue.configs['flat/recommended'].reduce((res, config) => Object.assign(res, config.rules ?? {}), {} as object)

  if (enableTypescript) {
    Object.assign(config, baseSetup)
    config.rules = {
      ...recommended,
      ...overrideRules
    }
    config.languageOptions = {
      ...baseSetup?.languageOptions,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        extraFileExtensions: ['.vue'],
        parser: ts.parser,
        projectService: true,
        tsconfigRootDir: resolve(cwd(), prefix)
      }
    }
  }

  config.files = files

  const configs: ResolvableFlatConfig = [config]

  return configs
}
