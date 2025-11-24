import { defineConfig } from 'eslint/config'

import perfectionist from 'eslint-plugin-perfectionist'
import ts from 'typescript-eslint'

export default () => {
  return defineConfig([
    {
      ignores: []
    },
    {
      languageOptions: {
        globals: {
          myGlobal: true
        }
      }
    },
    {
      plugins: {
        perfectionist
      }
    },
    {
      plugins: {
        ts
      }
    }
  ])
}
