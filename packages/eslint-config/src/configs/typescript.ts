import tseslint from 'typescript-eslint'

import { defineConfig } from 'eslint/config'

import type { TypedFlatConfigItem } from '../types'

export const typescriptCore = defineConfig({
  extends: [...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked],
  files: ['**/*.?([cm])ts'],
  name: 'fp/typescript',
}) as any

export const typescript = async (): Promise<TypedFlatConfigItem[]> => {
  return [
    ...typescriptCore
  ]
}
