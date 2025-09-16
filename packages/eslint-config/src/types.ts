import type { RuleOptions, ConfigNames } from './typegen'

import type { Linter } from 'eslint'

export type { ConfigNames }

export type Rules = Record<string, Linter.RuleEntry<any> | undefined> &
  RuleOptions

export type TypedFlatConfigItem = Omit<
  Linter.Config<Linter.RulesRecord & RuleOptions>,
  'plugins' | 'rules'
> & {
  plugins?: Record<string, any>
  rules?: Rules
}
