import type { Awaitable } from '@fpfe/shared'

import { composer } from 'eslint-flat-config-utils'
import { cwd } from 'node:process'

import { TypedFlatConfigItem } from './types'

export const defineConfig = async (...configs: Awaitable<TypedFlatConfigItem[]>[]) => {
  console.info('eslint in ...', cwd())
  return composer().append(...configs)
}
