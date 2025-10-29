import type { ESLint, Linter } from 'eslint'

export interface OverridesOptions<Rules = Linter.Config['rules']> {
  files?: Linter.Config['files']

  ignores?: Linter.Config['ignores']

  parserOptions?: ESLint.Environment['parserOptions']

  rules?: Rules

  settings?: Linter.Config['settings']
}
