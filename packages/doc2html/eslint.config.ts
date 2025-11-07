import { defineConfig, imports, javascript, jsonc, perfectionist, stylistic, typescript } from '@fpfe/eslint-config'
import { globalIgnores } from 'eslint/config'

export default defineConfig(
  globalIgnores(['node_modules']),
  jsonc(),
  javascript(),
  typescript(),
  imports({ typescript: true }),
  perfectionist(),
  stylistic()
)
