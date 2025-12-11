
import type { Linter } from 'eslint'

import {
  plugin,
  configs
} from 'typescript-eslint'

export const typescript =  (): Linter.Config[] => {

  return [
    {
      plugins: {
        ["@typescript-eslint"]: plugin
      }
    },
    {
      languageOptions: {
        ecmaVersion: 'latest',
        parserOptions: {
          sourceType: 'module',
          tsconfigRootDir: process.cwd(),
        }
      },
      rules: {
        ...configs.recommendedTypeChecked.reduce<Linter.RulesRecord>((acc, c) => ({ ...acc, ...c.rules }), {}),
        ...configs.stylisticTypeChecked.reduce<Linter.RulesRecord>((acc, c) => ({ ...acc, ...c.rules }), {}),
      }
    }
  ]
}
