import { GLOB_VUE } from "../globs";
import type { Config } from "../types";
import { importWithError } from "../utils";
import { typescriptCore } from "./typescript";

const vueTs = typescriptCore.filter(it => it.name !== 'typescript-eslint/base').map(
  it => ({ ...it, files: [GLOB_VUE], name: `fpfe/vue/${it.name?.replace('fpfe/', '') || 'anonymous'}` })
)

export const vue = async (): Promise<Config[]> => {
  const pluginVue = await importWithError<typeof import('eslint-plugin-vue')>('eslint-plugin-vue')
  const vueParser = await importWithError<typeof import('vue-eslint-parser')>('vue-eslint-parser')
  const tslint = await importWithError<typeof import('typescript-eslint')>('typescript-eslint')

  return [
    ...vueTs,
    {
      name: 'fpfe/vue',
      languageOptions: {
        parser: vueParser,
        parserOptions: {
          ecmaFeatures: { jsx: true },
          extraFileExtensions: ['.vue'],
          parser: tslint.parser,
          sourceType: 'module',
        }
      },
      files: [GLOB_VUE],
      plugins: { vue: pluginVue },
      processor: pluginVue.processors['.vue'],
      rules: {
        ...pluginVue.configs["flat/recommended"].map(it => it.rules).reduce((acc, c) => ({ ...acc, ...c })),
        'vue/multi-word-component-names': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/one-component-per-file': 'off',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/prefer-template': 'error',
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'off'
      }
    }
  ]
}
