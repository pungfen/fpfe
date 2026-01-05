import type { Linter } from "eslint"

import ts from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

export const vue = (options: { name?: string }) => {

  const { name = 'fpfe/vue' } = options

  return {
    name,
    
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        parser: ts.parser,
        extraFileExtensions: ['.vue'],
        sourceType: 'module'
      }
    }
  } as Linter.Config
}