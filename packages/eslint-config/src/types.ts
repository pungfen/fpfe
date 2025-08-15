import type { RuleOptions, ConfigNames } from './typegen'

import type { Linter } from 'eslint'
import type { Awaitable } from '@fp/shared'

export type { Awaitable }
export type { ConfigNames }

export type Rules = Record<string, Linter.RuleEntry<any> | undefined> &
  RuleOptions

export type TypedFlatConfigItem = Omit<Linter.Config, 'plugins' | 'rules'> & {
  plugins?: Record<string, any>
  rules?: Rules
}
