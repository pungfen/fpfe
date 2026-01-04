import style from '@stylistic/eslint-plugin'
import { Linter } from 'eslint'
import perfectionist from 'eslint-plugin-perfectionist'
import unicorn from 'eslint-plugin-unicorn'
import { defineConfig } from 'eslint/config'
import ts from 'typescript-eslint'

console.log(ts.configs.strictTypeChecked)

export default defineConfig(
  {
    ignores: ['**/*.d.ts', '**/dist/**']
  },
  {
    plugins: {
      ['perfectionist']: perfectionist,
      ['style']: style,
      ['ts']: ts.plugin,
      ['unicorn']: unicorn
    },
    settings: {
      perfectionist: {
        order: 'asc',
        partitionByComment: true,
        type: 'natural'
      }
    }
  },
  {
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
        projectService: true,
        sourceType: 'module',
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      ...style.configs.customize({ commaDangle: 'never', pluginName: 'style' }).rules,
      'perfectionist/sort-imports': 'error',
      'perfectionist/sort-objects': 'error',
      ...unicorn.configs.recommended.rules
    }
  },
  { files: ['eslint.config.ts'] },
  { files: ['./packages/eslint-config/src/**/*.ts'] }
)
