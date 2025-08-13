import type { RuleOptions } from './typegen'

import type { Linter } from 'eslint'

export type Config = Omit<Linter.Config, 'plugins' | 'rules'> & {
  plugins?: Record<string, any>
  rules?: Record<string, Linter.RuleEntry<any> | undefined> & RuleOptions
}
