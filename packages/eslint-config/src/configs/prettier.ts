import { pluginPrettier, pluginPrettierRecommended } from '../plugins'

import type { TypedFlatConfigItem } from '../types'

export const prettier = async (): Promise<TypedFlatConfigItem[]> => {
  return [
    {
      name: 'fp/prettier',
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        ...pluginPrettierRecommended.rules,
      },
    },
  ]
}
