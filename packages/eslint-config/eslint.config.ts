import { globalIgnores } from 'eslint/config'

import { defineConfig, imports, javascript, jsonc, perfectionist, stylistic, typescript } from './src'

export default defineConfig(
  globalIgnores(['node_modules']),
  jsonc(),
  javascript(),
  typescript({ rules: { '@typescript-eslint/no-explicit-any': 'off' } }),
  imports(),
  perfectionist(),
  stylistic()
)
