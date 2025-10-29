import { defineConfig, imports, javascript, jsonc, perfectionist, sortPackageJson, stylistic, typescript } from '@fpfe/eslint-config'
import { globalIgnores } from 'eslint/config'

export default defineConfig(
  globalIgnores(['node_modules']),
  jsonc(),
  sortPackageJson(),
  javascript(),
  typescript(),
  imports({ typescript: true }),
  stylistic(),
  perfectionist()
)
