import type { Linter } from 'eslint'

import type { OverridesOptions, TypedFlatConfigItem } from '../types'

import { interopDefault } from '../utils'
import { TypeScriptOptions } from './typescript'

export interface VueOptions {
  autoImports?: boolean
  typescript?: boolean
}

export const vue = async (options: OverridesOptions<{ 'on-xx': string }> & TypeScriptOptions & VueOptions = {}): Promise<TypedFlatConfigItem[]> => {
  const { autoImports = false, files = [`**/*.vue`], parserOptions = { projectService: true }, rules: overrideRules = {}, typescript = false } = options

  const [pluginVue, vueParser] = await Promise.all([interopDefault(import('eslint-plugin-vue')), interopDefault(import('vue-eslint-parser'))] as const)

  const configs: Linter.Config[] = []

  if (autoImports) {
    configs.push({
      languageOptions: {
        globals: {
          computed: 'readonly',
          defineEmits: 'readonly',
          defineExpose: 'readonly',
          defineProps: 'readonly',
          onMounted: 'readonly',
          onUnmounted: 'readonly',
          reactive: 'readonly',
          ref: 'readonly',
          shallowReactive: 'readonly',
          shallowRef: 'readonly',
          toRef: 'readonly',
          toRefs: 'readonly',
          watch: 'readonly',
          watchEffect: 'readonly'
        }
      },
      plugins: { vue: pluginVue }
    })
  }

  configs.push({
    files,
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        extraFileExtensions: ['.vue'],
        parser: typescript ? (await interopDefault(import('typescript-eslint'))).parser : null,
        sourceType: 'module',
        ...parserOptions
      }
    },
    rules: {
      ...pluginVue.configs.base.rules,
      ...[...pluginVue.configs['flat/essential'], ...pluginVue.configs['flat/strongly-recommended'], ...pluginVue.configs['flat/recommended']].map(c => c.rules).reduce((acc, c) => ({
        ...acc,
        ...c
      }), {}),
      ...overrideRules
    }
  })

  return configs
}
