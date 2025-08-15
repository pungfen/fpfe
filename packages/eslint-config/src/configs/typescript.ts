import { tseslint } from '../plugins'
import type { TypedFlatConfigItem } from '../types'

export const typescriptCore = tseslint.config({
  extends: [...tseslint.configs.recommended],
  files: ['**/*.?([cm])ts', '**/*.tsx'],
  name: 'fp/typescript',
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
}) as TypedFlatConfigItem[]

export const typescript = (): TypedFlatConfigItem[] => {
  return [...typescriptCore]
}
