import type { Linter } from 'eslint'

import type { OverridesOptions, PerfectionistRules } from '../types'

import { GLOB_SRC } from '../globs'
import { loadPlugin } from '../utils'

export const perfectionist = async (options: {} & OverridesOptions<PerfectionistRules> = {}): Promise<Linter.Config[]> => {
  const { rules: overrideRules = {} } = options

  const perfectionist = await loadPlugin<typeof import('eslint-plugin-perfectionist')>('eslint-plugin-perfectionist')

  return [
    {
      name: '@fp/perfectionist/overrides',
      files: [GLOB_SRC],
      plugins: {
        perfectionist
      },
      rules: {
        'perfectionist/sort-imports': ['error'],
        'perfectionist/sort-exports': ['error'],
        ...overrideRules
      }
    }
  ]
}
