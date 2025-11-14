import { defineConfig, ignores, imports, javascript, jsonc, perfectionist, stylistic, typescript, vue } from '@fpfe/eslint-config'

export default defineConfig(
  ignores(),
  jsonc(),
  javascript(),
  typescript({ parserOptions: { project: ['./tsconfig.app.json', './tsconfig.node.json'] } }),
  vue({ parserOptions: { project: ['./tsconfig.app.json', './tsconfig.node.json'] }, typescript: true }),
  imports(),
  perfectionist(),
  stylistic()
)
