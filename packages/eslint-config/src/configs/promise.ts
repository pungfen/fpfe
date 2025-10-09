import type { Linter } from 'eslint'

import type { OverridesOptions, PromiseRules } from '../types'

import { loadPlugin } from '../utils'

export const promise = async (options: {} & OverridesOptions<PromiseRules> = {}): Promise<Linter.Config[]> => {
  const { rules: overrideRules = {} } = options

  // @ts-ignore -- NOTE(kazupon): `eslint-plugin-promise` is not yet type definitions exporting
  const promise = await loadPlugin<typeof import('eslint-plugin-promise')>('eslint-plugin-promise')

  return [
    {
      name: 'promise/flat/recommended',
      ...(promise.configs['flat/recommended'] as Linter.Config)
    },
    {
      name: '@kazupon/promise',
      rules: {
        ...overrideRules
      }
    }
  ]
}
