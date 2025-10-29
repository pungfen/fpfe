import type { Awaitable } from '@fpfe/shared'
import type { Linter } from 'eslint'

import { composer } from 'eslint-flat-config-utils'
import { cwd } from 'node:process'

export const defineConfig = async (...configs: Awaitable<Linter.Config | Linter.Config[]>[]) => {
  console.info('eslint in ...', cwd())
  return composer().append(...configs)
}
