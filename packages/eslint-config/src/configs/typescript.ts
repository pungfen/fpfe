import { tseslint } from '../plugins'
import type { Config } from '../types'

export const typescriptCore = tseslint.config({
  extends: [...tseslint.configs.recommended],
  files: ['**/*.?([cm])ts', '**/*.tsx'],
  name: 'fp/typescript',
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
}) as Config[]

export const typescript = (): Config[] => {
  return [...typescriptCore]
}
