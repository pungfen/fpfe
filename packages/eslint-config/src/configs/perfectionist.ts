import { OverridesOptions, TypedFlatConfigItem } from '../types'
import { interopDefault } from '../utils'

export interface PerfectionistOptions { name?: 'perfectionist' }

export const perfectionist = async (options: OverridesOptions<{ 'on-xx': string }> & PerfectionistOptions = {}): Promise<TypedFlatConfigItem[]> => {
  const { rules: overrideRules = {} } = options

  const pluginPerfectionist = await interopDefault(import('eslint-plugin-perfectionist'))

  return [
    {
      files: [`**/*.?([cm])[jt]s?(x)`],
      plugins: { perfectionist: pluginPerfectionist },
      rules: {
        ...pluginPerfectionist.configs['recommended-natural']['rules'],
        ...overrideRules
      }
    }
  ]
}
