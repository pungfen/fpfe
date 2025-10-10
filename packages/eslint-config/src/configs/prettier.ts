import type { Linter } from 'eslint'

import { OverridesOptions, PrettierRules } from '../types'
import { loadPlugin } from '../utils'

export const prettier = async (options: {} & OverridesOptions<PrettierRules>): Promise<Linter.Config[]> => {
  const { rules: overridesOptions = {} } = options

  const prettier = await loadPlugin<typeof import('eslint-config-prettier')>('eslint-config-prettier')
  return [
    {
      name: 'config-prettier',
      ...prettier
    },
    {
      name: '@fp/prettier',
      rules: {
        ...overridesOptions
      }
    }
  ]
}
