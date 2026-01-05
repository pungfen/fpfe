import style from '@stylistic/eslint-plugin'
import { Linter } from 'eslint'
import perfectionist from 'eslint-plugin-perfectionist'
import unicorn from 'eslint-plugin-unicorn'
import vue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import ts from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

export default defineConfig(
  {
    ignores: ['**/*.d.ts', '**/dist/**']
  },
  {
    plugins: {
      ['@typescript-eslint']: ts.plugin,
      ['perfectionist']: perfectionist,
      ['style']: style,
      ['unicorn']: unicorn,
      ['vue']: vue
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parser: vueParser,
      parserOptions: {
        extraFileExtensions: ['.vue'],
        parser: ts.parser,
        projectService: true,
        sourceType: 'module',
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      ...unicorn.configs.recommended.rules,
      ...style.configs.customize({ commaDangle: 'never', pluginName: 'style' }).rules,
      ...perfectionist.configs['recommended-natural'].rules,
      ...ts.configs.strictTypeChecked.reduce<Linter.Config['rules']>((rules, item) => ({ ...rules, ...item.rules }), {}),
      ...vue.configs['flat/base'].reduce<Linter.Config['rules']>((rules, item) => ({ ...rules, ...item.rules }), {}),
      ...vue.configs['flat/essential'].reduce<Linter.Config['rules']>((rules, item) => ({ ...rules, ...item.rules }), {}),
      ...vue.configs['flat/recommended'].reduce<Linter.Config['rules']>((rules, item) => ({ ...rules, ...item.rules }), {}),
      ...vue.configs['flat/strongly-recommended'].reduce<Linter.Config['rules']>((rules, item) => ({ ...rules, ...item.rules }), {}),
      'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],
      'unicorn/no-array-reduce': ['off'],
      'unicorn/prevent-abbreviations': ['error', { replacements: { props: false, res: false } }],
      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
      'vue/block-spacing': ['error', 'always'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/define-macros-order': ['error', { order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'] }]
    }
  },
  { extends: [ts.configs.disableTypeChecked], files: ['**/*.js'] },
  { files: ['eslint.config.ts'] },
  { files: ['./packages/eslint-config/src/**/*.ts'] },
  { files: ['./packages/element/**/*.{ts,tsx,vue}'], processor: vue.processors['.vue'] as Linter.Processor }
)
