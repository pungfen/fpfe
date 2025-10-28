import { defineWorkspaceConfig} from '@fpfe/eslint-config'

export default defineWorkspaceConfig([
  {
    path: 'packages/eslint-config',
    javascript: true,
    typescript: true,
    perfectionist: true,
    stylistic: true
  },
  {
    path: 'packages/shared',
    javascript: true,
    typescript: true,
    perfectionist: true,
    stylistic: true
  }
]
)
