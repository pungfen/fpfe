import { defineConfig } from 'oxlint'

export default defineConfig({
  categories: {
    correctness: 'error',
    suspicious: 'error',
    perf: 'warn',
  },
  rules: {},
  overrides: [
    {
      files: ['**/*.ts'],
      plugins: ['typescript'],
    },
    {
      files: ['**/*.vue'],
      plugins: ['vue'],
      rules: {},
    },
  ],
})