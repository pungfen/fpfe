import { defineWorkspaceConfig} from '@fpfe/eslint-config'

export default defineWorkspaceConfig(
  [
    {
      javascript: true,
      entry: 'packages/playground',
      perfectionist: true,
      stylistic: true,
      imports: true,
      typescript: true,
      vue: true
    },
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
    },
    {
      javascript: true,
      entry: 'packages/ui',
      perfectionist: true,
      stylistic: true,
      imports: true,
      typescript: true
    },
    {
      javascript: true,
      entry: 'packages/vite-config',
      perfectionist: true,
      stylistic: true,
      imports: true,
      typescript: true
    }
  ]
)
