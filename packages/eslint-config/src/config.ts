import type { Awaitable } from '@fpfe/shared'

import { composer, FlatConfigComposer } from 'eslint-flat-config-utils'
import { cwd } from 'node:process'

import { TypedFlatConfigItem } from './types'

export const defineConfig = (...configs: Awaitable<TypedFlatConfigItem[]>[]): FlatConfigComposer<TypedFlatConfigItem> => {
  console.info('eslint in ...', cwd())
  return composer().append(...configs)
}
