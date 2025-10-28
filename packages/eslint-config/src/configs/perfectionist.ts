import type { ResolvableFlatConfig } from 'eslint-flat-config-utils'

import { loadPlugin } from '../utils'

export const perfectionist = async (options: { prefix?: string } = {}) => {
  const perfectionist = await loadPlugin<typeof import('eslint-plugin-perfectionist')>('eslint-plugin-perfectionist')

  const { prefix = '' } = options

  if (prefix) {}

  return [perfectionist.configs['recommended-natural']] as ResolvableFlatConfig
}
