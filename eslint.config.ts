import { defineWorkspaceConfig } from '@fpfe/eslint-config'

export default defineWorkspaceConfig([
  {
    config: {
      javascript: true,
      perfectionist: true,
      stylistic: true,
      typescript: true
    },
    name: '@fpfe/eslint-config'
  }
], { ignores: ['**/dist/**', '**/node_modules/**', 'package-lock.json'] })
