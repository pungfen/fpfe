import type { OverridesOptions, TypedFlatConfigItem } from '../types'

import { GLOB_VUE } from '../globs'
import { interopDefault } from '../utils'
import { TypeScriptOptions } from './typescript'

export interface VueOptions {
  typescript?: boolean
}

export const vue = async (options: OverridesOptions & TypeScriptOptions & VueOptions = {}): Promise<TypedFlatConfigItem[]> => {
  const { files = [`**/*.vue`], parserOptions = {}, rules: overrideRules = {}, typescript = false } = options

  const pluginVue = await interopDefault(import('eslint-plugin-vue'))

  const rules = [...pluginVue.configs['flat/essential'], ...pluginVue.configs['flat/strongly-recommended'], ...pluginVue.configs['flat/recommended']]

  return [
    {
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
    },
    ...pluginVue.configs['flat/recommended'].map((config) => {
      return {
        ...config,
        files
      }
    }),
    {
      files: [GLOB_VUE],
      rules: {
        ...pluginVue.configs.base.rules,
        ...rules.map(c => c.rules).reduce((acc, c) => ({
          ...acc,
          ...c
        }), {}),
        ...overrideRules
      },
      ...typescript
        ? {
            languageOptions: {
              parser: pluginVue.configs['flat/base'][1].languageOptions?.parser,
              parserOptions: {
                ecmaFeatures: { jsx: true },
                extraFileExtensions: ['.vue'],
                parser: typescript ? (await interopDefault(import('typescript-eslint'))).parser : null,
                sourceType: 'module',
                tsconfigRootDir: process.cwd(),
                ...parserOptions
              }
            }
          }
        : {}
    }
  ]
}
