import { defineConfig, ignores, imports, javascript, jsonc, perfectionist, stylistic, typescript } from './src'

export default defineConfig(
  ignores(),
  jsonc(),
  javascript(),
  typescript({ rules: { '@typescript-eslint/no-explicit-any': 'off' }, stylistic: true }),
  imports(),
  perfectionist(),
  stylistic()
)
