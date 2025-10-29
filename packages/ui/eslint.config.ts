import { defineConfig, imports, javascript, jsonc, perfectionist, stylistic, typescript, vue } from '@fpfe/eslint-config'
import { globalIgnores } from 'eslint/config'

export default defineConfig(
  globalIgnores(['node_modules', 'dist']),
  jsonc(),
  javascript(),
  typescript(),
  vue({
    rules: {},
    typescript: true
  }),
  imports({ typescript: true }),
  perfectionist(),
  stylistic()
)
