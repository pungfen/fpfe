import { GLOB_EXCLUDE } from '../globs'
import { pluginIgnore } from '../plugins'
import { Config } from '../types'

export const ignores = (): Config[] => [
  {
    ignores: GLOB_EXCLUDE,
    name: 'fpfe/global-ignores'
  },
  {
    ...pluginIgnore({ strict: false }),
    name: 'fpfe/gitignore'
  }
]
