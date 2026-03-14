import type { Config } from "../types"

import pluginImporter from 'eslint-plugin-importer'

export const importer = (): Config[] => {
  return [
    {
      name: 'fpfe/import',
      plugins: {
        import: pluginImporter
      },
      rules: {

      }
    }
  ]
}
