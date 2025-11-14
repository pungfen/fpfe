import type { ESLint, Linter } from 'eslint'

import type { RuleOptions } from './typegen'

export type Awaitable<T> = Promise<T> | T

export interface OverridesOptions<Rules = RuleOptions> {
  files?: Linter.Config['files']
  ignores?: Linter.Config['ignores']
  parserOptions?: ESLint.Environment['parserOptions']
  rules?: Rules
}

export type TypedFlatConfigItem = Omit<Linter.Config, 'plugins'> & { plugins?: Record<string, any> }
