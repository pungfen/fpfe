import type { Linter } from 'eslint'

import globals from 'globals'

import type { OverridesOptions } from '../types'
export interface JavaScriptOptions {
  // TODO
  name?: 'javascript'
}

export const javascript = async (options: JavaScriptOptions & OverridesOptions = {}): Promise<Linter.Config[]> => {
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
