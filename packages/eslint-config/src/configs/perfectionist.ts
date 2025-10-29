import { OverridesOptions } from '../types'
import { loadPlugin } from '../utils'

export interface PerfectionistOptions { name?: 'perfectionist' }

export const perfectionist = async (options: OverridesOptions<{ 'on-xx': string }> & PerfectionistOptions = {}) => {
  const { rules: overrideRules = {} } = options

  const perfectionist = await loadPlugin<typeof import('eslint-plugin-perfectionist')>('eslint-plugin-perfectionist')

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
