import type { ESLint, Linter } from 'eslint'

export interface Config {
  imports?: boolean | Linter.Config
  javascript?: boolean | Linter.Config
  perfectionist?: boolean | Linter.Config
  stylistic?: boolean | Linter.Config
  typescript?: boolean | Linter.Config
  vue?: boolean | Linter.Config
}

export interface OverridesOptions<Rules = Linter.Config['rules']> {
  files?: Linter.Config['files']
  ignores?: Linter.Config['ignores']
  parserOptions?: ESLint.Environment['parserOptions']
  rules?: Rules
  settings?: Linter.Config['settings']
}
