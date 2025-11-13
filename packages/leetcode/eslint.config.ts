import { defineConfig, imports, javascript, jsonc, perfectionist, stylistic, typescript } from '@fpfe/eslint-config'
import { globalIgnores } from 'eslint/config'

export default defineConfig(
  globalIgnores(['node_modules']),
  jsonc(),
  javascript(),
  typescript(
    {
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off'
      }
    }
  ),
  imports(), perfectionist(), stylistic()
)
