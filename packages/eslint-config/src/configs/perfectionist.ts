import type { Linter } from 'eslint'
import type { ResolvableFlatConfig } from 'eslint-flat-config-utils'

import { loadPlugin } from '../utils'

export const perfectionist = async (options: Linter.Config & { prefix?: string } = {}) => {
  const perfectionist = await loadPlugin<typeof import('eslint-plugin-perfectionist')>('eslint-plugin-perfectionist')

  const { prefix = '', rules: overrideRules = {} } = options

  return [
    {
      ...perfectionist.configs['recommended-natural'],
      files: [`${prefix}**/*.?([cm])[jt]s?(x)`],
      rules: {
        ...perfectionist.configs['recommended-natural'].rules,
        ...overrideRules
      }
    }
  ] as ResolvableFlatConfig
}
