import tseslint from 'typescript-eslint'

import type { TypedFlatConfigItem } from '../types'

export const typescript = async (): Promise<TypedFlatConfigItem[]> => {
  return [
    {
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'off',
      },
    },
  ]
}
