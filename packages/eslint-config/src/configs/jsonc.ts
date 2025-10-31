import type { Linter } from 'eslint'

import { OverridesOptions } from '../types'
import { interopDefault } from '../utils'

export interface JsoncOptions { name?: 'jsonc' }

export const jsonc = async (options: JsoncOptions & OverridesOptions<{ 'on-xx': string }> = {}): Promise<Linter.Config[]> => {
  const { rules: overrideRules = {} } = options

  const json = await interopDefault(import('@eslint/json') as unknown as typeof import('@eslint/json')['default'])

  return [
    {
      files: [`**/*.json`],
      ignores: ['package-lock.json'],
      language: 'json/json',
      plugins: { json },
      rules: {
        ...json.configs.recommended.rules,
        ...overrideRules
      }
    },
    {
      files: [`**/*.jsonc`],
      language: 'json/jsonc',
      plugins: { json },
      rules: {
        ...json.configs.recommended.rules,
        ...overrideRules
      }
    },
    {
      files: [`**/*.json5`],
      language: 'json/json5',
      plugins: { json },
      rules: {
        ...json.configs.recommended.rules,
        ...overrideRules
      }
    }
  ]
}
