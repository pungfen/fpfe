import { Linter } from 'eslint'

import { Rules } from './typegen'

export type Awaitable<T> = Promise<T> | T

export type Config = Omit<Linter.Config<Linter.RulesRecord & Rules>, 'plugins'> & {
  plugins?: Record<string, unknown>
}

export type MaybeArray<T> = T | T[]
