import pluginPerfectionist from 'eslint-plugin-perfectionist'

import { TypedFlatConfigItem } from '../types'

export const perfectionist = async (): Promise<TypedFlatConfigItem[]> => {
  return [
    {
      name: 'fp/perfectionist',
      plugins: {
        perfectionist: pluginPerfectionist,
      },
      rules: {},
    },
  ]
}
