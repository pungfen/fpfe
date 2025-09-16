import pluginImports from 'eslint-plugin-import-lite'

import { TypedFlatConfigItem } from '../types'

export const imports = async (): Promise<TypedFlatConfigItem[]> => {
  return [
    {
      name: 'fp/imports',
      plugins: {
        imports: pluginImports,
      },
      rules: {},
    },
  ]
}
