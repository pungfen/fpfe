import type { Config } from "../types";

import pluginJsonc from 'eslint-plugin-jsonc'

export const jsonc = (): Config[] => [
  ...pluginJsonc.configs["flat/recommended-with-jsonc"].map(it => ({ ...it, name: `fpfe/${it.name || 'recommended'}` })),
  {
    name: 'fpfe/jsonc',
    rules: {
      'jsonc/quote-props': 'off',
      'jsonc/quotes': 'off'
    }
  }
]
