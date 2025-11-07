import type { KnipConfig } from 'knip'

export default <KnipConfig>{
  entry: ['src/index.ts'],
  exclude: ['duplicates'],
  ignoreDependencies: ['lint-staged', '@types/eslint', '@intlify/eslint-plugin-vue-i18n', 'eslint-import-resolver-typescript', 'eslint-plugin-import', 'eslint-plugin-jsonc', 'eslint-plugin-jsdoc', 'eslint-plugin-promise', 'eslint-plugin-unused-imports', 'eslint-plugin-module-interop', 'eslint-plugin-vue', 'eslint-plugin-vue-composable', 'eslint-plugin-vue-scoped-css', 'eslint-plugin-vuejs-accessibility', 'typescript-eslint']
}
