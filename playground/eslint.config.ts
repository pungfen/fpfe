import { defineConfig, imports, javascript, jsonc, perfectionist, stylistic, typescript } from '@fpfe/eslint-config'
import { globalIgnores } from 'eslint/config'

export default defineConfig(
  globalIgnores(['node_modules', 'dist']),
  jsonc(),
  javascript(),
  typescript({ parserOptions: { project: ['./tsconfig.app.json', './tsconfig.node.json'] } }),
  imports({ typescript: true }),
  perfectionist(),
  stylistic()
)
