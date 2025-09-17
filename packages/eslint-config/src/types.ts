import type { RuleOptions, ConfigNames } from './typegen'

import { Linter  } from 'eslint'

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

export type Config = {
  typescript?: boolean
  vue?: boolean
  formatter?: boolean
}