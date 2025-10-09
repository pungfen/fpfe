import type { Linter } from 'eslint'

import { FlatConfigComposer } from 'eslint-flat-config-utils'

import type { Awaitable } from './types'

export const defineConfig = (...configs: Awaitable<Linter.Config | Linter.Config[]>[]): FlatConfigComposer => {
  const baseConfigs: Awaitable<Linter.Config[]>[] = []

  return new FlatConfigComposer().append(...baseConfigs, ...configs)
}
