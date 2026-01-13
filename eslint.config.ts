import { defineWorkspaceConfig } from '@fpfe/eslint-config'

export default defineWorkspaceConfig({
  root: import.meta.dirname,
  workspace: [{ name: '@fpfe/ui', vue: true, typescript: true }]
})
