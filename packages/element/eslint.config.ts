import { defineConfig, ignores, imports, javascript, jsonc, perfectionist, stylistic, typescript, vue } from '@fpfe/eslint-config'

export default defineConfig(
  ignores(),
  jsonc(),
  javascript(),
  typescript(),
  vue(),
  imports(),
  perfectionist(),
  stylistic()
)
