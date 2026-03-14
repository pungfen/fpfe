import { GLOB_EXCLUDE } from '../globs'
import { type Config } from '../types'

import gitignore from 'eslint-config-flat-gitignore'

export const ignore = (): Config[] => [
  {
    ignores: GLOB_EXCLUDE,
    name: 'fpfe/global-ignores'
  },
  {
    ...gitignore({ strict: false }),
    name: 'fpfe/gitignore'
  }
]
