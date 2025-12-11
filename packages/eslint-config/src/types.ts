import type { Linter } from 'eslint'

export type EslintConfig = Linter.Config

export type Awaitable<T> = Promise<T> | T
