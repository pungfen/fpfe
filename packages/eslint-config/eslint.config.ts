import { globalIgnores } from 'eslint/config'

import { javascript, typescript, stylistic, defineConfig, imports, jsonc, perfectionist, promise } from './src'

export default defineConfig(
  globalIgnores([
    'src/types/gens/**',
    'tsconfig.json',
    '**/dist/**',
    '**/.eslint-config-inspector/**',
    'CHANGELOG.md'
  ]),
  javascript(),
  typescript(),
  imports({ typescript: true }),
  jsonc({ json: true, json5: true, jsonc: true, prettier: true }),
  promise(),
  perfectionist(),
  stylistic()
)
