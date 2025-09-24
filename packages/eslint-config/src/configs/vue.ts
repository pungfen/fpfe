import { ConfigWithExtendsArray } from '@eslint/config-helpers'
import { interopDefault } from '@fp/shared'
import perfectionist from 'eslint-plugin-perfectionist'
import globals from 'globals'

export const vue = async (options: {
  files?: (string | string[])[]
  tsconfigRootDir?: string
} = {}): Promise<ConfigWithExtendsArray> => {
  const { files = ['**/*.vue'], tsconfigRootDir } = options

  const [js, ts, vue, stylistic] = await Promise.all(
    [
      interopDefault(import('@eslint/js')),
      interopDefault(import('typescript-eslint')),
      interopDefault(import('eslint-plugin-vue')),
      interopDefault(import('@stylistic/eslint-plugin'))
    ]
  )

  return [
    {
      extends: [
        js.configs.recommended,
        ts.configs.strictTypeChecked,
        ts.configs.stylisticTypeChecked,
        perfectionist.configs['recommended-natural'],
        stylistic.configs.recommended,
        vue.configs['flat/recommended']
      ],
      files,
      languageOptions: {
        globals: {
          ...globals.browser,
          computed: 'readonly',
          defineEmits: 'readonly',
          defineExpose: 'readonly',
          defineProps: 'readonly',
          onMounted: 'readonly',
          onUnmounted: 'readonly',
          reactive: 'readonly',
          ref: 'readonly',
          request: 'readonly',
          useFetch: 'readonly',
          useQuery: 'readonly',
          useRouter: 'readonly',
          useTemplateRef: 'readonly',
          watch: 'readonly',
          watchEffect: 'readonly'
        },
        parserOptions: {
          ecmaFeatures: { jsx: true },
          extraFileExtensions: ['.vue'],
          parser: ts.parser,
          projectService: true,
          tsconfigRootDir
        }
      },

      rules: {
        '@stylistic/comma-dangle': ['error', 'never'],
        '@stylistic/indent': ['error', 2],
        '@stylistic/space-before-blocks': ['error'],
        '@stylistic/space-before-function-paren': ['error', 'always'],

        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',

        'no-undef': 'off',

        'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
        'vue/max-attributes-per-line': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/singleline-html-element-content-newline': 'off'
      }
    }
  ]
}
