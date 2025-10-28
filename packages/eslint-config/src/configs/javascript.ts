import type { ResolvableFlatConfig } from 'eslint-flat-config-utils'

import globals from 'globals'

import { loadPlugin } from '../utils'

export const javascript = async (options: { prefix?: string } = {}) => {
  const { prefix = '' } = options

  const js = await loadPlugin<typeof import('@eslint/js')>('@eslint/js')

  return [
    {
      extends: ['js/recommended'],
      files: [`${prefix}**/*.js`],
      languageOptions: { globals: globals.node },
      plugins: { js }
    }
  ] as ResolvableFlatConfig
}
