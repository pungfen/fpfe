import type { ESLint } from 'eslint'

import pluginIgnore from 'eslint-config-flat-gitignore'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export const pluginFpfe = () => {
  return {
    meta: {
      name: 'fpfe',
      version: '0.0.1'
    },
    rules: {
      
    }
  } as ESLint.Plugin
}

export {
  pluginIgnore,
  tseslint,
  stylistic
}
