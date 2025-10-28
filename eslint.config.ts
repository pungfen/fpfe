import { defineWorkspaceConfig} from '@fpfe/eslint-config'

export default defineWorkspaceConfig([
  {
    javascript: true,
    entry: 'packages/eslint-config',
    perfectionist: true,
    stylistic: true,
    imports: true,
    typescript: {
      rules: {
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  },
  {
    javascript: true,
    entry: 'packages/shared',
    perfectionist: true,
    stylistic: true,
    imports: true,
    typescript: {
      rules: {
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  }
]
)
