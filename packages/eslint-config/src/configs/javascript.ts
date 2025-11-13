import globals from 'globals'

import type { OverridesOptions, TypedFlatConfigItem } from '../types'

export interface JavaScriptOptions {
  // TODO
  name?: 'javascript'
}

export const javascript = async (options: JavaScriptOptions & OverridesOptions = {}): Promise<TypedFlatConfigItem[]> => {
  const { rules: overrideRules = {} } = options

  await Promise.resolve()

  return [
    {
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.node
        }
      },
      rules: { ...overrideRules }
    }
  ]
}
