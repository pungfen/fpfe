import type { Linter } from 'eslint'

export interface Config {
  imports?: boolean | Linter.Config
  javascript?: boolean | Linter.Config
  perfectionist?: boolean | Linter.Config
  stylistic?: boolean | Linter.Config
  typescript?: boolean | Linter.Config
  vue?: boolean | Linter.Config
}
