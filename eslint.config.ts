import { defineWorkspaceConfig } from '@fpfe/eslint-config'

export default defineWorkspaceConfig(
  [
    { workspace: '@fpfe/ui', vue: true, typescript: true }
  ]
)