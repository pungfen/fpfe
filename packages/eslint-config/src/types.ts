import { Linter } from 'eslint'

import { type Rules } from './typegen'

export type Config = Omit<Linter.Config<Linter.RulesRecord & Rules>, 'plugins'> & {
  plugins?: Record<string, unknown>
}

export type Awaitable<T> = Promise<T> | T
export type MaybeArray<T> = T | T[]
