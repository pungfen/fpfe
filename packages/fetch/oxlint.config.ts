import { defineConfig } from 'oxlint'

export default defineConfig({
  categories: {
    correctness: 'error',
    suspicious: 'error',
    perf: 'warn'
  },
  rules: {
    'vue-js/no-ref-as-operand': 'error',
    'vue-js/no-dupe-keys': 'error',
    'vue-js/no-reserved-keys': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  },
  plugins: ['typescript', 'unicorn', 'oxc', 'import', 'promise', 'node', 'vue'],
  jsPlugins: ['eslint-plugin-perfectionist', { name: 'vue-js', specifier: 'eslint-plugin-vue' }]
})
