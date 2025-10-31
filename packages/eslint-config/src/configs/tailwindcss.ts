import type { Linter } from 'eslint'

import { OverridesOptions } from '../types'
import { interopDefault } from '../utils'

export interface TailwindcssOptions { name?: 'tailwindcss' }

export const tailwindcss = async (options: OverridesOptions<{ 'on-xx': string }> & TailwindcssOptions = {}): Promise<Linter.Config[]> => {
  const { rules: overrideRules = {} } = options

  const tailwindcss = await interopDefault(import('../plugins/tailwindcss') as unknown as typeof import('../plugins/tailwindcss')['default'])

  return [
    ...tailwindcss.configs.recommended,
    {
      files: [`**/*.?([cm])[jt]s?(x)`],
      rules: { ...overrideRules }
    }
  ]
}
