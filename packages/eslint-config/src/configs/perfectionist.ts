import { OverridesOptions } from '../types'
import { interopDefault } from '../utils'

export interface PerfectionistOptions { name?: 'perfectionist' }

export const perfectionist = async (options: OverridesOptions<{ 'on-xx': string }> & PerfectionistOptions = {}) => {
  const { rules: overrideRules = {} } = options

  const perfectionist = await interopDefault(import('eslint-plugin-perfectionist'))

  return [
    {
      files: [`**/*.?([cm])[jt]s?(x)`],
      plugins: { perfectionist },
      rules: {
        ...perfectionist.configs['recommended-natural']['rules'],
        ...overrideRules
      }
    }
  ]
}
